'use strict';
const express =  require('express');
const bodyParser = require('body-parser');
const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();
app.use(express.json());
let posts = [];

app.get('/', (req, res) => {
    res.send('Helloror there world\n');
});

app.post('/data', (req, res) => {
    console.log(req.body);
    posts.push(req.body);
    res.send('Post length ' + posts.length + '\n');
});
app.get('/data', (req, res) => {
    posts.length > 0 && posts.every(e => e !== {}) ? res.json(posts) : res.send('Nothing');
});

app.listen(PORT, HOST);

console.log(`Running on http://${HOST}:${PORT}`);
