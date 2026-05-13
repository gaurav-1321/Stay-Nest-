const router = require("express").Router();
const pool=require("../db");

router.patch("/item/:id", async (req, res) => {
 
    try {
        const { id } = req.params;
        const { status } = req.body; 
        
        const { rows } = await pool.query("UPDATE property SET status = $1 WHERE id = $2 RETURNING *", [status, id]);

        if (rows.length === 0) {
            return res.status(404).json({ message: "Property not found" });
        }
          
        res.status(200).json(rows[0]);
        
    } catch (error) {
        console.error("Database Error:", error.message);
        res.status(500).json({ message: "An error occurred while updating the property" });
    }
});

module.exports = router;
