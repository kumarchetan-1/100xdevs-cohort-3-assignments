const { Router } = require("express");
const { userMiddleware } = require("../middleware/user");
const { Todo } = require("../database/index");
const todoRouter = Router();

// todo Routes
todoRouter.post('/', userMiddleware, async (req, res) => {
    // Implement todo creation logic
    const { title, description, status, priority } = req.body
    const userId = req.userId;
  
    try {
        const foundTodo = await Todo.findOne({
            title, description, status, priority, userId
        })
        if (foundTodo) {
          return  res.json({ message: `Duplicate todo for userId: ${userId}`})
        }
      const todo = await Todo.create({
            title, description, status, priority, userId
        })
       res.json({ todoId: todo._id, message: "Todo created successfully"})
    } catch (error) {
        res.json({
            message: "Error in adding the todos",
            error: error.message
        })
    }

}); 

todoRouter.put('/', userMiddleware, async (req, res) => {
    // Implement update todo  logic
    const { title, description, status, priority, todoId } = req.body
    const userId = req.userId;
    
    try {
        const todo = await Todo.updateOne({
            id: todoId,
            userId
        },{
            title, description, status, priority
        })
        res.json({
            message: "Todo updated successfully",
            todoId, userId
        })
    } catch (error) {
        res.json({
          message: "Error in updating todo",
          error: error.message
        })
    }
});

todoRouter.delete('/', userMiddleware, async (req, res) => {
    // Implement delete todo logic (delete all todos of a user)
    const userId = req.userId
    try {
       await Todo.deleteMany({
        userId
       })
       res.json({
        message: `All todos of userId: ${userId} deleted`
       })
    } catch (error) {
        res.json({
            message: "Error in deleting todo",
            error: error.message
        })
    }
});

todoRouter.delete('/:id', userMiddleware, async(req, res) => {
    // Implement delete todo by id logic
    const todoId = req.params.id
    try {
        await Todo.deleteOne({ _id : todoId})
        res.json({
            message: `Todo deleted with id: ${todoId}`
        })
    } catch (error) {
        res.json({
            message: `Error in deleting the todo with id: ${todoId}`,
            error: error.message
        })
    }
});

todoRouter.get('/', userMiddleware, async(req, res) => {
    // Implement fetching all todo logic
    const userId = req.userId;
    try {
        const todos = await Todo.find({ userId })
        res.json({
            todos
        })
    } catch (error) {
        res.json({
            message: "Error in getting the todos",
            error: error.message
        })
    }
});

todoRouter.get('/:id', userMiddleware, async(req, res) => {
    // Implement fetching todo by id logic
    const todoId = req.params.id
    
    try {
        const todo = await Todo.findOne({ _id : todoId })
        res.json({
            todo
        })
    } catch (error) {
        res.json({
            message: "Error in getting the todo with todoId: ${ todoId}",
            error: error.message
        })
    }
});

module.exports = {
    todoRouter
}