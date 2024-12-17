const express=require("express")
const { handlesignup, handlelogin } = require("../controller/signup")
const { handlesendcode, handleprivatecode, handlesendcodepvt } = require("../controller/send")
const { checkauth } = require("../middlewares/checkauth")
const codemodel = require("../models/code.model")
const commentmodel = require("../models/comment.model")
const app =express.Router()

app.post("/signup",handlesignup)
app.post("/login",handlelogin)
app.post("/post",checkauth,handlesendcode)
app.post("/pvtpost",checkauth,handlesendcodepvt)

// app.delete("/delete/:id", async (req, res) => {
//     const postid = req.params.id;
//     console.log(postid);
//     try {
//         const deletepost = await codemodel.findByIdAndDelete(postid);
//         console.log(deletepost);
//         res.render("main")
        
//     } catch (error) {
//         console.error(error);
//     }
// });
module.exports=app