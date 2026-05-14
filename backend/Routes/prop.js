const express = require("express");
const router = express.Router();
const pool = require("../db");

router.post("/create", async (req, res) => {
  try {
    const authHeader = req.headers["authorization"];
    
    if (!authHeader) {
      return res.status(401).json({ message: "No Authorization header found." });
    }

    // Safely parse out token text 
    const matches = authHeader.match(/^Bearer\s+(.+)$/i);
    const token = matches ? matches[1] : null;

    if (!token) {
      return res.status(401).json({ message: "Malformed Authorization header format." });
    }

    const tokenSegments = token.split(".");
    if (tokenSegments.length !== 3) {
      return res.status(400).json({ message: "Invalid token structure format." });
    }

    const jsonString = Buffer.from(tokenSegments[1], "base64").toString("utf-8");
    const claims = JSON.parse(jsonString);
    
    const host_id = claims.hostid; 

    if (!host_id) {
      return res.status(400).json({ message: "Token payload is missing hostid." });
    }

    const { propdata } = req.body; 

    const defaultStatus = "true";

    const result = await pool.query(
      "INSERT INTO property (data, status, host_id) VALUES ($1, $2, $3) RETURNING *",
      [propdata, defaultStatus, host_id]
    );

    return res.status(201).json({ 
      message: "Property added successfully",
      property: result.rows[0]
    });

  } catch (error) {
    console.error("Backend Error:", error.message);
    return res.status(500).json({ message: `Server Error: ${error.message}` });
  }
});

router.get("/getdata", async (req, res) => { 
  try {
    const result = await pool.query("SELECT * FROM property"); 
    return res.status(200).json({ message: "Data fetched", data: result.rows }); 
  } catch (error) { 
    return res.status(500).json({ message: error.message }); 
  } 
});

module.exports = router;
