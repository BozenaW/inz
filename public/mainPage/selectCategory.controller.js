
app.controller('categoryCtrl', function ($scope, $location) {

    $scope.loginPage = false;

    $scope.selectCategory = function ()
    {
        $location.path('/category');
    };

    $scope.showLogin = function ()
    {
        $scope.loginPage = true;
        console.log('fggfd');
        $('#mainView').addClass("blurFilter");
        $('.position').fadeIn(1000);

    }



});
