import express from 'express'
import routes from './routes/main.routes'
// consts
const app = express();

const PORT = process.env.PORT || 3001;

// arrow functions
const server = app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
    // res.end('<p>hello world</p>');
});

app.get('/', (req, res) => {
    res.send({user: 'govnoed suka'});
});
