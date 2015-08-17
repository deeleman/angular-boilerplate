'use strict';

(function(ng) {

    var myTestModule = ng.module('myApp.test');

    myTestModule.controller('myTestController', ['$scope', function($scope) {
        $scope.test = true;
    }]);

}(angular));
