const mongoose= require("mongoose")

const commentShcema=new mongoose.Schema({
    comment:{
      type:String,
      required:true
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    },
    postid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    }
})

const commentmodel= mongoose.model("comments",commentShcema)

module.exports=commentmodel

