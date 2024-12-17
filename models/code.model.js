const mongoose=require("mongoose")
const codeSchema= new mongoose.Schema({
    name:{
        type:mongoose.Schema.Types.String,
        ref:"users"
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    },
    title:{
        type:String,
        required:true
    },
    language:{
        type:String,
        required:true
    },
    code:{
        type:String,
        required:true
    },
},{timestamps:true})

const codemodel=mongoose.model("allcode",codeSchema)

module.exports=codemodel