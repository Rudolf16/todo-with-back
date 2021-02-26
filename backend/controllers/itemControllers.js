const Todo = require('../Models/Todo');

module.exports.getItem = async (req, res) => {
    try {
        console.log(req.params)
        const {id}=req.params
        const todoItem = await Todo.findById(id);
        res.send(todoItem)
    } catch (error) {
        console.log(error)
    }

}
