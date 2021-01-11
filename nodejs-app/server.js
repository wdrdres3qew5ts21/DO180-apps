var createError = require('http-error');

var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send({
    "message": `Hello World from pod: ${process.env.HOSTNAME}`,
    "branch": `S2I (Forget Checkout sorry)`,
  })
});

app.get('/detect', function (req, res) {
  res.send({
    "message": `Hello World from pod: ${process.env.HOSTNAME}`,
    "branch": `Detect Script Automatic`,
  })
});

app.listen(9090, function () {
  console.log('Example app listening on port 9090!');
});

