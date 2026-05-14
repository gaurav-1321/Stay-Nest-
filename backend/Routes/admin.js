const axios = require("axios");
const router = require("express").Router();
const pool = require("../db");

router.get("/admindata", async (req, res) => { 
  try { 
    
    
    const result = await pool.query(queryText); 
    
    console.log(result.rows); 
    
    res.status(200).json({ 
      message: "Admin records aggregated successfully", 
      data: result.rows 
    }); 
    
  } catch (error) { 
    console.error("query not working:", error.message); 
    res.status(500).json({ message: "Internal server error" }); 
  } 
});

module.exports = router;
