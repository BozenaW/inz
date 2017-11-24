app.controller('loginCtrl', function ($scope, MyService, $location, $rootScope, $http, $timeout) {

    $scope.user = {};
    $scope.loginPage = MyService.loginPage;

    $scope.submit = function (){

        $http.post('/api/login', $scope.user).then(function (data) {
            $scope.status = data.data;
        });

        $timeout(function () {
            if($scope.status.status == 'Success'){
                console.log($scope.status.status);
                //$location.path('/');
                console.log($scope.loginPage);
                $scope.loginPage = false;
                $('#mainView').removeClass("blurFilter");
                return '<login ng-show="loginPage"></login>';

            }
            else{
                console.log('wrong data');
            }
        },2500);
    };
});
