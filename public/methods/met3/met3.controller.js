app.controller('met3Ctrl', function ($scope, $http, $location, $timeout)
{

    $scope.trueAnswers = 0;

    var x = $location.search();
    $scope.catTitle = x.tit;


    $http.post('/api/met3', {tes : $scope.catTitle}).then(function (data)
    {
        $scope.words = data.data.words;
        $scope.createList();
    });





    $scope.createList = function () {

        createImgList();

        var listIndex = [];
        listIndex.push(getIndex());

        for (var i = 0; i < 3; i++) {
            var index = getIndex();
            while (isAdded(listIndex, index)) {
                index = getIndex();
            }
            listIndex.push(index);
        }

        $scope.list = [];

        for (var j = 0; j < listIndex.length; j++) {
            $scope.list.push($scope.array[listIndex[j]]);
        }

        addWord();

    };


    var createImgList = function () {
        $scope.array=[];
        for (var key in $scope.words) {
            $scope.array.push($scope.words[key].img);
        }
    };

    var getIndex = function () {
        var tmp = Math.floor(Math.random() * $scope.array.length);
        return tmp;
    };


    var isAdded = function (list, rand) {
        for(var j=0;j<list.length;j++){
            if(list[j]===rand) {
                return true;
            }
        }
        return false;
    };

    var addWord = function () {
        $scope.rand = Math.floor(Math.random() * 4);

        for (var key in $scope.words) {
            if ($scope.words[key].img === $scope.list[$scope.rand]) {
                $scope.wordName = key;
            }
        }
    };

    $scope.checkPicture = function (e, ev) {


        var divBad = document.createElement("div");
        divBad.className = "divBad";

        var divGood = document.createElement("div");
        divGood.className = "divGood";

        // divBad.innerHTML = "Bad";
        // divGood.innerHTML = "good";

        divBad.style.fontSize = "50px";
        divGood.style.fontSize = "50px";

        var currentId = ev.target.parentElement.id;



        if($scope.rand === e){
            $scope.trueAnswers +=250;
            document.getElementById(currentId).appendChild(divGood);
            var elDelete= document.getElementById(currentId).childNodes[1];

            $timeout(function () {
                elDelete.remove();
            },500);

            $scope.createList();
        }
        else{
            $scope.trueAnswers -=100;

            document.getElementById(currentId).appendChild(divBad);
            elDelete = document.getElementById(currentId).childNodes[1];

            $timeout(function () {
                elDelete.remove();
            },500);
        }
    }
});

