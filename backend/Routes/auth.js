const router = require("express").Router();
const pool = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken"); 


const generateToken = (userId) => {
    return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: "1h" });
};

// --- REGISTER ---
router.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if user exists
        const userExists = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
        if (userExists.rows.length > 0) {
            return res.status(409).json({ message: "Email already registered!" });
        }

        
        const hash = await bcrypt.hash(password,10);

        //new user
        const newUser = await pool.query(
            "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id, name, email",
            [name, email, hash]
        );

        res.status(201).json({ 
            message: "User registered successfully" 
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

        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }

        //find user
        const result = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
        if (result.rows.length === 0) {
          
            return res.status(401).json({ message: "Invalid" });
        }

        const user = result.rows[0];
        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
            return res.status(401).json({ message: "Invalid email or password" });
        }


        res.status(200).json({
            message: "Login successful!",
        
        });

    } catch (error) {
        console.error("LOGIN ERROR:", error.message);
        res.status(500).json({ message: "Server Error" });
    }
});

module.exports = router;
