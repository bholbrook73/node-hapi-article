var pkgLoadGruntTasks = require('load-grunt-tasks');
var path = require('path');

module.exports = function(grunt) {

	pkgLoadGruntTasks(grunt);

	grunt.initConfig({

		jshint: {
			options: {
				debug: true,
				esnext: true
			},
			build: [
				'Gruntfile.js',
				'app.src/**/*.js'
			]
		},

		clean: 'app',

		copy: {
			preTranspile: {
				files: [{
					expand: true,
					cwd: 'app.src',    // copy from the app.src folder
					src: [
						'**/*.*',       // All files and folders
						'!**/*.js'      // Except .js files
					],
					dest: 'app'        // copy to the app/ folder
				}]
			}
		},

		babel: {
			options: {
				sourceMap: false,
				presets: ['babel-preset-es2015']
			},
			dist: {
				files: [{
					expand: true,
					cwd: 'app.src',
					src: '**/*.js',
					dest: 'app'
				}]
			}
		},

		hapi: {
			default: {
				options: {
					server: path.resolve('./app/index')
				}
			}
		},

		watch: {
			default: {
				files: 'app.src/**',
				tasks: ['build','hapi'],
				options: {
					spawn: false
				}
			}
		}

	});

	grunt.registerTask('build', [
		'jshint',
		'clean',
		'copy:preTranspile',
		'babel'
	]);

	grunt.registerTask('default', [
		'build',
		'hapi',
		'watch'
	]);

};