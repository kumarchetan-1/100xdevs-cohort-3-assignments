const jwt = require("jsonwebtoken")
const JWT_USER_SECRET = process.env.JWT_USER_SECRET

function userMiddleware(req, res, next) {
    const token = req.headers.authorization

    const decoded = jwt.verify(token, JWT_USER_SECRET)
    if(!decoded){
      return  res.status(401).json({ message: "Incorrect JSON Web Token" })
    } else{
        req.userId = decoded.id 
        next()
    }

}

module.exports = userMiddleware;