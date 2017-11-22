angular.module('app').config(function ($routeProvider, $locationProvider)
{
    $locationProvider.html5Mode(true);
    $routeProvider

            .when('/test', {
                templateUrl: '../views/test.html'
            })

            .when('/method', {
                templateUrl: '../views/method.html'
            })
            .when('/login', {
                templateUrl: '../login/login.html'
            });
            // .otherwise({
            //     redirectTo: '/'
            // });
});
