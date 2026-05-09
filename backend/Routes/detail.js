const express = require("express");
const router = express.Router();
const pool = require("../db");

router.get("/item/:id", async (req, res) => {
    try {
        const  id = req.params.id || 1;
      
        const {rows} = await pool.query("SELECT * FROM property WHERE id = $1", [id]);
          
        res.status(200).json(rows[0]);
        
    } catch (error) {
        console.error("Database Error:", error.message);
        res.status(500).json({ message: "An error occurred while fetching the property data" });
    }
});

module.exports = router;
