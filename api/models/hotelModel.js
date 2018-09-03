"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HotelSchema = new Schema({
    'name': { type: String },
    'stars': { type: Number, max: 5 },
    'price': { type: Number },
    'image': { type: String },
    'amenities': [String]
});

module.exports = mongoose.model('Hotel', HotelSchema);