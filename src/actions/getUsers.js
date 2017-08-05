/**
 * Created by eugene on 07/11/17.
 */

export function getUsers(db, res) {
    let data = {};

    let getUsers = new Promise(resolve => {
        db.collection('users').find().toArray((err, results) => {
            data.users = results;
            resolve();
        });
    });

    let getDonations = new Promise(resolve => {
        db.collection('donations').find().toArray((err, results) => {
            data.donations = results;
            resolve();
        });
    });

    let getEvents = new Promise(resolve => {
        db.collection('events').find().toArray((err, results) => {
            data.events = results;
            resolve();
        });
    });

    Promise.all([
        getEvents,
        getUsers,
        getDonations
    ]).then(() => {
        res.send(data);
        db.close();
    })
}



