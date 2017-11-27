app.controller('loginCtrl', function ($scope, MyService, $location, $rootScope, $http, $timeout) {

    $scope.user = {};

    $scope.submit = function (){
        $http.post('/api/login', $scope.user).then(function (data) {
            $scope.status = data.data;
        });

        $timeout(function () {
            if($scope.status.status == 'Success'){
                console.log($scope.status.status);
                $location.path('/');
                $('.position').css('display', 'none');
                $('#mainView').removeClass("blurFilter");
            }
            else{
                console.log('wrong data');
            }
        }, 2500);
    };
});
