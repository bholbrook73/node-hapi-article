import blipp from 'blipp';
import hapiRouter from 'hapi-router';
import inert from 'inert';
import vision from 'vision';
import hapiSwaggered from 'hapi-swaggered';
import hapiSwaggeredUi from 'hapi-swaggered-ui';

export default [{
	register: blipp
},{
	register: hapiRouter,
	options: {
		cwd: `${process.cwd()}/app`,
		routes: 'routes/**/*.js'
	}
},{
	register: inert
},{
	register: vision
},{
	register: hapiSwaggered,
	options: {
		requiredTags: [],
		stripPrefix: '/api/1',
		info: {
			title: 'My Marvel API',
			description: 'Documentation',
			version: '1'
		}
	}
},{
	register: hapiSwaggeredUi,
	options: {
		title: "My Marvel API Documentation",
		path: '/documentation'
	}
}];