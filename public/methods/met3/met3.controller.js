app.controller('met3Ctrl', function ($scope, $http, $location)
{
    $http.get('/api/met3').then(function (data)
    {
        $scope.words = data.data.words;
        console.log('-----', $scope.words);
    });

    $scope.array=[];
    $scope.list = $scope.array.slice(1,5);

    $scope.getIndex = function () {
        for(var key in $scope.words) {
            $scope.array.push($scope.words[key].img);
        }
        // for (var el in $scope.array){
        //     console.log($scope.array[el]);
        //    console.log($scope.words);
        // }

        var tmp = Math.floor(Math.random()*$scope.array.length);
        if(tmp > $scope.array.length - 4){

            return $scope.array.length - 4
        }else {

            return tmp;
        }
    };

    $scope.createList = function () {
        var index = $scope.getIndex();
        $scope.list = [];
        $scope.list = $scope.array.slice(index, index+4);
        console.log($scope.list);
        var rand = Math.floor(Math.random()*$scope.list.length);
        console.log($scope.list[rand]);
        for(var key in $scope.words){
            if($scope.words[key].img == $scope.list[rand]){
                console.log(key);
                $scope.wordName = key;
            }
        }
    };

});

