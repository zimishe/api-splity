import express from 'express'
import bodyParser from 'body-parser'
import DB_URL from './config'

import { getUsers } from './actions/getUsers'
import { checkRegisterFields } from './actions/validation/checkRegisterFields'

const app = express();
const PORT = process.env.PORT || 3001;

const MongoClient = require('mongodb').MongoClient;

// arrow functions
const server = app.listen(PORT, () => {
  console.log(`app listening at http://localhost:${PORT}`);
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,post,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});


app.get('/getInitialData', (req, res) => {
    MongoClient.connect(DB_URL, (err, db) => {
        if (err) {
            return console.log('err', err);
        }
        
        getUsers(db, res);
    });
});

app.post('/addevent', (req, res) => {
    MongoClient.connect(DB_URL, (err, db) => {
       db.collection('events').insertOne(req.body, function(err,docsInserted){
            res.send(docsInserted.insertedId)
       });
    });
});


app.post('/register', (req, res) => {
    let data = req.body;

    MongoClient.connect(DB_URL, (err, db) => {
        checkRegisterFields(db, data, res);
    });
});
