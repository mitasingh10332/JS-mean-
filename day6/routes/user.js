const check=require("../controller/check");
const express= require("express");
const router=express.Router();

router.get("/",(req,res)=>{
    res.render("user");
})
router.get("/login",(req,res)=>{
    res.render("login");
})
router.get("/login/check",check);
    
module.exports=router;