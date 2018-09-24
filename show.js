var express = require('express');
var app = express();
const pug = require('pug');
var server = require('http').createServer(app);
app.get('/', function (req, res) {
    const fileString = pug.renderFile('home.pug')
    console.log(fileString);
    res.send(fileString)
})

server.listen(8080)
