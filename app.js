var express = require('express');
var app = express();
var db = require('./db');
global.__root   = __dirname + '/'; 
var controlDir = __root + 'controller/';

app.get('/api', function (req, res) {
  res.status(200).send('API works.');
});

var UserController = require(controlDir + 'UserController');
app.use('/api/user', UserController);

var AuthController = require(controlDir + 'AuthController');
app.use('/api/auth', AuthController);

module.exports = app;