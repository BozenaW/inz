app.controller('met5Ctrl', function ($scope, $compile, $http, $location) {

    var x = $location.search();
    $scope.catTitle = x.tit;


    $http.post('/api/met5',  {tes : $scope.catTitle}).then(function (data)
    {
        $scope.words = data.data.words;
        console.log('-----' + $scope.words);

        //
        $scope.array=[];
        $scope.arrayWords=[];
        // $scope.arrayWord = [];
        //
        for (var key in  $scope.words) {
            $scope.array.push({word: key, def: $scope.words[key].def});
        }
        for(var x in $scope.array){
            $scope.arrayWords.push({word:$scope.array[x].word, def:$scope.array[x].def});

        }

        var random = $scope.arrayWords[Math.floor(Math.random() * $scope.arrayWords.length)];
    console.log(random);

        $scope.definition = random.def;


    $scope.watchWord = random.word;
    $scope.watchWord = $scope.watchWord.toUpperCase();
    console.log($scope.watchWord);
    $scope.myLength = $scope.watchWord.length;
    $scope.score = 0;

    $scope.yes = new Audio("../audio/yes.wav");
    $scope.no = new Audio("../audio/no.wav");

    $scope.watchWord1 = "";

    for (var i=0; i<$scope.myLength; i++)
    {
        if ($scope.watchWord.charAt(i)===" ") {
            $scope.watchWord1 = $scope.watchWord1 + " ";
        }
        else{
            $scope.watchWord1 = $scope.watchWord1 + "-";
            console.log($scope.watchWord1);
        }
    }

        $scope.write_watchWord = function () {
        $("#board").text($scope.watchWord1);
    };

    $scope.letters = new Array(26);

    $scope.letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
        start();


   function start () {
        console.log("start");
        $scope.divText = "";

        for(var i=0; i<=25; i++)
        {
            $scope.element = "lit" + i;
            $scope.divText = $scope.divText + '<div class="letter" ng-click="check('+i+')" id="'+$scope.element+'">'+$scope.letters[i]+'</div>';
            if ((i+1) % 7 === 0)
                $scope.divText = $scope.divText + '<div style="clear:both;"></div>';
        }

        var $el = $($scope.divText).appendTo('#alphabet');
        $compile($el)($scope);
        $scope.write_watchWord();

    };

    String.prototype.setChar = function(place, char)
    {
        if (place > this.length - 1) return this.toString();
        else return this.substr(0, place) + char + this.substr(place+1);
    };

   $scope.check = function (nr) {
        $scope.correct = false;

        for (var i = 0; i < $scope.myLength; i++) {
            if ($scope.watchWord.charAt(i) === $scope.letters[nr]) {
                $scope.watchWord1 = $scope.watchWord1.setChar(i, $scope.letters[nr]);
                $scope.correct = true;
            }
        }

        if ($scope.correct === true) {
            $scope.yes.play();
            $scope.element = "#lit" + nr;
            $($scope.element).css({
                // "background": "#003300",
                "color": "#00C000",
                "border": "3px solid #00C000",
                "cursor": "default"
            });
            $scope.write_watchWord();
        }
        else {
            $scope.no.play();
            $scope.element = "#lit" + nr;
            $($scope.element).css({
                // "background": "#330000",
                "color": "#C00000",
                "border": "3px solid #C00000",
                "cursor": "default"
            });

            $($scope.element).attr("onclick",";");

            $scope.score++;
            $scope.image = "../../images/szubienica/s"+ $scope.score + ".jpg";
            $("#gibbet").html('<img src="'+$scope.image+'" alt="" />');
        }

        if ($scope.watchWord === $scope.watchWord1) {
            var $win = $('<span style="position:absolute;bottom:10%; right:10%;width:50%;font-family: \'Joti One\', cursive;">Tak jest! Podano prawidłowe hasło!</span><br/><br/><span class="reset" ng-click="createNewGame()">NOWA GRA</span>').appendTo('#alphabet');
            $compile($win)($scope);
        }
        //przegrana
        if ($scope.score >= 9){
            var $lost = $('<span  style="position:absolute;bottom:-10%; right:10%;width:50%; font-family: \'Joti One\', cursive;">Przegrana! Prawidłowe hasło: '+$scope.watchWord+'</span><br/><br/><span class="reset" ng-click="createNewGame()">NOWA GRA</span>').appendTo('#alphabet');
            $compile($lost)($scope);
        }
    };


    $scope.createNewGame = function(){
        location.reload();
    }

    });
 });
