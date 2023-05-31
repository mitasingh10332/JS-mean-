/* const xyz =require("express");
var app=xyz();
app.listen(1234);
app.get("/",abc);
function abc(req,res);
{;
    res.send("hi");
}; */

/* const m1=require("./m1");
console.log(m1.a())
console.log(m1.sqr(3))
*/

const express =require("express");
var app=express();
app.listen(3000);
app.get("/",(req,res)=>{  res.sendFile( __dirname + "/home.html"); });
// app.get("/login",(req,res)=>{  res.sendFile( __dirname + "/login.html"); });
app.get("/xyz",(req,res)=>{  res.send( req.query); });

