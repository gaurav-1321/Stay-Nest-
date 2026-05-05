const router = require("express").Router();
const pool = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Helper function for JWT
const generateToken = (user) => {
    return jwt.sign(
        { id: user.id, email: user.email }, 
        process.env.JWT_SECRET, 
        { expiresIn: "1d" }
    );
};

// --- REGISTER ---
router.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // 1. Basic Validation
        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // 2. Check if user exists
        const userExists = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
        if (userExists.rows.length > 0) {
            return res.status(409).json({ message: "Email already registered!" });
        }

        // 3. Hash password
        const saltRounds = 10;
        const hash = await bcrypt.hash(password, saltRounds);

        // 4. Insert new user
        const result = await pool.query(
            "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id, name, email",
            [name, email, hash]
        );

        const newUser = result.rows[0];

        // 5. Respond (Optionally send token here so they are logged in instantly)
        res.status(201).json({ 
            message: "User registered successfully",
            user: newUser 
        });

    } catch (error) {
        console.error("REGISTER ERROR:", error.message);
        res.status(500).json({ message: "Server error" });
    }
});

// --- LOGIN ---
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        // 1. Validation
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }

        // 2. Find user
        const result = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
        
        // Use generic message for security (don't reveal if email exists or not)
        if (result.rows.length === 0) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        const user = result.rows[0];

        // 3. Check password
        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        // 4. Generate Token using the helper
        const token = generateToken(user);
        
        // 5. Success Response
        res.status(200).json({ 
            message: "Logged in successfully",
            token: token,
            user: { 
                id: user.id, 
                email: user.email, 
                name: user.name 
            }
        });

    } catch (error) {
        console.error("LOGIN ERROR:", error.message);
        res.status(500).json({ message: "Server Error" });
    }
});

module.exports = router;
