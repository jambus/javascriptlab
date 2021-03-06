var bookStoreApp = angular.module('angluarlearn', [
    'ngRoute', 'ngAnimate','slideControl'
]);

bookStoreApp.config(function($routeProvider) {
    $routeProvider.when('/hello', {
        templateUrl: 'tpls/hello.html',
        controller: 'indexControl'
    }).when('/s1', {
        templateUrl: 'tpls/s1.html',
        controller: 'slideControl'
    }).when('/s2', {
        templateUrl: 'tpls/s2.html',
        controller: 'slideControl2'
    }).when('/s3', {
        templateUrl: 'tpls/s3.html',
        controller: 'slideControl3'
    }).when('/demo', {
        templateUrl: 'tpls/demo.html',
        controller: 'indexControl'
    }).otherwise({
        redirectTo: '/hello'
    })
});
