'use strict';
const express =  require('express');
const bodyParser = require('body-parser');
const PORT = 8080;
const HOST = '0.0.0.0';
const shell = require('shelljs')

const app = express();
app.use(express.json());
let posts = [];

app.get('/', (req, res) => {
    res.send('Hello there world\n');
});
app.post('/repoUpdate', (req, res) => {
    shell.exec('cd /home/fimbulg/Code/express/sneaky_server_compose_file && ' 
    + 'docker-compose pull && docker-compose up --build');
});
app.post('/data', (req, res) => {
    console.log(req.body);
    posts.push(req.body);
    res.send('Post length ' + posts.length + '\n');
});
app.get('/data', (req, res) => {
    posts.length > 0 && posts.every(e => e !== {}) ? res.json(posts) : res.send('Nothing\n');
});

app.listen(PORT, HOST);

console.log(`Running on http://${HOST}:${PORT}`);
