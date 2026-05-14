const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  
  // Safely extract token from 'Bearer <token>' string
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "No Authorization header found." });
  }

  // Replace string with process.env.JWT_SECRET in production
  jwt.verify(token, "YOUR_JWT_SECRET", (err, decodedClaims) => {
    if (err) {
      return res.status(403).json({ message: "Invalid or expired token." });
    }

    if (!decodedClaims.hostid) {
      return res.status(400).json({ message: "Token payload is missing hostid." });
    }

    // Attach verified hostid to request object
    req.host_id = decodedClaims.hostid;
    next();
  });
};

module.exports = authenticateToken;
