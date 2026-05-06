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

module.exports = router;
