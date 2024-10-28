const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")
dotenv.config();
const JWT_USER_SECRET = process.env.JWT_USER_SECRET

function userMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;

  // Check if the authorization header is present
  if (!authHeader) {
      return res.status(401).json({ message: "No token provided" });
  }

  // Split the header into parts and retrieve the token
  const token = authHeader.split(' ')[1]; // This will give you the token part

    try {
      console.log(token)
      const decoded = jwt.verify(token, JWT_USER_SECRET)
      console.log({ message: "Verified successfully", decoded})
      req.userId = decoded.id 
      next()
    } catch (error) {
      res.status(401).json({ message: "Invalid JSON Web Token" })
    }

}

module.exports = {
  userMiddleware
} 