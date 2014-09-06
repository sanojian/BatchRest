
var express = require('express');
var http = require('http');
var restcalls = require('./restcalls');
var path = require('path');


var app = module.exports = express();

app.set('port', 3154);
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.bodyParser());

app.post('/batchGetSync', restcalls.batchGetSync);
app.post('/batchGetAsync', restcalls.batchGetAsync);


http.createServer(app).listen(app.get('port'), function () {
	console.log('Express server listening on port ' + app.get('port'));
});


