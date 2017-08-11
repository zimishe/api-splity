/**
 * Created by eugene on 07/11/17.
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.getUsers = getUsers;

var _intialLoadActionsHandleRender = require('./../intialLoad/actions/handleRender');

function getUsers(req, db, res) {
    var initialState = {};

    var getUsers = new Promise(function (resolve) {
        db.collection('users').find().toArray(function (err, results) {
            initialState.users = results;
            resolve();
        });
    });

    var getDonations = new Promise(function (resolve) {
        db.collection('donations').find().toArray(function (err, results) {
            initialState.donations = results;
            resolve();
        });
    });

    var getEvents = new Promise(function (resolve) {
        db.collection('events').find().toArray(function (err, results) {
            initialState.events = results;
            resolve();
        });
    });

    Promise.all([getEvents, getUsers, getDonations]).then(function () {
        initialState.pickedUsers = [];
        initialState.loggedUserInfo = [];

        (0, _intialLoadActionsHandleRender.handleRender)(req, res, initialState);
        db.close();
    });
}
//# sourceMappingURL=getUsers.js.map