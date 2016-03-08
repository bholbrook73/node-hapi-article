import Hapi from 'hapi';

const Server = new Hapi.Server();

Server.connection({
	uri: 'http://localhost:8000',
	host: 'localhost',
	port: 8000
});

Server.route({
	method: 'GET',
	path: '/',
	handler: function(request, reply){
		reply("Hello Earth");
	}
});

Server.on('start', function(err){
	if(err){
		console.log(err);
	}
	console.log('Started Server on', Server.info.uri);
});

module.exports = Server;