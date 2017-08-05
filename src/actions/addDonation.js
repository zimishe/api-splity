/**
 * Created by eugene on 08/05/17.
 */

export function addDonation(db, data, res) {
    db.collection('donations').insertOne(
        {
            eventID: data.eventID,
            userID: data.userID,
            amount: data.amount,
            description: data.description,
            donationDate: data.donationDate
        }, (err,docsInserted) => {
            res.json({
                userID: docsInserted
            })
        });
}