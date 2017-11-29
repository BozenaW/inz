app.controller('met1Ctrl', function ($scope, $http) {

    $http.get('/api/met1').then(function (data) {
        $scope.words = data.data.words;
    });

    var count = 0;
    var prev;
    $scope.limit = 2;

    $scope.getWord = function (elem, val) {

        count += 1;

        if(elem.target.classList.contains('keyBox')) {
            $scope.key = val;
        }
        else{
            $scope.value = val;
        }

        if(count === 1 ){
            prev = elem;
        }

        if(count === 2){
            if($scope.key !== '' && $scope.value !== ''){
                if($scope.words[$scope.key].trans === $scope.value ){
                    console.log('ok');

                    elem.target.classList.add('hid');
                    prev.target.classList.add('hid');

                }

                else{
                    console.log('nieok');
                    elem.target.classList.add('red');
                    prev.target.classList.add('red');

                }

            }


            count=0;
            $scope.key='';
            $scope.value='';

        }


    };

});
