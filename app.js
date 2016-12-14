var express = require("express"),
    mongoose = require("mongoose"),
    passport = require("passport"),
    bodyParser = require("body-parser"),
    LocalStrategy = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose"),
    User = require("./models/user");

mongoose.connect("mongodb://localhost/passport_authentication");

var app = express();
app.set("view engine", "ejs");

// passport
app.use(require("express-session")({
    secret: "Batman Returns",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// routes
app.get("/", function(req, res){
   res.render("home"); 
});

app.get("/secret", function(req, res){
   res.render("secret"); 
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server running"); 
});