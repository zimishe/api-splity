/**
 * Created by eugene on 08/10/17.
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.updateTotalAmount = updateTotalAmount;
var ObjectID = require('mongodb').ObjectID;

function updateTotalAmount(data, db, res) {

    db.collection('events').updateOne({ "_id": new ObjectID(data.eventID) }, { $set: { "totalAmount": data.totalAmount }
    }, function () {
        return res.end();
    });
}
//# sourceMappingURL=updateTotalAmount.js.map