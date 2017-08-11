/**
 * Created by eugene on 05/29/17.
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var _storeInitialState = require('./../store/initialState');

var _storeInitialState2 = _interopRequireDefault(_storeInitialState);

var reducer = function reducer(state, action) {
    if (state === undefined) state = _storeInitialState2['default'];

    switch (action.type) {
        case 'DONATION_ADDED':
            return {
                users: state.users,
                events: state.events,
                donations: action.donations,
                pickedUsers: state.pickedUsers,
                loggedUserInfo: state.loggedUserInfo
            };

        case 'UPDATE_EVENT_DATA':
            return {
                users: state.users,
                events: action.events,
                donations: state.donations,
                pickedUsers: state.pickedUsers,
                loggedUserInfo: state.loggedUserInfo
            };

        case 'EVENT_ADDED':
            return {
                users: state.users,
                events: action.events,
                donations: state.donations,
                pickedUsers: state.pickedUsers,
                loggedUserInfo: state.loggedUserInfo
            };

        case 'PICKED_USERS':
            return {
                users: state.users,
                events: state.events,
                donations: state.donations,
                pickedUsers: action.pickedUsers,
                loggedUserInfo: state.loggedUserInfo
            };

        case 'USER_LOGGED_IN':
            return {
                users: state.users,
                events: state.events,
                donations: state.donations,
                pickedUsers: state.pickedUsers,
                loggedUserInfo: action.loggedUserInfo
            };

        case 'USER_REGISTERED':
            return {
                users: [].concat(_toConsumableArray(state.users), [action.newUser]),
                events: state.events,
                donations: state.donations,
                pickedUsers: state.pickedUsers,
                loggedUserInfo: state.loggedUserInfo
            };

        default:
            return state;
    }
};

exports['default'] = reducer;
module.exports = exports['default'];
//# sourceMappingURL=splity.js.map