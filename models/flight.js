var mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
var Schema = mongoose.Schema;
 
var flightSchema = new Schema({
    airline: String,
    flightNo: Number,
    departs: String,
    airport: String,
    // arrival: [destinationSchema]
});

var destinationSchema = new Schema({
    airport: String,
    arrival: Date
})

 module.exports = mongoose.model('Flight', flightSchema);