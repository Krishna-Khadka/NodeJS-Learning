const jwt = require("jsonwebtoken");

const jwtAuthMiddleware = (req, res, next) => {
  // first check request headers has authorization or not
  const authoraization = req.headers.authorization;
  if (!authoraization)
    return res.status(401).json({ error: "Token not found" });

  // Extract the jwt token from the request headers
  const token = req.headers.authorization.split(" ")[1];
  if (!token) return res.status(400).json({ error: "Unauthorized" });

  try {
    // Verify the jwt token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach the user information to the request object
    req.user = decoded;
    next();
  } catch (error) {
    console.log(error);
    res.status(404).json({ error: "Invalid Token" });
  }
};

// function to generate JWT token
const generateToken = (userData) => {
  // Generate a new JWT token using user data
  return jwt.sign({ userData }, process.env.JWT_SECRET, { expiresIn: 30 });
};

module.exports = { jwtAuthMiddleware, generateToken };
