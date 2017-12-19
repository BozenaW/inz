
app.controller('categoryCtrl', function ($scope, MyService, $location) {

    $scope.loginPage = MyService.loginPage;

    $scope.selectCategory = function () {
     //   $location.path('/method/');
       // console.log(ev);
        var categoryArray = [];
        var images = $('.category').find('img');

      for(var i=0;i<images.prevObject.length;i++){
            // console.log(images.prevObject[i]);
            categoryArray.push({index:i, img: images.prevObject[i]});
           if(categoryArray[i].index === i){
                console.log('dadada');
                  // $location.path('/method/'+i+"'");
           }
        }
    console.log(categoryArray);
    };

    $scope.showLogin = function () {
        $scope.loginPage = true;

        $('#mainView').addClass("blurFilter");
        $('.position').fadeIn(1000);


    };


});
