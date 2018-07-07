



var reservations = [

    {
        "name": "Antonio",
        "Phone number": 5552333,
        "email": "dude@simon.com",
        "unique id": 4545445
    }

];

  module.exports = function(apps){
   apps.get("/api/reserve", function(req, res) {
    return res.json(reservations);
  });
}