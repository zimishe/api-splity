'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var app = (0, _express2['default'])();
var PORT = process.env.PORT || 3001;

var MongoClient = require('mongodb').MongoClient;

// arrow functions
var server = app.listen(PORT, function () {
    console.log('app listening at http://localhost:' + PORT);
});

app.use(_bodyParser2['default'].urlencoded({ extended: true }));
app.use(_bodyParser2['default'].json());

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,post,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get('/getInitialData', function (req, res) {
    MongoClient.connect(_config2['default'], function (err, db) {
        if (err) {
            return console.log('err', err);
        }

        var data = {};

        var getUsers = new Promise(function (resolve) {
            db.collection('users').find().toArray(function (err, results) {
                data.users = results;
                resolve();
            });
        });

        var getDonations = new Promise(function (resolve) {
            db.collection('donations').find().toArray(function (err, results) {
                data.donations = results;
                resolve();
            });
        });

        var getEvents = new Promise(function (resolve) {
            db.collection('events').find().toArray(function (err, results) {
                data.events = results;
                resolve();
            });
        });

        Promise.all([getEvents, getUsers, getDonations]).then(function () {
            res.send(data);
            db.close();
        });
    });
});

app.post('/addevent', function (req, res) {
    MongoClient.connect(_config2['default'], function (err, db) {
        db.collection('events').insertOne(req.body, function (err, docsInserted) {
            res.send(docsInserted.insertedId);
        });
    });
});
//# sourceMappingURL=server.js.map