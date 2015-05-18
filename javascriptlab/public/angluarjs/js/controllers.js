var slideControl = angular.module('slideControl', []);

slideControl.controller('indexControl', ['$scope',
    function($scope) {
        $scope.greeting = {
            text: 'Hello'
        };
        $scope.pageClass="hello";
    }
]);

slideControl.controller('slideControl', ['$scope',
    function($scope) {
        $scope.pageClass="list";
    }
]);