
app.controller('categoryCtrl', function ($scope, MyService, $location) {

    $scope.loginPage = MyService.loginPage;

    $scope.selectCategory = function () {
        $location.path('/method');
    };

    $scope.showLogin = function () {
        $scope.loginPage = true;

        $('#mainView').addClass("blurFilter");
        $('.position').fadeIn(1000);


    };


});
