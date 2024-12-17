const mongoose=require("mongoose")


const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    collegeName:{
        type:String,
        required:true
    }
},{timestamps:true})

const usermodel=mongoose.model("users",userSchema)

module.exports=usermodel