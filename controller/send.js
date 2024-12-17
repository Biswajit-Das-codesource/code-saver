
const codemodel = require("../models/code.model")
const pvtcodemodel = require("../models/pvt.model")
const usermodel = require("../models/user.model")


async function handlesendcode(req,res) {
    const {title,language,code}=req.body

    if(!title || !language || !code){
        res.send("please filled all the field")
    }
    console.log(req.user.username)

    const data  = await codemodel.create({
        name:req.user.username,
        title:title,
        language:language,
        code:code,
        createdBy:req.user.userId
    })
    
    res.redirect("/home")

}


async function seealldatacode(req,res){
    const alldata = await codemodel.find({})
    res.render("main",{
        alldata:alldata
    })
}

async function handlesendcodepvt(req,res) {
    const {title,language,code}=req.body

    if(!title || !language || !code){
        res.send("please filled all the field")
    }
    console.log(req.user.username)

    const data  = await pvtcodemodel.create({
        title:title,
        language:language,
        code:code,
        createdBy:req.user.userId
    
    })

    res.redirect("/home")
}

async function seeprofile(req,res){
    const userprofile=req.user.username
    console.log(userprofile)
    if(!userprofile) res.send("No user found")

    const alldata = await usermodel.find({username:userprofile})
    console.log(alldata)

    res.render("profile",{
        userdata:alldata
    })

}




module.exports={
   handlesendcode,
   seealldatacode,
   handlesendcodepvt,
   seeprofile
}