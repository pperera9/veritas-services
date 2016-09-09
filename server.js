var express = require('express');
var fs = require('fs');

var app = express();

var port = process.env.port || 3000;

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/yes', function (req, res) {
  res.send("I'm working like a champ");
});

app.get('/jsonTest', function (req, res) {
  var filePath =  "teachers.json";

  fs.exists(filePath, function(exists){
      if (exists) {     
        response.writeHead(200, {
          "Content-Type": "application/octet-stream",
          "Content-Disposition" : "attachment; filename=" + file});
        fs.createReadStream(filePath).pipe(res);
      } else {
        res.writeHead(400, {"Content-Type": "text/plain"});
        res.end("ERROR File does NOT Exists");
      }
    });
});

app.listen(port, function () {
  console.log('Example app listening on port: ' + port);
});
