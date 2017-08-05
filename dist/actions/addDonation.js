/**
 * Created by eugene on 08/05/17.
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.addDonation = addDonation;

function addDonation(db, data, res) {
    db.collection('donations').insertOne({
        eventID: data.eventID,
        userID: data.userID,
        amount: data.amount,
        description: data.description,
        donationDate: data.donationDate
    }, function (err, docsInserted) {
        res.json({
            userID: docsInserted
        });
    });
}
//# sourceMappingURL=addDonation.js.map