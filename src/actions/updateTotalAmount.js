/**
 * Created by eugene on 08/10/17.
 */

let ObjectID = require('mongodb').ObjectID;

export function updateTotalAmount(data, db, res) {
    
    db.collection('events')
        .updateOne(
            {"_id" : new ObjectID(data.eventID)},
            { $set: 
                {"totalAmount": data.totalAmount}
            }, () => res.end()
    );
}
