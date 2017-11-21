app.controller('loginCtrl', function ($scope, $location, $rootScope) {
    $scope.submit = function (){
        var uname = $scope.username;
        var password = $scope.password;

        if($scope.username == 'admin' && $scope.password == 'admin'){
            $rootScope.loggedIn = true;
            $location.path('/test');
        }
        else{
            alert('wrong stuff');
        }
    };
});
