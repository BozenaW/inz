app.controller('met2Ctrl', function ($scope, $http, $location) {

    var x = $location.search();
    $scope.catTitle = x.tit;

    $http.post('/api/met2', {tes : $scope.catTitle}).then(function (data) {
        $scope.words = data.data.words;
        console.log('-----'+ $scope.words);

        $scope.array=[];
        $scope.arrayWord=[];

        for(var key in  $scope.words){
            $scope.array.push({word:key,def: $scope.words[key].def});
        }
    });

    $scope.limit = 6;




        $scope.check = function () {
            $scope.tab = ['<i class="fa fa-check" aria-hidden="true"></i>',
                          '<i class="fa fa-times" aria-hidden="true"></i>'];

            for(var x in $scope.array) {
                $('.TorF').eq(x).html($scope.tab[1]);
            }

            for(var key in $scope.arrayWord) {

                $scope.myWord = $scope.arrayWord[key];

                if ($scope.myWord === $scope.array[key].word) {
                    $('.TorF').eq(key).html($scope.tab[0]);
                }
                else{
                    $('.TorF').eq(key).html($scope.tab[1]);
                }
            }
        };

        2
    // if($scope.myWord !== $scope.array[key].word ) {

    $(document).ready(function(){
        $("#myButt").click(function(){
            $("#myBoard").slideToggle();
        });
    });
});
