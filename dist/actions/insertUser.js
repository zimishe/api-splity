/**
 * Created by eugene on 08/05/17.
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.insertUser = insertUser;

function insertUser(db, data, res, status) {
    db.collection('users').insertOne({
        name: data.user_name,
        balance: 0,
        email: data.user_email,
        password: data.user_password
    }, function (err, docsInserted) {
        res.json({
            userInfo: docsInserted.ops[0],
            userID: docsInserted.insertedId,
            status: status
        });
    });
}
//# sourceMappingURL=insertUser.js.map