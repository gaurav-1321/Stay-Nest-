const express = require("express");
const app= express();
const cors = require("cors");
const postgres=require("postgres");
// Middleware
app.use(cors());
app.use(express.json());

// Routes //base path
app.use("/api/auth",require("./Routes/auth"));
app.use("/api/auth",require("./Routes/auth"));



app.listen(5000,()=>{
 console.log("server is running at 5000")
}
 );
