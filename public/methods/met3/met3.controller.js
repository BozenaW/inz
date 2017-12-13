app.controller('met3Ctrl', function ($scope, $location)
{
    $scope.array = [
        '../../images/idea2.jpg',
        '../../images/cat1.jpg',
        '../../images/cat3.jpg',
        '../../images/cat7.jpg',
        '../../images/cat9.jpg',
        '../../images/cat10.jpg',
        '../../images/cat11.jpg'
    ];
    $scope.list = $scope.array.slice(1,5);

    $scope.getIndex = function () {
        var tmp = Math.floor(Math.random()*$scope.array.length);
        if(tmp > $scope.array.length - 4){
            return $scope.array.length - 4
        }else return tmp;
    };

    $scope.createList = function () {
        var index = $scope.getIndex();
        console.log(index);
        $scope.list = [];
        $scope.list = $scope.array.slice(index, index+4);
        console.log($scope.list);
    }
});