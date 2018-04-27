
app.controller('categoryCtrl', function ($scope, MyService, $location, $http) {

    $http.get('/api/category').then(function () {

        var categoryArray = [];
        var images = $('.category').find('img');

        for(var i=0;i<images.prevObject.length;i++) {
            categoryArray.push({index: i, title: images.prevObject[i].firstChild.innerHTML});
        }

        $scope.selectCategory = function (nr, ev) {
              $scope.mysrc=ev.target.src;
              $location.path('/method/').search({img: $scope.mysrc, tit:  categoryArray[nr - 1].title });
        }
    });

    $scope.loginPage = MyService.loginPage;

    $scope.showLogin = function () {
        $scope.loginPage = true;

        $('#mainView').addClass("blurFilter");
        $('.position').fadeIn(1000);
    };
});

