const router = require("express").Router(); 
const pool = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv=require('dotenv').config();
// signup host
router.post("/signuphost", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const result = await pool.query("SELECT * FROM host WHERE email = $1", [email]);
        if (result.rows.length > 0) {
            return res.status(400).json({ message: "Email already registered" });
        }

        const hash = await bcrypt.hash(password, 10);

        const data = await pool.query(
            "INSERT INTO host (name, email, password) VALUES ($1, $2, $3) RETURNING id, name, email",
            [name, email, hash]
        );

        res.status(201).json({ message: "Signup as host successfully", user: data.rows[0] });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: "Server error" });
    }
});

// login host
router.post("/loginhost", async (req, res) => {
    try {
        const { email, password } = req.body;

      
        const result = await pool.query("SELECT * FROM host WHERE email = $1", [email]);

        if (result.rows.length === 0) {
            return res.status(400).json({ message: "Email does not exist !!" });
        }

        const user = result.rows[0];
        const isValid = await bcrypt.compare(password, user.password);

        if (!isValid) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        if (!process.env.JWT_SECRET) {
            console.error("JWT_SECRET is missing from environment variables");
            return res.status(500).json({ message: "Server configuration error" });
        }

        
        const token = jwt.sign(
            { id: user.id, email: user.email }, 
            process.env.JWT_SECRET, 
            { expiresIn: '1d' } 
        );
        console.log(token);
        res.status(200).json({ 
            message: "You are logged in successfully",
            token: token,
            user: { id: user.id, email: user.email }
        });

    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
