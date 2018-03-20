var express = require('express');
var app = express();

app.get('/', function (req, res) {
  console.log(req.query.lux);
  res.send();
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
