define([
		'angular',
		'config',
		'require',
		'js/controllers/index',
	    'js/directives/index',
	    'js/filters/index',
	    'js/services/index'
	], function(angular) {

		'use strict';

		return angular.module('basicexample', [
			'basicexample.services',
			'basicexample.controllers',
			'basicexample.filters', 
			'basicexample.directives'
		]);

});
