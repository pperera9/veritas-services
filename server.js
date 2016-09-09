var express = require('express');
var app = express();

var port = process.env.port || 3000;

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/yes', function (req, res) {
  res.send("I'm working like a champ");
});

app.listen(port, function () {
  console.log('Example app listening on port: ' + port);
});
