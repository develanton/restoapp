// Dependencies
var express = require('express');
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000

// Set up Express handlers
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
 
// Routes to Front-end

app.get("/", function(req, res) {
  // res.send("Welcome to the Star Wars Page!")
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function(req, res) {
  // res.send("Welcome to the Star Wars Page!")
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res) {
  // res.send("Welcome to the Star Wars Page!")
  res.sendFile(path.join(__dirname, "reserve.html"));
});

// Displays all characters
app.get("/api/apireserve.js", function(req, res) {
  return res.json(reserves);
});

 
// Listner 
app.listen(PORT, function() {
  console.log("App listening on PORT: "+ PORT);
});