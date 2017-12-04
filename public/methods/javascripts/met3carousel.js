$(document).ready(function () {
    $('#myCarousel').on('slide.bs.carousel', function () {
        $(this).carousel('pause')
    })
});
