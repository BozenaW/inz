app.controller('met1Ctrl', function ($scope, $http, $timeout, $location) {
    $scope.arrayKey = [];

   var x = $location.search();
   $scope.catTitle = x.tit;

    $http.post('/api/met1', {tes : $scope.catTitle}).then(function (data) {

        $scope.words = data.data.words;
console.log($scope.words);
        $scope.myRandom();
    });

    var count = 0;
    var prev;
    $scope.trueAnswers=0;
    $scope.limit = 2;


    $scope.getWord = function (elem, val) {

        count += 1;

        if(elem.target.classList.contains('keyBox')) {
            $scope.key = val;
        }
        else{
             $scope.value = val;
        }

        if(count === 1 ){
            prev = elem;
            prev.target.classList.add('selected');
        }

        if(count === 2){
            if($scope.key !== '' && $scope.value !== ''){

                if($scope.words[$scope.key].trans === $scope.value ){

                    console.log('ok');
                    $scope.trueAnswers +=250;
                    elem.target.classList.add('selected');
                    // $timeout(function ()
                    // {
                        elem.target.classList.add('myHidden');
                        prev.target.classList.add('myHidden');
                    // },1000);
                }

                else{
                    prev.target.classList.remove('selected');
                    $scope.trueAnswers-=100;
                    console.log('nieok');
                    elem.target.classList.add('red');
                    prev.target.classList.add('red');
                    $timeout(function ()
                    {
                        elem.target.classList.remove('red');
                        prev.target.classList.remove('red');
                    },800);
                }
            }
            count=0;
            $scope.key='';
            $scope.value='';
        }



    };
    $scope.arrayKey=[];
    $scope.arrayValue=[];


    $scope.myRandom = function ()
    {
        for(var key in $scope.words){
            $scope.arrayKey.push(key);
            $scope.arrayValue.push($scope.words[key].trans);
        }
        $scope.arrayKey.sort();
    };
});
