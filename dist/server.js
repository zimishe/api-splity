'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _actionsGetUsers = require('./actions/getUsers');

var _actionsValidationCheckRegisterFields = require('./actions/validation/checkRegisterFields');

var _actionsValidationCheckLoginFields = require('./actions/validation/checkLoginFields');

var _actionsAddDonation = require('./actions/addDonation');

var _actionsUpdateTotalAmount = require('./actions/updateTotalAmount');

var _intialLoadActionsHandleRender = require('./intialLoad/actions/handleRender');

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

app.get('/', function (req, res) {
    MongoClient.connect(_config2['default'], function (err, db) {
        if (err) {
            return console.log('err', err);
        }

        (0, _actionsGetUsers.getUsers)(req, db, res);
    });
});

app.get('/getInitialData', function (req, res) {
    MongoClient.connect(_config2['default'], function (err, db) {
        if (err) {
            return console.log('err', err);
        }

        (0, _actionsGetUsers.getUsers)(db, res);
    });
});

app.post('/addevent', function (req, res) {
    MongoClient.connect(_config2['default'], function (err, db) {
        db.collection('events').insertOne(req.body, function (err, docsInserted) {
            res.send(docsInserted.insertedId);
        });
    });
});

app.put('/updateEvent', function (req, res) {
    var data = req.body;

    MongoClient.connect(_config2['default'], function (err, db) {
        (0, _actionsUpdateTotalAmount.updateTotalAmount)(data, db, res);
    });
});

app.post('/register', function (req, res) {
    var data = req.body;

    MongoClient.connect(_config2['default'], function (err, db) {
        (0, _actionsValidationCheckRegisterFields.checkRegisterFields)(db, data, res);
    });
});

app.post('/login', function (req, res) {
    var data = req.body;

    MongoClient.connect(_config2['default'], function (err, db) {
        (0, _actionsValidationCheckLoginFields.checkLoginFields)(db, data, res);
    });
});

app.post('/donate', function (req, res) {
    var data = req.body;

    MongoClient.connect(_config2['default'], function (err, db) {
        (0, _actionsAddDonation.addDonation)(db, data, res);
    });
});
//# sourceMappingURL=server.js.map