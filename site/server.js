var express = require('express');
var app = express();
var path = require('path');

app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/public', express.static(__dirname + '/public'));

app.use(function (req, res) {
    res.sendfile(__dirname + '/public/index.html');
});

app.listen(3001, function () {
    console.log('Example app on port 3001!');
});