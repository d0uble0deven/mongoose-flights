var Flight = require('../models/flight');

module.exports = {
    index,
    new: newFlight,
    show
}

function show(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    res.render('flights/show', { title: 'Flight Detail', flight });
  });
}

function newFlight(req, res) {
  res.render('flights/new');
}


function index(req, res) {
    Flight.find({}, function(err, flights) {
      res.render('flights/index', { 
        airline: String, 
        flightNo: Number,
        departs: String,
        flights });
    });
  }

