/**
 * Created by eugene on 05/29/17.
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _redux = require('redux');

var _initialState = require('./initialState');

var _initialState2 = _interopRequireDefault(_initialState);

var _reducersSplity = require('./../reducers/splity');

var _reducersSplity2 = _interopRequireDefault(_reducersSplity);

var store = (0, _redux.createStore)(_reducersSplity2['default'], _initialState2['default']);

exports['default'] = store;
module.exports = exports['default'];
//# sourceMappingURL=store.js.map