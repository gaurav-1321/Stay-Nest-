const router = require("express").Router();
const pool = require("../db");
const bcrypt =require("bcrypt");
// register
router.post("/register", async (req, res) => {
  try {
      console.log("Register");
    const { name, email, password } = req.body;
    
    //check if already 
    const result = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    if (result.rows.length > 0) {
      return res.status(400).json({ message: "Email already registered!" });
    }

    // hash password
  
    const hash = await bcrypt.hash(password, 10);

    // new user
const newUser = await pool.query(
  "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING userid, name, email",
  [name, email, hash]
);

  
    res.status(201).json({ 
        message: "You are Registered",
    });

  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
