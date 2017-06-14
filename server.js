var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');

var port = process.env.PORT || 3000;


app.use(express.static(path.join(__dirname)));

app.get('/manifest.json', function(req, res) {
	res.set('Content-Type', 'application/json');
	res.end(fs.readFileSync(path.resolve(__dirname) + 'manifest.json', 'utf8'));
});

app.get('/', function (req, res) {
	res.type('html').sendFile(path.join(__dirname, '/public/') + 'index.html');
});

app.listen(port, function () {
	console.log('Demo app listening on port ' + port + '!' );
});
