const mongoose=require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/mydb")
var con=mongoose.Connection;
var schema=mongoose.Schema({enroll:String,name:String});
var MyModel=mongoose.model("mycol",schema);

module.exports=MyModel;