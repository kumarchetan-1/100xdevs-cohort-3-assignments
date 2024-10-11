const dotenv = require("dotenv");
const express = require("express");
const { todoRouter } = require("routes/todo")
const { userRouter } = require("routes/user")
dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.get("/healthy", (req, res)=> res.send("I am Healthy"));

app.use("/app/v1/user", userRouter)
app.use("/app/v1/todo", todoRouter)

//  start writing your routes here

app.listen(port, ()=> console.log(`server is running at http://localhost:${port}`));