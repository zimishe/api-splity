/**
 * Created by eugene on 08/05/17.
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.checkRegisterFields = checkRegisterFields;

var _insertUser = require('./../insertUser');

function checkRegisterFields(db, data, res) {
    var errors = [],
        takenNameError = {
        field: 'user_name',
        text: 'Sorry, name is already taken'
    },
        takenEmailError = {
        field: 'user_email',
        text: 'Email is already registered'
    },
        passwordMatchError = {
        field: 'user_confirm_password',
        text: "Passwords doesn't\ match"
    };

    var checkName = new Promise(function (resolve) {
        db.collection('users').find({
            $or: [{ name: data.user_name }, { email: data.user_email }]
        }).toArray(function (err, results) {
            var foundNames = results.filter(function (result) {
                return result.name === data.user_name;
            }).length,
                foundEmails = results.filter(function (result) {
                return result.email === data.user_email;
            }).length;

            if (results.length !== 0) {
                foundNames > 0 && errors.push(takenNameError);
                foundEmails > 0 && errors.push(takenEmailError);
            }

            data.user_password !== data.user_confirm_password && errors.push(passwordMatchError);

            resolve();
        });
    });

    checkName.then(function () {
        if (errors.length > 0) {
            res.json({ status: 0, errors: errors });
        } else {
            (0, _insertUser.insertUser)(db, data, res, 1);
        }
    });
}
//# sourceMappingURL=checkRegisterFields.js.map