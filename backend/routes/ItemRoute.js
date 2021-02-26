const router=require("express").Router();
const {getItem}=require("../controllers/itemControllers")


router.get("/item:id",getItem)



module.exports=router