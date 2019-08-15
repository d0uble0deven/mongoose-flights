var mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
var Schema = mongoose.Schema;
 
var flightSchema = new Schema({
    airline: String,
    flightNo: Number,
    departs: '2020'
});