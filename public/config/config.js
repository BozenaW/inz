angular.module('app').config(function ($routeProvider, $locationProvider)
{
    $locationProvider.html5Mode(true);
    $routeProvider

            .when('/', {
                templateUrl: '../mainPage/mainPage.html'
            })

            .when('/login', {
                templateUrl: '../mainPage/mainPage.html',
                template: '<login></login>'
            })

            .when('/register', {
                templateUrl: '../register/register.html'
            })
            .when('/method', {
                templateUrl: '../methods/method.html'
            })
            .when('/method/1', {
                templateUrl: '../methods/met1/met1.html'
            })
            .when('/method/2', {
                templateUrl: '../methods/met2/met2.html'
            })
            .when('/method/3', {
                templateUrl: '../methods/met3/met3.html'
            })
            .when('/method/4', {
                templateUrl: '../methods/met4/met4.html'
            })
            .when('/method/5', {
                templateUrl: '../methods/met5/met5.html'
            })

            .otherwise({
                redirectTo: '/'
            });
});
