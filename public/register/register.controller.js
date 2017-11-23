app.controller('registerCtrl', function ($scope, $location, $rootScope, $http, $timeout) {

    $scope.user = {};

    $scope.signIn = function () {
        $http.post('/api/register', $scope.user).then(function (data) {
            $scope.userData = data.data;
            console.log($scope.userData);
        });
        $timeout(function ()
        {
            console.log($scope.userData);
            if($scope.userData.status == 'Success'){
                console.log($scope.userData.status);

                $location.path('/');
            }
            else{
                console.log('wrong data');
            }
        },2500);

    };



});
