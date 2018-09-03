"use strict";

var HotelModel = require('../models/hotelModel');

module.exports = {

    list: async function (filter) {
        var fil = {};

        if (filter.name) {
            var words = filter.name.split(' ');
            for (var a = 0; a < words.length; a++) {
                words[a] = new RegExp(words[a], 'i');
            }
            fil.name = {
                $in: words
            }
        }

        if (filter.stars && filter.stars.length > 0)
            fil.stars = {
                $in: filter.stars
            };

        var hotels = await HotelModel.find(fil);
        return hotels;
    },
    create: async function (hotel) {
        var Hotel = new HotelModel(hotel);
        var hotelCreated = await Hotel.save();
        return hotelCreated;
    },
    update: async function (hotel) {

        var hotelBD = await HotelModel.findOne({ _id: hotel.id });
        hotelBD.name = hotel.name;
        hotelBD.stars = hotel.stars;
        hotelBD.price = hotel.price;
        hotelBD.image = hotel.image;
        hotelBD.amenities = hotel.amenities;

        var hotelUpdated = await hotelBD.save();
        return hotelUpdated;

    },
    read: async function (id) {
        var hotelBD = await HotelModel.findOne({ _id: id });
        return hotelBD;
    },
    remove: async function (id) {
        var hotelDeleted = await HotelModel.findByIdAndRemove(id);
        return hotelDeleted;
    }
};
