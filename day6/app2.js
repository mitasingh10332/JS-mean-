const express=require("express");
const app=express();
app.listen(3000);
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));

/*
app.get("/users",(req,res)=>{
    res.send(req.query);
})
app.get("/users-[0-9]",(req,res)=>{
    res.send("ok"); 
   
});

*/

app.get("/users/:id/:name",(req,res)=>{
    res.send(req.params.name); //value
});