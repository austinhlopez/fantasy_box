const express = require('express');
const app = express();
app.set('view engine', 'pug');
 var server = require('http').createServer(app);
app.get('/', function (req, res) {
  res.render('home')
})

server.listen(8080)