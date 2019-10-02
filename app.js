var express = require('express');
var http    = require('http');
var usersCtrl = require('./usersCtrl');

var app     = express();

app.get('/', (req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/html' });
	res.end('<h1>Accueil</h1>');
});

app.get('/users', (req, res) => {
	const usersList = [
		{firstName: 'Bob', lastName: 'Morane'},
		{firstName: 'Phill', lastName: 'Austine'},
		{firstName: 'Yacoub', lastName: 'Sylla'}
	];
	res.writeHead(200, { 'Content-Type': 'text/html' });
	res.write('<h1>Utilisateurs</h1>');
	res.end(JSON.stringify(usersList));
});

app.post('/users/signout', usersCtrl.signout);

app.post('/users/signin', usersCtrl.signin);


http.createServer(app).listen(3000, () => {
	console.log('Express sever listening on port 3000');
});