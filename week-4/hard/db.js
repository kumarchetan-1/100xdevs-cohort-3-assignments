const mongoose = require("mongoose")

const Schema = mongoose.Schema
const ObjectId = mongoose.ObjectId

mongoose.connect("")
.then(() => console.log("Database connected!"))
.catch(error => console.log(`Error in connecting Database: ${error}`))

const userSchema = new Schema({
    email: { type: String, unique: true},
    password: String,
    name: String
}, { timestamps: true })

const todoSchema = new Schema({
    title: String,
    description: String,
    status: Boolean,
    priority: {
        type: String,
        enum: ['low', 'medium', 'urgent'],
        default: 'low'
    },
    userId: { type: ObjectId, ref: "user"}
})

const userModel = mongoose.model("user", userSchema)
const todoModel = mongoose.model("todo", todoSchema)

module.exports = {
 userModel, todoModel
}