const { Router } = require("express");
const userRouter = Router();
const { userMiddleware } = require("../middleware/user");
const z = require("zod");
const { User, Todo } = require("../database/index");
const JWT_USER_SECRET = process.env.JWT_USER_SECRET
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

const userSchema = z.object({
    email: z.string().min(3).max(30).email(),
    name: z.string().min(1).max(30),
    password: z
               .string()
               .min(6)
               .max(30)
               .regex(/[a-z]/, { message: "Please give atleast one smallcase character"})
               .regex(/[A-Z]/, { message: "Please give atleast one uppercase character"})
               .regex(/\d/, { message: "Please give atleast one digit"})
               .regex(/[!@#$%^&*()_-+=',.\/]/, { message: "Please give atleast one special character"})
               .regex(/^\S*$/, { message: "Please don't use whitespace in between the password"})
})

// User Routes
userRouter.post('/signup', async (req, res) => {
    const { email, password, name } = req.body

    const {success, data, error} = userSchema.safeParse(req.body)
    if(!success){
       return res.status(401).json({
            message: "Please provide valid details",
            errors: error.errors
        })
    }

    const foundUser = await User.findOne({ email })
    if (foundUser) {
       return res.status(400).json({ message: "An account with this email already exists"})
    }

    const encodedPassword = await bcrypt.hash(password, 10)
    User.create({
        name, email, password: encodedPassword
    })
    .then(()=> res.status(200).json({
      message:  "You signed up successfully"
    }))
    .catch(err =>  res.status(500).json({ 
        message: "Internal server error occurred"
    }))
});

userRouter.post('/login', async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.findOne({ email })
        if (!user) {
           return res.status(403).json({ message: "User not found"})
        }

        const passwordCompare = await bcrypt.compare(password, user.password)
        if( !passwordCompare ){
           return res.status(403).json({ message: "Incorrect credentials"})
        }

       const token = jwt.sign({ id: user._id }, JWT_USER_SECRET)
        res.status(200).json({ token })
    } catch (error) {
        res.status(500).json({ message: "Internal server error"})
    }
});

userRouter.get('/todos', userMiddleware, async (req, res) => {
    const userId = req.userId

    try {
        const courses = await Todo.find({ 
            userId
        })
        res.status(200).json({
            courses
        })
    } catch (error) {
        res.status(500).json({
            message: "Unable to get todos",
            error
        })
    }
});

userRouter.post('/logout', userMiddleware, (req, res) => {
    req.userId = null
    res.json({ message: "You logged out successfully"})
});

module.exports = userRouter