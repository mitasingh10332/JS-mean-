const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:false}));
app.listen(4000);
app.get("/",(req,res)=>{res.sendFile(__dirname +"/home.html")});


/*
app.get("/xyz",(req,res)=>{res.send(req)})
app.get("/xyz",(req,res)=>{res.send(req.query)}) ;

app.get("/about",(req,res)=>{res.sendFile(__dirname +"/about.html")});
app.get("/login",(req,res)=>{res.sendFile(__dirname +"/login.html")});

app.get("/xyz",(req,res)=>{res.send("get method")});
app.post("/xyz",(req,res)=>{res.send("post method")});
*/

app.post("/xyz",(req,res)=>{res.send(req.body)}) ;
