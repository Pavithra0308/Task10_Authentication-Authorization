const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  // console.log("JWT_KEY:", process.env.JWT_KEY);
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "No or malformed token" });
  }
  const token = authHeader.split(" ")[1];
  console.log("Incoming Token:", token);

  try {
    const payload = jwt.verify(token, process.env.JWT_KEY);
    req.user = payload;
    req.token = token;
    next();
  } catch (error) {
    console.error("Token verification error:", error.message);
    return res.status(401).json({ message: "Not a valid Token" });
  }
};

module.exports = verifyToken;
