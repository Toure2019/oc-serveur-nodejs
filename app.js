var express = require('express');
var http    = require('http');
var usersCtrl = require('./usersCtrl');

var app     = express();

app.get('/', (req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/html' });
	res.end('<h1>Accueil</h1>');
});

app.get('/users', (req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/html' });
	res.end('<h1>Utilisateurs</h1>');
});

app.post('/users/signout', usersCtrl.signout);


http.createServer(app).listen(3000, () => {
	console.log('Express sever listening on port 3000');
});