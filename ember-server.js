var express = require('express');
var path = require('path');

/* Server to serve the ember app */
var app = express();

// need this to serve all the static files in public
app.use(express.static('public'))

// serve the index file
app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, 'public/index.html'))
});

app.listen('4200');
