const express = require("express");
const router = express.Router();
const pool = require("../db");


router.post("/create", async (req, res) => {
  const { propdata } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO property (data) VALUES ($1) RETURNING *",
      [propdata]
    );
    res.status(201).json({ message: "Property added successfully" });
  } catch (error) {
    console.error("DB Error", error.message);
    res.status(500).json({ message: "Database insertion failed" });
  }
});

router.get("/getdata",async(req,res)=>{

  try{
  const data= await pool.query("SELECT * FROM property");
  res.status(200).json({
    message: "data is fetched from database",
      data: result.rows
  });
  console.log(data);
  }

  catch(error){
    console.log("DB error cannot fetch data");
    res.status(500).json({
      message:"error in the server"
    });
  }
})







module.exports = router;
