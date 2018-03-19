const express    = require('express');
const path       = require('path');
const http       = require('http');
const bodyParser = require('body-parser');
const mongoose   = require('mongoose');
const config     = require('config');

const api        = require('./routes/index');

const app        = express();
const port       = process.env.PORT || '3000';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

// DATABASE SETUP
mongoose.connect(config.database.uri_production);

app.get('/', function(req, res) {
  res.send('Welcome to my awesome API!');  
});

app.use('/', api);

app.set('port', port);
const server = http.createServer(app);
server.listen(port, () => console.log(`API running on localhost:${port}`));
