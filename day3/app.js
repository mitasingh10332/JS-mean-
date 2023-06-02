const homeRouter=require("./routes/home");
const loginRouter=require("./routes/login");

const express=require("express");
const app=express();
app.use(express.static('public'));

app.engine("html", require("ejs").renderFile);
app.set("view engine","html");
app.listen(3000);
app.use("/",homeRouter);
app.use("/login",loginRouter);



