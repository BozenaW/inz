app.controller('met2Ctrl', function ($scope, $http) {
    $http.get('/api/met2').then(function (data) {
        $scope.words = data.data.words;
        console.log('-----'+ $scope.words);

        $scope.array=[];
        $scope.arrayWord=[];

        for(var key in  $scope.words){
            $scope.array.push({word:key,def: $scope.words[key].def});
        }
    });

        $scope.check = function () {

            $scope.tab = ['<i class="fa fa-check" aria-hidden="true"></i>', '<i class="fa fa-times" aria-hidden="true"></i>'];
            for(var key in $scope.arrayWord) {
                $scope.myWord = $scope.arrayWord[key];
                if ($scope.myWord === $scope.array[key].word) {
                    $('.TorF').eq(key).html($scope.tab[0]);
                }
                 if($scope.myWord !== $scope.array[key].word ) {
                    $('.TorF').eq(key).html($scope.tab[1])
                }


            }
        };





});
