var express = require('express');
var app = express();
var path = require('path');

var publicDir = path.join(__dirname, 'public');

app.get('*', function (req, res) {
  res.sendFile(path.join(publicDir, 'index.html'));
});

app.listen(3050, function () {
  console.log('app listening on port 3050');
});