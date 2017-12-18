app.controller('met5Ctrl', function ($scope, $compile, $http, $location) {
    $http.get('/api/met5').then(function (data)
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

    $scope.letters = new Array(35);

    $scope.letters[0] = "A";
    $scope.letters[1] = "Ą";
    $scope.letters[2] = "B";
    $scope.letters[3] = "C";
    $scope.letters[4] = "Ć";
    $scope.letters[5] = "D";
    $scope.letters[6] = "E";
    $scope.letters[7] = "Ę";
    $scope.letters[8] = "F";
    $scope.letters[9] = "G";
    $scope.letters[10] = "H";
    $scope.letters[11] = "I";
    $scope.letters[12] = "J";
    $scope.letters[13] = "K";
    $scope.letters[14] = "L";
    $scope.letters[15] = "Ł";
    $scope.letters[16] = "M";
    $scope.letters[17] = "N";
    $scope.letters[18] = "Ń";
    $scope.letters[19] = "O";
    $scope.letters[20] = "Ó";
    $scope.letters[21] = "P";
    $scope.letters[22] = "Q";
    $scope.letters[23] = "R";
    $scope.letters[24] = "S";
    $scope.letters[25] = "Ś";
    $scope.letters[26] = "T";
    $scope.letters[27] = "U";
    $scope.letters[28] = "V";
    $scope.letters[29] = "W";
    $scope.letters[30] = "X";
    $scope.letters[31] = "Y";
    $scope.letters[32] = "Z";
    $scope.letters[33] = "Ż";
    $scope.letters[34] = "Ź";

        start();


   function start () {
        console.log("start");
        $scope.divText = "";

        for(var i=0; i<=34; i++)
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

        console.log("klik");
        for (var i = 0; i < $scope.myLength; i++) {
            if ($scope.watchWord.charAt(i) === $scope.letters[nr]) {
                $scope.watchWord1 = $scope.watchWord1.setChar(i, $scope.letters[nr]);
                $scope.correct = true;
                console.log("true");
            }
        }

        if ($scope.correct === true) {
            $scope.yes.play();
            $scope.element = "#lit" + nr;
            $($scope.element).css({
                "background": "#003300",
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
                "background": "#330000",
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
            var $win = $('<span>Tak jest! Podano prawidłowe hasło: ' + $scope.watchWord + '</span><br/><br/><span class="reset" ng-click="createNewGame()">JESZCZE RAZ?</span>').appendTo('#alphabet');
            $compile($win)($scope);
        }
        //przegrana
        if ($scope.score >= 9){
            var $lost = $('<span>Przegrana! Prawidłowe hasło: '+$scope.watchWord+'</span><br/><br/><span class="reset" ng-click="createNewGame()">JESZCZE RAZ?</span>').appendTo('#alphabet');
            $compile($lost)($scope);
        }
    };


    $scope.createNewGame = function(){
        location.reload();
    }

    });
 });
