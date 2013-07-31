define(['js/basicexample-app', 'config'], function (basicexample, config) {
    'use strict';

    basicexample.config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/', {
                controller: 'MainCtrl', 
                templateUrl: config.resourceLocation + '/partials/Main.html'
            }).
            when('/page', {
                controller: 'PageCtrl', 
                templateUrl: config.resourceLocation + '/partials/Page.html'
            });
    }]);
});