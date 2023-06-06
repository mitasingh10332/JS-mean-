const express=require("express");
const app=express();
app.listen(3000);
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
const moongoose =require("mongoose");
moongoose.connect("mongodb://127.0.0.1:27017/mydb");
var con=moongoose.Connection;
var schema=moongoose.Schema({enroll:String, name:String});
var mymodel=moongoose.model("mycol", schema);
app.get("/",(req,res)=>{
    res.render("home");

})

 app.get("/add", (req,res)=> {
    // obj = {enroll: "1", name:"one"};
    var r=new mymodel(req.query);
    r.save();
    res.send("ok");

 })
