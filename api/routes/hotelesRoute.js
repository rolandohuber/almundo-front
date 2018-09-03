"use strict";

var express = require('express');
var router = express.Router();
var HotelController = require('../controllers/hotelController');

/* List */
router.post('/search', function (req, res) {
    return HotelController.list(req, res);
});
/* Create */
router.post('/', function (req, res) {
    return HotelController.create(req, res);
});
/* Read */
router.get('/:id', function (req, res) {
    return HotelController.read(req, res);
});
/* Update */
router.put('/:id', function (req, res) {
    return HotelController.update(req, res);
});
/* Delete */
router.delete('/:id', function (req, res) {
    return HotelController.remove(req, res);
});

module.exports = router;