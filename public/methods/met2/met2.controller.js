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

    $scope.limit = 3;

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




    // $( document ).ready(function() {
    //
    //     var words = ["Lorem ", "ipsum ", "delor", "sit", "amet"];
    //
    //     var message = "";
    //     var date = new Date();
    //     var day = date.getDate();
    //     var month = date.getMonth() + 1;
    //     var scrolled = false;
    //     var timeDelay = 200;
    //
    //
    //         $("li").each( function( index ) {
    //             var adventwindow = index + 1;
    //             var item = $(this);
    //
    //
    //                 window.setTimeout(function(){
    //                     item.children(".door").addClass("open");
    //                 }, timeDelay);
    //
    //             timeDelay += 100;
    //
    //             if( adventwindow <= day ) {
    //                 var word = words[index];
    //                 $(this).append('<div class="revealed">' + word + '</div>');
    //                 message = message + " " + word;
    //             }
    //
    //             if(adventwindow === day) {
    //                 $(this).addClass("current");
    //                 $(this).addClass("jiggle");
    //             }
    //
    //             $(this).on("click", function() {
    //                 if(adventwindow <= day) {
    //                     $(this).children(".door").toggleClass("open");
    //                 }
    //
    //                 $(this).removeClass("jiggle");
    //
    //
    //                     if(!scrolled) {
    //                         $('html, body').animate({
    //                             scrollTop: $("#message").offset().top
    //                         }, 2000);
    //                         scrolled = true;
    //                     }
    //
    //             });
    //
    //         });



//    });




});
