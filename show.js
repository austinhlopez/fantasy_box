var express = require('express');
var app = express();
const pug = require('pug');
 var server = require('http').createServer(app);
app.get('/', function (req, res) {
  res.send('Hello World')
})

server.listen(8080)