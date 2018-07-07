var waitList = [];

// Create New Reservation - takes in JSON input
app.post("/api/reserve", function(req, res) {
    var newcharacter = req.body;
  
    console.log(newcharacter);
  
    characters.push(newcharacter);
  
    res.json(newcharacter);
  });