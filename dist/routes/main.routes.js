// Import node module
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var router = _express2['default'].Router();

// Arrow functions
router.get('/', function (req, res) {
  res.send({ message: 'Hello World!!' });
});
// Exporting an object as the default import for this module
exports['default'] = router;
module.exports = exports['default'];
//# sourceMappingURL=main.routes.js.map