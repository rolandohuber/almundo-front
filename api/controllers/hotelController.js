"use strict";

var HotelRepository = require('../repository/hotelRepository');

module.exports = {

    list: function (req, res) {
        HotelRepository.list(req.body)
            .then((hotels) => {
                return res.json(hotels);
            })
            .catch((err) => {
                return res.status(500).json({
                    message: 'Error when procesing request.',
                    error: err
                });
            });
    },
    create: function (req, res) {
        HotelRepository.create(req.body)
            .then((hotel) => {
                return res.json(hotel);
            })
            .catch((err) => {
                return res.status(500).json({
                    message: 'Error when procesing request.',
                    error: err
                });
            });
    },
    update: function (req, res) {
        req.body.id = req.params.id;
        HotelRepository.update(req.body)
            .then((hotel) => {
                return res.json(hotel);
            })
            .catch((err) => {
                return res.status(500).json({
                    message: 'Error when procesing request.',
                    error: err
                });
            });
    },
    remove: function (req, res) {
        HotelRepository.remove(req.params.id)
            .then((hotel) => {
                return res.json(hotel);
            })
            .catch((err) => {
                return res.status(500).json({
                    message: 'Error when procesing request.',
                    error: err
                });
            });
    },
    read: function (req, res) {
        HotelRepository.read(req.params.id)
            .then((hotel) => {
                return res.json(hotel);
            })
            .catch((err) => {
                return res.status(500).json({
                    message: 'Error when procesing request.',
                    error: err
                });
            });
    }
};
