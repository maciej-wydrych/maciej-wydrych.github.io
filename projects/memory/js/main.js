'use strict'

var checkedTiles = 0;
var firstTile;
var secondTile;
var score = 0;

$(function () {
    $('.mask').click(function () {
        tileCheck(this);
    });

    function tileCheck(tile) {
        if (checkedTiles == 0) {
            $(tile).animate({opacity: '0'}, 300);
            checkedTiles += 1;
            firstTile = tile.parentElement;
            //            w jquery .parent()
            console.log(firstTile.classList[1]);
        } else if (checkedTiles == 1) {
            $(tile).animate({opacity: '0'}, 300);
            checkedTiles += 1;
            secondTile = tile.parentElement;
            console.log(secondTile.classList[1]);
            if (firstTile.classList[1] == secondTile.classList[1]) {
//                kafelki są takie same
                score += 1;
                $('#player1').html(score);
            } else {
//                kafelki są różne
                $(firstTile).find('.mask').animate({opacity: '1'}, 600);
                $(secondTile).find('.mask').animate({opacity: '1'}, 300);
            };
            checkedTiles = 0;
        };


    }

})
