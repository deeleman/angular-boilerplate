'use strict';

(function(ng) {

    var myTestModule = ng.module('myApp.test');

    myTestModule.factory('myTestFactory', ['$resource', function ($resource) {
        return $resource('/api/test/:parameterName', {
            parameterName: '@parameterName'
        }, {
            list:   { method:'GET', isArray: true },
            fetch:  { method:'GET' },
            create: { method:'POST' },
            update: { method:'PUT' },
            remove: { method:'DELETE' }
        });
    }]);

}(angular));
