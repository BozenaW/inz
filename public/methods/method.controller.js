app.controller('methodCtrl', function ($scope, $location) {

    $scope.method1 = function () {
        $location.path('/method/1');
    };

    $scope.method2 = function () {
        $location.path('/method/2');
    };

    $scope.method3 = function () {
        $location.path('/method/3');
    };

    $scope.method4 = function () {
        $location.path('/method/4');
    };

    $scope.method5 = function () {
        $location.path('/method/5');
    };

    $scope.makeActive = function (ev, item)
    {
        $('.main-nav ul li').removeClass('active');
        $scope.active = $scope.active == item?'':item;
        if($scope.active == 'one'){$scope.myVar =true;}
        else{$scope.myVar=false;}
        if($scope.active == 'two')  {$scope.myVar2=true;}
        else{$scope.myVar2=false;}
        if($scope.active == 'three'){$scope.myVar3=true;}
        else{$scope.myVar3=false;}
        if($scope.active == 'four') {$scope.myVar4=true;}
        else{$scope.myVar4=false;}
        if($scope.active == 'five') {$scope.myVar5=true;}
        else{$scope.myVar5=false;}
        // else if($scope.active == 'two'){
        //     $scope.myVar2 = !$scope.myVar2;
        // }
        // $('.main-nav ul li').show($('#butt1'));

        // var butt1 = $('#butt1');
        // butt1.isDisplayed()
    }
});

