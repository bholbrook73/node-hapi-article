import blipp from 'blipp';
import hapiRouter from 'hapi-router';

export default [{
	register: blipp
},{
	register: hapiRouter,
	options: {
		cwd: `${process.cwd()}/app`,
		routes: 'routes/**/*.js'
	}
}];