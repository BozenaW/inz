app.controller('met5Ctrl', function ($scope, $compile, $http, $location) {

    $scope.haslo = "Bez pracy nie ma kołaczy";
    $scope.haslo = $scope.haslo.toUpperCase();

    $scope.dlugosc = $scope.haslo.length;
    $scope.ile_skuch = 0;

    $scope.yes = new Audio("../audio/yes.wav");
    $scope.no = new Audio("../audio/no.wav");

    $scope.haslo1 = "";

    for (var i=0; i<$scope.dlugosc; i++)
    {
        if ($scope.haslo.charAt(i)===" ") $scope.haslo1 = $scope.haslo1 + " ";
        else $scope.haslo1 = $scope.haslo1 + "-";
    }

    $scope.wypisz_haslo = function () {
        $("#plansza").text($scope.haslo1);
    };

    $scope.litery = new Array(35);

    $scope.litery[0] = "A";
    $scope.litery[1] = "Ą";
    $scope.litery[2] = "B";
    $scope.litery[3] = "C";
    $scope.litery[4] = "Ć";
    $scope.litery[5] = "D";
    $scope.litery[6] = "E";
    $scope.litery[7] = "Ę";
    $scope.litery[8] = "F";
    $scope.litery[9] = "G";
    $scope.litery[10] = "H";
    $scope.litery[11] = "I";
    $scope.litery[12] = "J";
    $scope.litery[13] = "K";
    $scope.litery[14] = "L";
    $scope.litery[15] = "Ł";
    $scope.litery[16] = "M";
    $scope.litery[17] = "N";
    $scope.litery[18] = "Ń";
    $scope.litery[19] = "O";
    $scope.litery[20] = "Ó";
    $scope.litery[21] = "P";
    $scope.litery[22] = "Q";
    $scope.litery[23] = "R";
    $scope.litery[24] = "S";
    $scope.litery[25] = "Ś";
    $scope.litery[26] = "T";
    $scope.litery[27] = "U";
    $scope.litery[28] = "V";
    $scope.litery[29] = "W";
    $scope.litery[30] = "X";
    $scope.litery[31] = "Y";
    $scope.litery[32] = "Z";
    $scope.litery[33] = "Ż";
    $scope.litery[34] = "Ź";


    $scope.start = function () {
        console.log("start");
        $scope.tresc_diva = "";

        for(var i=0; i<=34; i++)
        {
            $scope.element = "lit" + i;
            $scope.tresc_diva = $scope.tresc_diva + '<div class="litera" ng-click="sprawdz('+i+')" id="'+$scope.element+'">'+$scope.litery[i]+'</div>';
            if ((i+1) % 7 === 0)
                $scope.tresc_diva = $scope.tresc_diva + '<div style="clear:both;"></div>';
        }

        var $el = $($scope.tresc_diva).appendTo('#alfabet');
        $compile($el)($scope);
        $scope.wypisz_haslo();
    }

    String.prototype.ustawZnak = function(miejsce, znak)
    {
        if (miejsce > this.length - 1) return this.toString();
        else return this.substr(0, miejsce) + znak + this.substr(miejsce+1);
    }

    $scope.sprawdz = function (nr) {
        $scope.trafiona = false;

        console.log("klik");
        for (var i = 0; i < $scope.dlugosc; i++) {
            if ($scope.haslo.charAt(i) === $scope.litery[nr]) {
                $scope.haslo1 = $scope.haslo1.ustawZnak(i, $scope.litery[nr]);
                $scope.trafiona = true;
                console.log("true");
            }
        }

        if ($scope.trafiona === true) {
            $scope.yes.play();
            $scope.element = "#lit" + nr;
            $($scope.element).css({
                "background": "#003300",
                "color": "#00C000",
                "border": "3px solid #00C000",
                "cursor": "default"
            });
            $scope.wypisz_haslo();
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

            $scope.ile_skuch++;
            $scope.obraz = "../../images/szubienica/s"+ $scope.ile_skuch + ".jpg";
            $("#szubienica").html('<img src="'+$scope.obraz+'" alt="" />');
        }

        if ($scope.haslo === $scope.haslo1) {
            var $win = $('<span>Tak jest! Podano prawidłowe hasło: ' + $scope.haslo + '</span><br/><br/><span class="reset" ng-click="createNewGame()">JESZCZE RAZ?</span>').appendTo('#alfabet');
            $compile($win)($scope);
        }
        //przegrana
        if ($scope.ile_skuch >= 9){
            var $lost = $('<span>Przegrana! Prawidłowe hasło: '+$scope.haslo+'</span><br/><br/><span class="reset" ng-click="createNewGame()">JESZCZE RAZ?</span>').appendTo('#alfabet');
            $compile($lost)($scope);
        }
    }

    $scope.createNewGame = function(){
        location.reload();
    }
});