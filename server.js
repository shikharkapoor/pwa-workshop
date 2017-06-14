var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');

var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
	res.send('Hello World!')
});

app.listen(port, function () {
	console.log('Demo app listening on port ' + port + '!' );
});
