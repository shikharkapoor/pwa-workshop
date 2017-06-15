var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');

var port = process.env.PORT || 3000;


app.use(express.static(path.join(__dirname)));

app.get('/', function (req, res) {
	res.type('html').sendFile(path.join(__dirname, '/public/') + 'index.html');
});

app.listen(port, function () {
	console.log('Demo app listening on port ' + port + '!' );
});
