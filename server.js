// server.js
// load the things we need
var express = require('express');
var app = express();
var mysql = require('mysql');

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {
	var drinks = [
		{ name: 'Bloody Mary', drunkness: 3 },
		{ name: 'Martini', drunkness: 5 },
		{ name: 'Scotch', drunkness: 10 }
	];
	var tagline = "Any code of your own lol drunk drunk";
	
    res.render('pages/index', {
		drinks: drinks,
		tagline: tagline
	});
});

// about page 
app.get('/about', function(req, res) {
    res.render('pages/about');
});

app.get('/rockband', function(req, res) {
	var connection = mysql.createConnection({
		host	: 'localhost',
		user	: 'lillchan',
		password: 'password123',
		database: 'testdb'
	});
	connection.connect();
	connection.query('SELECT * FROM users', function(err, rows, fields) {
		if (err) throw err;
		res.render('pages/rockband', {
			rows: rows
		});
	});
});

app.listen(8000);
console.log('8000 is the magic port');