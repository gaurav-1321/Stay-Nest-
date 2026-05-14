const express = require("express");
const router = express.Router();
const pool = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Helper function for JWT - No destructuring syntax utilized
const generateToken = (userObject) => {
    return jwt.sign(
        { id: userObject.id, email: userObject.email }, 
        process.env.JWT_SECRET, 
        { expiresIn: "1d" }
    );
};

// REGISTER
router.post("/register", async (req, res) => {
    try {
        const nameValue = req.body.name;
        const emailValue = req.body.email;
        const passwordValue = req.body.password;

        // Basic Validation
        if (!nameValue || !emailValue || !passwordValue) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Check if user exists
        const userExists = await pool.query("SELECT * FROM users WHERE email = $1", [emailValue]);
       

        // Hash password
        const saltRounds = 10;
        const hash = await bcrypt.hash(passwordValue, saltRounds);

    
        const result = await pool.query(
            "INSERT INTO users (name, email, password, type) VALUES ($1, $2, $3, $4) RETURNING id, name, email, type",
            [nameValue, emailValue, hash, "user"]
        );

        const newUser = result.rows[0];

        res.status(201).json({ 
            message: "User registered successfully",
            user: {
                id: newUser.id,
                name: newUser.name,
                email: newUser.email,
                type: newUser.type
            }
        });

    } catch (error) {
        console.error("REGISTER ERROR:", error.message);
        res.status(500).json({ message: "Server error" });
    }
});

// LOGIN
router.post("/login", async (req, res) => {
    try {
        const emailValue = req.body.email;
        const passwordValue = req.body.password;

        // Validation
        if (!emailValue || !passwordValue) {
            return res.status(400).json({ message: "Email and password are required" });
        }

        // Find user from database
        const result = await pool.query("SELECT * FROM users WHERE email = $1", [emailValue]);
        
        if (result.rows.length === 0) {
            console.log("Login Failure: No match found for email:", emailValue);
            return res.status(401).json({ message: "Invalid email or password" });
        }

        const user = result.rows[0];

        // Check password matching criteria
        const isValid = await bcrypt.compare(passwordValue, user.password);
        if (!isValid) {
            console.log("Login Failure: Incorrect password hash check for:", emailValue);
            return res.status(401).json({ message: "Invalid email or password" });
        }

        const token = generateToken(user);
        console.log("User successfully validated. System Account Type:", user.type);

        // Check for admin type value explicitly
        if (user.type === "admin") {
            return res.status(200).json({
                message: "Admin Login",
                token: token, 
                user: { 
                    id: user.id, 
                    email: user.email, 
                    type: user.type
                }
            });
        } else {
            
            return res.status(200).json({ 
                message: "Logged in successfully",
                token: token,
                user: { 
                    id: user.id, 
                    email: user.email, 
                    name: user.name,
                    type: user.type
                }
            });
        }

    } catch (error) {
        console.error("LOGIN ERROR:", error.message);
        res.status(500).json({ message: "Server Error" });
    }
});

module.exports = router;
