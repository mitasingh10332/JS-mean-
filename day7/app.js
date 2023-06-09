const express=require("express");
const app=express();
app.listen(3000);

const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded());
app.engine("html",require("ejs").renderFile);
app.set("view engine","html")

const userRouter=require("./routes/users")
app.use("/users",userRouter);
