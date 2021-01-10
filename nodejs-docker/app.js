var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/redhat', function (req, res) {
  res.send({
    "objective": "Go to be Openshift Specialist !"
  });
});

app.get('/update', function (req, res) {
  res.send({
    "message": "[Content Update] This had been build from GIT !"
  });
});

app.get('/update/commandline', function (req, res) {
  res.send({
    "message": "[OC Start-build] This had been build from Buid Command Line!"
  });
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

