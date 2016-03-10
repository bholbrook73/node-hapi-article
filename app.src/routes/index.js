module.exports = [
	{
		method: 'GET',
		path: '/',
		handler: function(request, reply){
			reply("Hello Earth");
		},
		config: {
			description: 'Site Index'
		}
	}
];