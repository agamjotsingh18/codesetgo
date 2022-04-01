const express=require("express");
const app=express();
const bodyParser=require("body-parser");
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});

app.listen(3000,function(){
  console.log("Server has started on port 3000");
});
