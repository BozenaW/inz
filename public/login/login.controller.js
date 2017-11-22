app.controller('loginCtrl', function ($scope, $location, $rootScope, $http, $timeout) {

    $scope.user = {};

    $scope.submit = function (){

        $http.post('/api/login', $scope.user).then(function (data)
        {
            $scope.status = data.data;
            //console.log($scope.status);

        });

        $timeout(function ()
        {
            if($scope.status.status == 'Success'){
                console.log($scope.status.status);
                $location.path('/');
            }
            else{
                console.log('wrong data');
            }
        },2500);


    };



    //});

    // $http.get('/login').then(function (data)
    // {
    //     $scope.words = data;
    //     console.log($scope.words);
    // })
});
