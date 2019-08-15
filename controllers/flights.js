var Flight = require('../models/flight');

module.exports = {
    index
}


function index(req, res) {
    Flight.find({}, function(err, flights) {
      res.render('flights/index', { 
        airline: 'airline', 
        flightNo: Number,
        departs: String,
        flights });
    });
  }
