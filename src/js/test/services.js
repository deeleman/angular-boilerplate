'use strict';

(function(ng) {

    var myTestModule = ng.module('myApp.test');

    myTestModule.service('myTestService', function () {
        this.test = function() {
            return true;
        };
    });

}(angular));
