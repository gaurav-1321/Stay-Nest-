const axios =require("axios");
const router = require("express").Router();
router.get("/hotel",async(req,res)=>{
try{
  const q = req.query.q || "london";
   const response = await axios.get("https://serpapi.com/search.json", {
        params: {
          engine: "google_hotels",
          q,
          check_in_date: "2026-05-12",
          check_out_date: "2026-05-15",
          adults: 2,
          currency: "INR",
          gl: "in",
          hl: "en",
          api_key: "c23fb0823ba5f1e621481c57d443384e580bc305dd233fa63a5421bd90f4b539",
        },
      });
     console.log(response.data);
  
  const hotels=response.data.properties;
   return res.json({hotels});


}catch(error){
    res.status(500).json({
      message:"Error in Server"
    })

}
});


module.exports = router;