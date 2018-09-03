"use strict";

var development = {
    db: {
        host: 'localhost',
        port: 27017,
        name: 'almundo-hotels',
        options: {
            reconnectTries: 100,
            reconnectInterval: 500,
            poolSize: 10,
            bufferMaxEntries: 0,
            useNewUrlParser: true
        }
    },
    app: {
        port: 3000
    }
}
var testing = {
    db: {
        host: 'localhost',
        port: 27017,
        name: 'almundo-hotels',
        options: {
            reconnectTries: 100,
            reconnectInterval: 500,
            poolSize: 10,
            bufferMaxEntries: 0,
            useNewUrlParser: true
        }
    },
    app: {
        port: 3000
    }
}

var config = {};
config['development'] = development;
config['testing'] = testing;

module.exports = config;