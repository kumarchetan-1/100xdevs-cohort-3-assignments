const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config();
const MongoDbString = process.env.MONGODB_STRING

const Schema = mongoose.Schema
const ObjectId = mongoose.ObjectId

mongoose.connect(MongoDbString)
.then(() => console.log("Database connected!"))
.catch(error => console.log(`Error in connecting Database: ${error}`))

const UserSchema = new Schema({
    email: { type: String, unique: true},
    password: String,
    name: String
}, { timestamps: true })
 
const TodoSchema = new Schema({
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

const User = mongoose.model('User', UserSchema);
const Todo = mongoose.model('Todo', TodoSchema);

module.exports = {
    User,
    Todo
}