/**
 * Created by eugene on 07/12/17.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
var BASE_URL = undefined;

if (window.location.hostname === 'localhost') {
    BASE_URL = 'http://localhost:3001/';
} else {
    BASE_URL = 'https://api-splity.herokuapp.com/';
}

exports['default'] = BASE_URL;
module.exports = exports['default'];
//# sourceMappingURL=getHost.js.map