
app.controller('categoryCtrl', function ($scope, MyService, $location, $timeout, $routeParams, $http) {

    $scope.loginPage = MyService.loginPage;

    $http.get('/api/category').then(function (data) {

         var titleArray = [];

        for(var key in data.data){
          titleArray.push(data.data[key].title);
        }

        var categoryArray = [];
        var images = $('.category').find('img');

        for(var i=0;i<images.prevObject.length;i++) {
            categoryArray.push({index: i, title: images.prevObject[i].firstChild.innerHTML});
        }


        $scope.load = function() {
          $timeout(function ()
          {
              alert("Window is loaded");
              console.log('gggg');
          })

        };


        $scope.selectCategory = function (nr, ev)
        {
              $scope.mysrc=ev.target.src;
           var url = $location.path('/method/').search({img: $scope.mysrc, tit:  categoryArray[nr - 1].title });

            $timeout(function () {
                $('.tlo').css({'background':'url('+url.$$search.img+') no-repeat center center', 'background-size':'cover', 'filter': 'sepia(100%)'});
                $('.caption h1').text(url.$$search.tit);
            },100);

        }

            // var tmp = false;
            //
            // $scope.x = categoryArray[nr - 1].title;
            //
            // for (var i = 1; i < categoryArray.length; i++) {
            //     tmp = false;
            //     for (var j = 0; j < titleArray.length; j++) {
            //         if ($scope.x == titleArray[j]) {
            //             tmp = true;
            //         }
            //     }
            // }
            //
            // if (tmp == true) {
            // var title = $scope.x.split(' ').join('');


            // }
        //};



    });



    $scope.showLogin = function () {
        $scope.loginPage = true;

        $('#mainView').addClass("blurFilter");
        $('.position').fadeIn(1000);


    };


});
