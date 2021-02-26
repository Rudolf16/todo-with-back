const Todo=require('../Models/Todo');

module.exports.getTodo= async(req,res)=>{
    try {
        const todoList=await Todo.find();
        res.send(todoList)
    } catch (error) {
        console.log(error)
    }
   
}
module.exports.postTodo=async(req,res)=>{
    try {
        console.log(req.body)
    } catch (error) {
        
    }
    
}