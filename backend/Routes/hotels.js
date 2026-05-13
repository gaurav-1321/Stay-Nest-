const axios =require("axios");
const router = require("express").Router();
const pool=require("../db");

router.get("/get", async (req, res) => { 
  try { 
    const data = await pool.query("SELECT * FROM property"); 
  
    res.status(200).json({ 
      message: "data is fetched from database", 
      data: data.rows 
    }); 
    
    console.log(data.rows); 
  } catch (error) { 
    console.error("DB fetch error:", error); 
    res.status(500).json({ message: "error in the server" }); 
  } 
});


module.exports = router;