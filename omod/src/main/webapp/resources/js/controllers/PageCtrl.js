define([
    './index',
    'config'
], function(controllers, config) {

    'use strict';

    controllers.controller('PageCtrl',

        function($scope, $routeParams) {
            document.title = 'Page';
            $scope.contextPath = config.contextPath;
            $scope.resourceLocation = config.resourceLocation;
        }
    )
});