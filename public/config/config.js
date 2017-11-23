angular.module('app').config(function ($routeProvider, $locationProvider)
{
    $locationProvider.html5Mode(true);
    $routeProvider

            .when('/', {
                templateUrl: '../mainPage/mainPage.html'
            })

            .when('/method', {
                templateUrl: '../views/method.html'
            })
            .when('/login', {
                templateUrl: '../mainPage/mainPage.html',
                template: '<login></login>'
            })

            .when('/register', {
                templateUrl: '../register/register.html'
            })
            .when('/category', {
                templateUrl: '../category/category.html'
            });

            // .otherwise({
            //     redirectTo: '/'
            // });
});
