'use strict'

$(function () {

    $('#coin-slider').coinslider({ 
        width: 900, 
        height: 500,
        links: false,
        
    });
    
    $(window).scroll(function () {
        //        var position = window.pageYOffset;
        if ($(window).scrollTop() >= 800) {
            $('#main-nav').addClass('nav-scroll');
        } else {
            $('#main-nav').removeClass('nav-scroll');
        }

    });

    $('a[href*="#"]:not([href="#"])').click(function (e) {
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top
        }, 500);
    });


});
