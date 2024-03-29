/**
 * test
 * Unit Testing: User/Controller
 */

describe('Unit Testing: User/Controller', function () {
    'use strict';

    var $scope, $controller;

    beforeEach(module('user'));

    beforeEach(inject(function ($injector) {
        $scope = $injector.get('$rootScope');
        $controller = $injector.get('$controller');
    }));

    describe('UserCtrl', function () {
        it('should set the correct heading text "My account!"', function () {
            var expected = {
                heading: 'My account!'
            };

            var params = {
                $scope: $scope
            };

            $controller('UserCtrl', params);

            expect($scope.mainHeading).toBe(expected.mainHeading);
        });
    });
});
