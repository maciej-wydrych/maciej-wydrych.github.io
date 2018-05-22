'use strict'

$(function(){
    
    $(window).scroll(function(){
//        var position = window.pageYOffset;
        if ($(window).scrollTop() >= 760) {
            $('#main-nav').addClass('nav-scroll');
        } else {
            $('#main-nav').removeClass('nav-scroll');
        }
        
    });
    
//    smooth-scroll!!!
//    trzeba pamiętać, żeby mieć odpowiedni cdn (nie slim!)
    $('a[href*="#"]:not([href="#"])').click(function(e){
//    pobieramy wszystkie linki które mają href=#, poza tymi które mają samo hrem="#"
        $('html, body').animate({scrollTop: $(this.hash).offset().top}, 500);
    });
});