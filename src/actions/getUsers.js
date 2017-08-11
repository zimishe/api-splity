/**
 * Created by eugene on 07/11/17.
 */

import { handleRender } from '../intialLoad/actions/handleRender'

export function getUsers(req, db, res) {
    let initialState = {};

    let getUsers = new Promise(resolve => {
        db.collection('users').find().toArray((err, results) => {
            initialState.users = results;
            resolve();
        });
    });

    let getDonations = new Promise(resolve => {
        db.collection('donations').find().toArray((err, results) => {
            initialState.donations = results;
            resolve();
        });
    });

    let getEvents = new Promise(resolve => {
        db.collection('events').find().toArray((err, results) => {
            initialState.events = results;
            resolve();
        });
    });

    Promise.all([
        getEvents,
        getUsers,
        getDonations
    ]).then(() => {
        initialState.pickedUsers = [];
        initialState.loggedUserInfo = [];
        
        handleRender(req, res, initialState);
        db.close();
    })
}




