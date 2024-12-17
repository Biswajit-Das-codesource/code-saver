const usermodel = require("../models/user.model");

const{ generatejwt }= require("../utils/jwt");

async function handlesignup(req,res) {
    const {username,password,email,collegeName}=req.body

    if(!username || !password || !email || !collegeName){
        return res.send("please filled all the field")
    }

    const isusername=await usermodel.findOne({username})
    const ispassword=await usermodel.findOne({password})
    const isemail=await usermodel.findOne({email})

    if(isusername || ispassword || isemail) {
        return res.json({warning:"Already exist username"})
    }

    const user = await usermodel.create({
        username:username,
        password:password,
        email:email,
        collegeName:collegeName
    })

 res.render("signup")
}

async function handlelogin(req,res) {
    const {password,email}=req.body
   const user= await usermodel.findOne({password,email})

   if(user){
    generatejwt(user,res)
    res.redirect("/")
   }

   else{
    res.json({error:"404 not found user please signup first or login with correct password"})
   }

   
}


module.exports={
    handlesignup,
    handlelogin
}