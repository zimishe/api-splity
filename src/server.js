import express from 'express'
import bodyParser from 'body-parser'
import DB_URL from './config'

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
    });
});



app.post('/addevent', (req, res) => {
    MongoClient.connect(DB_URL, (err, db) => {
       db.collection('events').insertOne(req.body, function(err,docsInserted){
            res.send(docsInserted.insertedId)
       });
    });
});