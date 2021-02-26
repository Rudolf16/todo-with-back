const router=require("express").Router();
const {getTodo,postTodo}=require("../controllers/todoControllers")


router.get("/todo",getTodo)
router.post("/todo",postTodo)


module.exports=router