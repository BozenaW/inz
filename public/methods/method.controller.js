app.controller('methodCtrl', function ($scope, $location) {

    $scope.method1 = function () {
        $location.path('/method/1');
    };

    $scope.method2 = function () {
        $location.path('/method/2');
    };

    $scope.method3 = function () {
        $location.path('/method/3');
    };

    $scope.method4 = function () {
        $location.path('/method/4');
    };

    $scope.method5 = function () {
        $location.path('/method/5');
    };

    $scope.makeActive = function (item)
    {
        $('.main-nav ul li').removeClass('active');
        $scope.active = $scope.active == item?'':item;
    }
});

