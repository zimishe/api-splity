/**
 * Created by eugene on 07/11/17.
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.getUsers = getUsers;

function getUsers(db, res) {
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
}
//# sourceMappingURL=getUsers.js.map