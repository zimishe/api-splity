/**
 * Created by eugene on 08/05/17.
 */

import { insertUser } from './../insertUser'

export function checkRegisterFields(db, data, res) {
    let errors = [],
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
    
    let checkName = new Promise((resolve) => {
        db.collection('users')
            .find({
                $or: [{name: data.user_name}, 
                      {email: data.user_email}]
            })
            .toArray((err, results) => {
                let foundNames = results.filter(result => result.name === data.user_name).length,
                    foundEmails = results.filter(result => result.email === data.user_email).length;

                if (results.length !== 0) {
                    (foundNames > 0) && errors.push(takenNameError);
                    (foundEmails > 0) && errors.push(takenEmailError);
                }
                
                (data.user_password !== data.user_confirm_password) && errors.push(passwordMatchError);

                resolve();
            });
    });
    
    checkName.then(() => {
        if (errors.length > 0) {
            res.json({status: 0, errors: errors})   
        }   else {
            insertUser(db, data, res, 1);
        }
    })
}
