/**
 * Created by eugene on 08/05/17.
 */

export function insertUser(db, data, res, status) {
    db.collection('users').insertOne(
        {
            name: data.user_name,
            balance: 0,
            email: data.user_email,
            password: data.user_password
        }, (err,docsInserted) => {
             res.json({
                 userInfo: docsInserted.ops[0],
                 userID: docsInserted.insertedId,
                 status: status
             })
    });
}

