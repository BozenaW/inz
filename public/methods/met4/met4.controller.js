app.controller('met4Ctrl', function ($scope, $http, $location) {

    var x = $location.search();
    $scope.catTitle = x.tit;

    $http.post('/api/met4', {tes: $scope.catTitle}).then(function (data) {
        $scope.words = data.data.words;

        $scope.array = [];
        $scope.arrayWord = [];

        for (var key in  $scope.words) {
            $scope.array.push({word: key, trans: $scope.words[key].trans});
        }
    });
    
    $scope.trueStatus = function (ev) {
        ev.target.parentElement.previousElementSibling.style.background = '#c4ffca';
        ev.target.parentElement.previousElementSibling.previousElementSibling.style.background = '#c4ffca';
    };
    $scope.falseStatus = function (ev) {
        ev.target.parentElement.previousElementSibling.style.background = '#ffaca7';
        ev.target.parentElement.previousElementSibling.previousElementSibling.style.background = '#ffaca7';
    }
});