"use strict";

var express = require('express');
var app = express();
var mongoose = require('mongoose');
var cors = require('cors');
var bodyParser = require('body-parser');
var configArr = require('./config/index');

var config = configArr[process.env.NODE_ENV];

var connection = mongoose.connect('mongodb://' + config.db.host + ':' + config.db.port + '/' + config.db.name + '', config.db.options);

var hotelesRoute = require('./routes/hotelesRoute')

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/hotel', hotelesRoute);

app.get('/', function (req, res) {
    res.send('Almundo Hotel Api!');
});

app.listen(config.app.port, function () {
    console.log('Running on port ' + config.app.port + '!');
});