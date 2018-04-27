app.controller('registerCtrl', function ($scope, $location, $rootScope, $http, $timeout) {

    $scope.user = {};

    $scope.signUp = function () {
        $http.post('/api/register').then(function (data) {
            $scope.userData = data.data;
        });
        if($scope.registerForm.$valid === false){
            return false;
        }

        $timeout(function ()
        {
            console.log($scope.user.username);
            console.log('ddd');

            if ($scope.user.password === $scope.user.repeatP) {
                $http.post('/api/register', $scope.user).then(function (data)
                {
                    $scope.userData = data.data;
                    console.log($scope.userData);
                    if ($scope.userData.status === 'Fail'){
                        console.log('ggg');
                        $('#name').css('border','2px solid red');
                    }
                });
            }
        },2500);
    };
});
