
app.controller('categoryCtrl', function ($scope, MyService, $location) {

    $scope.loginPage = MyService.loginPage;

    $scope.selectCategory = function () {
        $location.path('/category');
    };

    $scope.showLogin = function () {
        $scope.loginPage = true;
        console.log('fggfd');
        $('#mainView').addClass("blurFilter");
        $('.position').fadeIn(1000);


    };


});
