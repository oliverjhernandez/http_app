var express = require("express"),
    methodOverride = require("method-override");
    bodyParser = require("body-parser"),
    path = require("path"),
    expressSanitizer = require("express-sanitizer"),
    app = express(),

// APP CONFIG
//
global.__basedir = __dirname;
const hostname = '0.0.0.0';
const port = process.env.NODE_PORT || 3000;
app.set("view engine", "ejs");
app.use(expressSanitizer());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));


app.get("/hello", function(req, res) {
    res.render(path.join(__basedir, "views", "index"));
});

app.get("/", function(req, res) {
    res.redirect("/hello");
});

// CREATE
//
app.post("/hello", function(req, res){
    res.render("new");
});

app.listen(port, function() {
    console.log("App listening at http://" + hostname + ":" + port + "/");
});
