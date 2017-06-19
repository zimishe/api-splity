'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _routesMainRoutes = require('./routes/main.routes');

var _routesMainRoutes2 = _interopRequireDefault(_routesMainRoutes);

// consts
var app = (0, _express2['default'])();

var PORT = process.env.PORT || 3001;

// arrow functions
var server = app.listen(PORT, function () {
    console.log('Example app listening at http://localhost:' + PORT);
});

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
    // res.end('<p>hello world</p>');
});

app.get('/', function (req, res) {
    res.send({ user: 'govnoed suka' });
});
//# sourceMappingURL=server.js.map