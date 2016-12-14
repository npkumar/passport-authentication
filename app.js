var express = require("express"),
    mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/passport_authentication");

var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
   res.render("home"); 
});

app.get("/secret", function(req, res){
   res.render("secret"); 
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server running"); 
});