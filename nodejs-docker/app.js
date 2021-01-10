var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/redhat', function (req, res) {
  res.send('Go to Red Hatter!');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

