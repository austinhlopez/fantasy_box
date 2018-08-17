var express = require('express')
var app = express()
 var server = require('http').createServer(app);
app.get('/', function (req, res) {
  res.send('Hello World')
})

server.listen(8080)