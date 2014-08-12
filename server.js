var express = require('express');
var http = require('http');

var app = express();

app.get('/', function(req, res) {
  res.send('hello world! From Aron');
});

app.get('/name/:name', function(req, res) {
  res.json({ greeting: 'Hola ' + req.param('name') + ', how\'s it going?'});
});

app.get('/time', function(req, res) {
  res.send("The Current Time Is: " + new Date);
});

var server = http.createServer(app);
server.listen(3000, function() {
  console.log('the server is running on port 3000');
});