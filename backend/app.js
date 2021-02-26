const express=require("express");
const app=express();
const mongoose=require("mongoose");
const cors=require("cors")
const todoRouter=require("./routes/todoRoutes");
const itemRouter=require("./routes/ItemRoute")
const PORT=5000;
const dbAdress="mongodb+srv://Rudolf16:sureba80@cluster0.pvkji.mongodb.net/todoList?retryWrites=true&w=majority"

const runServer= async()=>{
    mongoose.connect(dbAdress,
        {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
    app.listen(PORT)
    console.log("server have been statring")
}


app.use(cors())
app.use(express.json())
try {
    runServer()
} catch (error) {
    console.log(error)
}
app.use(todoRouter)
app.use(itemRouter)