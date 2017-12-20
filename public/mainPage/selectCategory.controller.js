
app.controller('categoryCtrl', function ($scope, MyService, $location, $timeout, $http) {

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

        $scope.selectCategory = function (nr) {
            var x = categoryArray[nr-1].title;
            var y = titleArray[0];
            console.log(x);
            console.log(y);

                    if(x == y) {

                        console.log('dasd');
                    }
                    else{
                        console.log('ggg');
                    }
                     //   console.log('ggg');
                        // $location.path('/method/it');
                       // console.log($scope.categoryArray[nr-1].title.innerText);
                       // console.log($scope.titleArray[0]);

                   // else{
                     //   console.log('bad');
                    //}
                //if($scope.titleArray[i]==nr-1){
                 //   console.log('good');
                // }
           //  console.log($scope.titleArray[nr-1]);
               // else{
                //    console.log('bad');
                //}
            // }
        };

    });




     // $timeout(function ()
     // {
     //     $location.path('/method/');
     // },1000);















       // var categoryArray = [];
       // var images = $('.category').find('img');

       // for(var i=0;i<images.prevObject.length;i++){
        //    categoryArray.push({index:i, title: images.prevObject[i]});


            // if(categoryArray[i].index == 0){
            //     console.log('first');
            //    $location.path('/method/'+1);
            // }

        // };

    $scope.showLogin = function () {
        $scope.loginPage = true;

        $('#mainView').addClass("blurFilter");
        $('.position').fadeIn(1000);


    };


});
