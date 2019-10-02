module.exports = {
	signout: function(req, res) {
		res.writeHead(200, { 'Content-Type': 'text/html' });
		res.end('<h1>Enregistrement</h1>');
	},
	signin: function(req, res) {
		res.writeHead(200, { 'Content-Type': 'text/html' });
		res.end('<h1>Connexion</h1>');
	}
}
