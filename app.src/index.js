import Hapi from 'hapi';
import plugins from './server/plugins';

const Server = new Hapi.Server();

Server.connection({
	uri: 'http://localhost:8000',
	host: 'localhost',
	port: 8000
});

Server.register(plugins, function(err){
	if(err){
		console.log(err);
	}
});

Server.on('start', function(err){
	if(err){
		console.log(err);
	}
	console.log('Started Server on', Server.info.uri);
});

module.exports = Server;