var createError = require('http-error');

var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send({
    "message": `Hello World from pod: ${process.env.HOSTNAME}`,
    "branch": `S2I (Forget Checkout sorry)`,
  })
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

