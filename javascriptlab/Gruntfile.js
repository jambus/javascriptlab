'use strict';

module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		typescript:{
			options:{
				module:'common.js'
			}
			
		},
		jshint:{
			options:{
				force: true,
				reporterOutput:'./jshint.txt'
			},
			files:['']
		}
	});
	
	grunt.loadNpmTasks('grunt-typescript');
	grunt.registerTask('default',['typescript','jshint']);
}