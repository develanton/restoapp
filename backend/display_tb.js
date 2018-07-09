
require

module.exports = function(app){
    app.get("/api/reserve", function(req, res) {
     return res.json(reservations);
   });
 }
