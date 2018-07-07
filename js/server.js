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
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/tables', function (req, res) {
  res.send('Hello World')
})

app.get('/reserve', function (req, res) {
  res.send('Hello World')
})
 
// Listner 
app.listen(PORT, function() {
  console.log("App listening on PORT: "+ PORT);
});