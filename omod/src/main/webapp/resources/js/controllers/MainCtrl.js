define([
  './index',
  'config'
], function(controllers, config) {

  'use strict';

  controllers.controller('MainCtrl',

    function($scope, $location) {
      document.title = 'Main';
      $scope.contextPath = config.contextPath;
      $scope.resourceLocation = config.resourceLocation;
    }
  );
});
