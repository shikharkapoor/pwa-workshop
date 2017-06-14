var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');
var hbs = require('express-handlebars');

var port = process.env.PORT || 3000;


app.use(express.static(path.join(__dirname)));

app.set('views', path.join(__dirname, '/public'));
app.set('view engine', '.hbs');
app.engine('.hbs', hbs({
	'extname': '.hbs'
}));

var inlineStyles = fs.readFileSync(path.resolve(__dirname) + '/public/styles/shell-styles.css', 'utf8');
app.get('/', function (req, res) {
	var templateVars = {
		'inlineStyles': inlineStyles
	};
	res.render('index', templateVars);
});

app.listen(port, function () {
	console.log('Demo app listening on port ' + port + '!' );
});
