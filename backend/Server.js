const express = require("express");
const app = express();
const cors = require("cors");

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", require("./Routes/auth"));
app.use("/api/hotels", require("./Routes/hotels"));
app.use("/api/hostauth", require("./Routes/hostauth")); 
app.use("/api/prop", require("./Routes/prop"));

app.listen(5000, () => {
  console.log("server is running at 5000");
});
