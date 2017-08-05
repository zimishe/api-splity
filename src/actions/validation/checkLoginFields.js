/**
 * Created by eugene on 08/05/17.
 */

export function checkLoginFields(db, data, res) {
    let errors = [],
        noEmailError = {
            field: 'user_email',
            text: 'Email is not registered'
        },
        passwordMatchError = {
            field: 'user_password',
            text: "Incorrect password"
        };

    let checkEmail = new Promise((resolve) => {
        db.collection('users')
            .find({
                email: data.user_email
            })
            .toArray((err, results) => {
                // let foundNames = results.filter(result => result.name === data.user_name).length,
                    // foundEmails = results.filter(result => result.email === data.user_email).length;
                
                if (results.length < 1) {
                    errors.push(noEmailError);
                    resolve();
                }   else {
                    (results[0].password !== data.user_password) && errors.push(passwordMatchError);
                    resolve(results[0]);
                }
            });
    });

    checkEmail.then((userInfo) => {
        if (errors.length > 0) {
            res.json({status: 0, errors: errors})
        }   else {
            res.json({
                status: 1,
                userInfo: userInfo
            })
        }
    })
}