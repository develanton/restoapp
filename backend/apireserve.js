



var reservations = [

    {
        "name": "Antonio",
        "Phone number": 5552333,
        "email": "dude@simon.com",
        "unique id": 4545445
    }

];


  module.exports = 
  function myFunc(app){
      app.get("/api/reserve", function(req, res) {
       return res.json(reservations);
     });
   }