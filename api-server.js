var express = require('express');
var mongoose = require('mongoose');

/* API server */

// Mongo DB
mongoose.connect('mongodb://localhost/emberData');

var noteSchema = new mongoose.Schema({
	title: 'string',
	content: 'string',
	author: 'string'
});

var NoteModel = mongoose.model('note',noteSchema);

// api
var app = express();

app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
	next();
});

app.get('/api/',function(req,res) {
	res.send('Working');
});

app.get('/api/notes', function(req,res) {
	NoteModel.find({},function(err,docs) {
		if(err) {
			res.send(err);
		}
		else {
			res.send(docs);
		}
	});
});

app.listen('4500');
