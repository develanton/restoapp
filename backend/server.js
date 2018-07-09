// Dependencies
var express = require('express');
var bodyParser = require("body-parser");
var path = require("path");
var reservations = [];


var app = express();
var PORT = process.env.PORT || 3000

// require("./apireserve.js")(app);
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
  // res.send("to send reservation to database")
  res.sendFile(path.join(__dirname, "../public/reserve.html"));
});





  app.get("/api/reserve", function(req, res) {
   return res.json(reservations);
 });

// Displays all reservations


// Create New Reservation - takes in JSON input
app.post("/api/newreserve", function(req, res) {
 
  var newReserv = req.body;

  console.log(newReserv);

  reservations.push(newReserv);

  res.json(newReserv);
});


TODO:
//*fix clear function and watinglist*

// Delete all the reservations

app.delete("/api/clear", function(req, res) {
 
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