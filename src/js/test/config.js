'use strict';

(function(ng) {

    var myTestModule = ng.module('myApp.test', ['ui.router',  'ngResource']);

    myTestModule.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
        function ($stateProvider, $urlRouterProvider, $locationProvider) {

            $locationProvider.html5Mode(true);

            $urlRouterProvider.otherwise('/');

            $stateProvider.state('test', {
                url: '/',
                templateUrl: '/views/test.html',
                controller: 'myTestController'
            });
    }]);

}(angular));
