app.controller('met1Ctrl', function ($scope, $http)
{



    $http.get('/api/met1').then(function (data) {
        $scope.words = data.data.words;
        // console.log($scope.words);
    });

    $scope.getWord = function (elem, val) {
        console.log(elem);
        if(elem.target.classList.contains('keyBox')) {
            console.log(elem.target.classList.contains('keyBox'));
            $scope.key = val;
            console.log($scope.key);
        }
        else{
            console.log(elem.target.classList.contains('keyBox'));
            $scope.value = val;
            console.log($scope.value);
        }
        // else if($('#valueBox').click()){
        //     $scope.value = val;
        //     console.log('valueBox clicked');
        // }
    };


    // $scope.getKey = function (key) {
    //     $scope.key = key;
    //     // console.log(key);
    //
    //     $('#keyBox')[0].addEventListener('click', function (event) {
    //                 console.log(event);
    //             });
    //
    //
    //     if($scope.words[$scope.key].trans == $scope.value ){
    //         console.log('ok');
    //         $scope.value = '';
    //         $scope.key = '';
    //
    //
    //     }
    //     else if( $scope.value !== '' && $scope.key !== ''){
    //         console.log('nie ok');
    //         $scope.value = '';
    //         $scope.key = '';
    //     }
    //
    // };
    //
    // $scope.getValue = function (value) {
    //     $scope.value = value;
    //     // console.log(value);
    //     if($scope.words[$scope.key].trans == $scope.value ){
    //         console.log('ok');
    //         $scope.value = '';
    //         $scope.key = '';
    //     }
    //     else if( $scope.key !== '' && $scope.value !== ''){
    //         console.log('nie ok');
    //         $scope.key = '';
    //         $scope.value = '';
    //     }
    //
    // };



});
