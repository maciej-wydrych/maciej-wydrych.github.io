'use strict'

$(function(){
  $(window).scroll(function(){
      if ($(document).scrollTop() < 100) {
          $('#main-nav').css({'backgroundColor': 'transparent'});
          $('a').css({'color': '#fff'});
      } else if ($(document).scrollTop() > 100){
            $('#main-nav').css({'backgroundColor': '#fff'});
          $('a').css({'color': '#1ac056'});
      }
  });
  });