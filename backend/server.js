// Dependencies
var express = require('express');
var bodyParser = require("body-parser");
var path = require("path");
require("./apireserve.js")(app);

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


// Create New Reservation - takes in JSON input
apps.post("apireserve.js", function(req, res) {
 
  var newReserv = req.body;

  console.log(newReserv);

  reservations.push(newReserv);

  res.json(newReserv);
});

// Create waiting list - takes in JSON input
app.post("apiwaiting.js", function(req, res) {
  var newWaiter = req.body;

  console.log(newWaiter);

  waitList.push(newWaiter);

  res.json(newWaiter);
});

 
// Listner 
app.listen(PORT, function() {
  console.log("App listening on PORT: "+ PORT);
});