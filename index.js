const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const ejs = require("ejs");
const path = require("path");
const userRouter = require("./routes/signup");
const { default: mongoose } = require("mongoose");
const staticRouter=require("./routes/staticrouter")
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.set("views", path.resolve("./view"));

port=process.env.port ||8000

require('dotenv').config();

const mongourl="mongodb://localhost:27017/testing"


// process.env.MONGO_URI || "mongodb+srv://biswajit9348das:biswajit123@code.kapvc.mongodb.net/"


mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("mongodb connected"))
  .catch(() => console.log("error"));
app.get("/",(req,res)=>{
    res.render("home")
})


app.use("/", userRouter);
app.use("/",staticRouter)
app.listen(port, () => console.log(`server started at ${port} port`));
