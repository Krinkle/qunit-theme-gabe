/*jshint node:true */
module.exports = function (grunt) {
	grunt.loadNpmTasks('grunt-contrib-qunit');

	grunt.initConfig({
		qunit: {
			all: ['test/index.html']
		}
	});
};
