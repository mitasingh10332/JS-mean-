const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.use(express.static('public'));

app.engine("html", require("ejs").renderFile);
app.set("view engine","html");
app.use(bodyParser.urlencoded({extended:false}));
app.listen(3000);
// app.get("/",(req,res)=>{ res.render("home")});

app.get("/",(req,res)=>
{// name="acro";
  students=[
    {enroll:101,name:"a",dept:"cse"},
    {enroll:102,name:"b",dept:"cse"},
    {enroll:103,name:"c",dept:"cse"},
    {enroll:104,name:"d",dept:"cse"},
  ];

  res.render("home",{"student":students})});
