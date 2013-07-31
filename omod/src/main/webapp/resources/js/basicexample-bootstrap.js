define([
    'require',
    'angular',
    'js/basicexample-app',
    'js/basicexample-routes',
    'js/basicexample-impl'
], function (require, angular) {
    //'use strict';

    require(['domReady!'], function (document) {
        return angular.bootstrap(document, ['basicexample']);
    });
});