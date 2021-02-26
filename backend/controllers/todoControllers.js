const Todo = require('../Models/Todo');

module.exports.getTodo = async (req, res) => {
    try {
        const todoList = await Todo.find();
        res.send(todoList)
    } catch (error) {
        console.log(error)
    }

}
module.exports.postTodo = async (req, res) => {
    try {
        const { item, id } = req.body
        await Todo.create({ item, id })
        res.json({ messahe: "Todo created succesfully" })
        console.log("Todo created succesfully")
    } catch (error) {
        console.log("Todo not created")
        console.log(error)
    }

}