const express = require('express');
const path = require('path');
const routes = require('./routes')
const bodyParser = require('body-parser');

// const User = require('./models/User');

const server = express();

server.use(express.static('public'));

server.set('view engine', 'ejs');
server.set('views', path.join(__dirname, 'views'));

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use(express.json());

server.use('/', routes);

server.listen(3000, () => {
    console.log("It's Running!")
});