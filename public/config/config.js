angular.module('app').config(function ($routeProvider, $locationProvider)
{
    $locationProvider.html5Mode(true);
    $routeProvider

            .when('/test', {
                template: '<test></test>'
            })

            .when('/method', {
                template: '<method></method>'
            })
            .when('/login', {
                template: '<login></login>'
            });

    // .otherwise({
    //     template: '<categories></categories>'
    // });
});
