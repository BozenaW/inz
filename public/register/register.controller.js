app.controller('registerCtrl', function ($scope, $location, $rootScope, $http, $timeout) {

    $scope.user = {};

    $scope.signUp = function () {

                    console.log('ok');
            $http.post('/api/register', $scope.user).then(function (data) {
                $scope.userData = data.data;
                console.log($scope.userData);
            });

        $timeout(function ()
        {
            var divTrue = '<i class="fa fa-check-circle" aria-hidden="true"></i>';
            var divFalse= '<i class="fa fa-times-circle" aria-hidden="true"></i>';

                if ($scope.userData.status == 'Success') {
                    if(!($('#trueOrFalse').has("i"))){
                    $('#trueOrFalse').css({'display':'block', 'color':'green'}).append(divTrue);
                    $('#name').css('border','2px solid green');
                    }
                    else{
                        $('#trueOrFalse i').remove();
                        $('#trueOrFalse').css({'display':'block', 'color':'green'}).append(divTrue);
                        $('#name').css('border','2px solid green');
                    }
                    console.log('login wolny');
                    if($('#length, #letter, #capital, #number, #space').hasClass('valid') && $scope.user.password == $scope.repeatP) {
                        if($scope.user.surname == '') {
                            $('#surname').css('border', '2px solid red');
                        }
                        else{
                            $location.path('/');
                        }
                    }
                    else{
                        $('#paw, #paw2').css('border', '2px solid red');
                        console.log('hasla nie sa zgodne');
                    }
                }
                else{
                    if(!($('#trueOrFalse').has("i"))){
                    $('#trueOrFalse').css({'display':'block', 'color':'red'}).append(divFalse);
                        $('#name').css('border','2px solid red');
                    }
                    else{
                        $('#trueOrFalse i').remove();
                        $('#trueOrFalse').css({'display':'block', 'color':'red'}).append(divFalse);
                        $('#name').css('border','2px solid red');
                    }
                console.log('login zajety');

                }

        },2500);
    };
});
