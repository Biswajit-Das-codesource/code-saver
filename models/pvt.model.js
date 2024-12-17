const mongoose=require("mongoose")
const pvtcodeSchema= new mongoose.Schema({
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



const pvtcodemodel=mongoose.model("allpvtcode",pvtcodeSchema)

module.exports=pvtcodemodel