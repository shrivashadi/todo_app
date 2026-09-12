globalThis.crypto = require('crypto').webcrypto;
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("Welcome to the Todo API this is the megical server that will help you to manage your todos////")
});



const Todo = require('./models/TodoModel');

const connectDB = async () => {
    try{
       await mongoose.connect("mongodb+srv://Devops:oaBX0cKX3VOjydXe@todoappdb.qcp0ozz.mongodb.net/?appName=TodoAppDB")
       console.log("MongoDB connected successfully")
 
    }catch(error){
        console.error("MongoDB conecction error:",error);
    }
}

app.post("/add-todo",(req,res)=>{
    const {title} = req.body;
    console.log("Adding a new todo:",req.body)
    res.status(200).json({
        message:"Welcome to the Todo API this is the megical server that will help you to manage your todos////"
    })
})


connectDB();
const PORT = 3001;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
// app.arguments()

