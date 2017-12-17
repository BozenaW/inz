app.controller('met2Ctrl', function ($scope, $http) {
    $http.get('/api/met2').then(function (data) {
        $scope.words = data.data.words;
        console.log('-----'+ $scope.words);


        $scope.array=[];
        $scope.arrayWord=[];

        for(var key in  $scope.words){
            $scope.array.push({word:key,def: $scope.words[key].def});

        }

        $scope.check = function () {
            $scope.indekses = ['T', 'F'];
            for(var key in $scope.arrayWord) {
                $scope.myWord = $scope.arrayWord[key];
                if ($scope.myWord === $scope.array[key].word) {
                    console.log('good');
                    $('.TorF').text($scope.indekses[1]);
                }
                else {
                    console.log('bad');
                    $('.TorF').text($scope.indekses[0])
                }
            }
        };



    });


});