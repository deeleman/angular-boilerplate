'use strict';

describe('Factories Test Spec', function() {
    beforeEach(module('myApp.test'));

    var myAppFactory, $httpBackend;

    beforeEach(inject(function($injector) {
        myAppFactory = $injector.get('myTestFactory');
        $httpBackend = $injector.get('$httpBackend');

        $httpBackend.expect('GET', '/api/test').respond([
            { id: 0, name: 'zero' },
            { id: 1, name: 'one' },
            { id: 2, name: 'two' }
        ]);
    }));

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('will test that boilerplate Factory can be consumed', function() {
        myAppFactory.list().$promise.then(function(items) {
            /* jshint expr:true */
            expect(items).to.have.length(3);
        });
        $httpBackend.flush();
    });
});

describe('Services Test Spec', function() {
    beforeEach(module('myApp.test'));

    var myAppService;

    beforeEach(inject(function($injector) {
        myAppService = $injector.get('myTestService');
    }));

    it('will test that boilerplate Service can be reached and read', function() {
        /* jshint expr:true */
        expect(myAppService.test).to.exist;
        expect(myAppService.test()).to.be.true;
    });
});

describe('Controllers Test Spec', function() {
    beforeEach(module('myApp.test'));

    var $scope;

    beforeEach(inject(function($rootScope, $controller) {
        $scope = $rootScope.$new();
        $controller('myTestController', {
            $scope: $scope
        });
    }));

    it('will test that boilerplate Controller can be reached and read', function() {
        /* jshint expr:true */
        expect($scope.test).to.exist;
        expect($scope.test).to.be.true;
    });
});
