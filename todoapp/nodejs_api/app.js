var restify = require('restify');

var controller = require('./controllers/items');
var serverinfo = require('./controllers/serverinfo');

var db = require('./models/db');
var model = require('./models/items');
console.log(process.env.MYSQL_DATABASE)

model.connect(db.params, function(err) {
    if (err) throw err;
});

var server = restify.createServer() 
    .use(restify.plugins.fullResponse())
    .use(restify.plugins.queryParser())
    .use(restify.plugins.bodyParser());

var server = restify.createServer();
    
controller.context(server, '/todo/api', model); 
serverinfo.context(server, '/todo/api'); 

var port = process.env.PORT || 3000;
server.listen(port, function (err) {
    if (err)
        console.error(err);
    else
        console.log('App is ready at : ' + port);
});
 
if (process.env.environment == 'production')
    process.on('uncaughtException', function (err) {
        console.error(JSON.parse(JSON.stringify(err, ['stack', 'message', 'inner'], 2)))
    });
    

