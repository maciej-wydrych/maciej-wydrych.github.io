'use strict'

$(function () {
    var index = 0;


    function slideChange() {
        var margin = -100 * index + '%';
        console.log(margin)
        $('#slide-show').animate({
            marginLeft: margin
        }, 1000)
    };

    $('#next-arrow').click(function () {
        if (index < 3) {
            index += 1
        } else if (index == 3) {
            index = 0
        }
        slideChange();
    });

    $('#prev-arrow').click(function () {
        if (index > 0) {
            index -= 1
        } else if (index == 0) {
            index = 3
        }
        slideChange();
    })
})
