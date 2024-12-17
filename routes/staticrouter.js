const express=require("express")
const { seealldatacode, seeprofile } = require("../controller/send")
const { checkauth } = require("../middlewares/checkauth")
const codemodel = require("../models/code.model")
const commentmodel = require("../models/comment.model")
const usermodel = require("../models/user.model")

const app =express.Router()

app.get("/signuppage",(req,res)=>{
    res.render("signuppage")
})
// app.post("/login",handlelogin)


app.get("/loginpage",(req,res)=>{
    res.render("loginpage")
})

app.get("/owncode",(req,res)=>{
    res.render("private")
})


app.get("/home",seealldatacode)


app.get("/code",checkauth,(req,res)=>{
    res.render("code")
})

app.get("/profile",checkauth,seeprofile)


app.post("/comment/:id",checkauth,async (req,res) => {
    const {comment}=req.body
    const id=req.params.id
    const data= await commentmodel.create({
        comment:comment,
        createdBy:req.user.userId,
        postid:req.params.id
    })
    console.log(data)
    res.redirect(`/comments/${id}`);
})


app.get("/comments/:id", async (req, res) => {
    const id = req.params.id;
    const post = await codemodel.findById(id);
    const comment = await commentmodel.find({ postid: id }).populate("createdBy");

    if (!comment) res.send("Not found");

    
    const reversedComments = comment.reverse();

    console.log(reversedComments);
    res.render("postview", {
        alldata: post,
        comment: reversedComments
    });
});


app.get("/profileview/:id",async (req,res) => {
    const userid=req.params.id
    const user= await codemodel.findById(userid).populate("createdBy")
    res.render("profile",{
        alldata:user
    })
})  
module.exports=app