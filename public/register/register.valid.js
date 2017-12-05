$(document).ready(function(){

    $('input[type=password]').keyup(function() {
        var pswd = $(this).val();

        //validate the length
        if ( pswd.length < 8 ) {
            $('#length').removeClass('valid').addClass('invalid');
        } else {
            $('#length').removeClass('invalid').addClass('valid');
        }

        //validate letter
        if ( pswd.match(/[A-z]/) ) {
            $('#letter').removeClass('invalid').addClass('valid');
        } else {
            $('#letter').removeClass('valid').addClass('invalid');
        }

        //validate capital letter
        if ( pswd.match(/[A-Z]/) ) {
            $('#capital').removeClass('invalid').addClass('valid');
        } else {
            $('#capital').removeClass('valid').addClass('invalid');
        }

        //validate number
        if ( pswd.match(/\d/) ) {
            $('#number').removeClass('invalid').addClass('valid');
        } else {
            $('#number').removeClass('valid').addClass('invalid');
        }

        //validate space
        if ( pswd.match(/[^a-zA-Z0-9\-\/]/) ) {
            $('#space').removeClass('invalid').addClass('valid');
        } else {
            $('#space').removeClass('valid').addClass('invalid');
        }

    }).focus(function() {
        $('#pswd_info').show();
    }).blur(function() {
        $('#pswd_info').hide();
    });


    $(".btn").click(function(){
        $(".btn-sign-in p").text("");
        $(".btn-sign-in").addClass("loading");
        $(".btn-sign-in").append("<div class='loading-spinner'></div>");

        // Timer that delays the loading with 3s
        setTimeout( function(){
            $(".overlay").fadeIn();
            $(".btn-sign-in").removeClass("loading");
            $(".loading-spinner").remove();

            // Timer that delays the reset with 2s
            setTimeout( function(){
                $(".overlay").fadeOut();
                $(".btn-sign-in p").text("Sign in");
            }, 2000 );

        }, 3000 );
    });

});
