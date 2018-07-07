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
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.get("/tables", function(req, res) {
  // res.send("Welcome to the Star Wars Page!")
  res.sendFile(path.join(__dirname, "../public/tables.html"));
});

app.get("/reserve", function(req, res) {
  // res.send("Welcome to the Star Wars Page!")
  res.sendFile(path.join(__dirname, "../public/reserve.html"));
});

// Displays all reservations
app.get("/api/apireserve.js", function(req, res) {
  return res.json(reserves);
});

// Create New Reservation - takes in JSON input
app.post("/api/apireserve.js", function(req, res) {
  var newReserv = req.body;

  console.log(newReserv);

  waitList.push(newReserv);

  res.json(newReserv);
});

 
// Listner 
app.listen(PORT, function() {
  console.log("App listening on PORT: "+ PORT);
});