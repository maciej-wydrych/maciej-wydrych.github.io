'use strict'

$(function () {
    //RANDOM ROW CONFIGURATION
    var rowsNumbers = [];
    var rowNumber;
    var rowNumberCheck = Boolean;
    
    $('.row').each(function() {
        do {
            rowNumber = Math.floor(Math.random() * 6) * 105;
            rowNumberCheck = rowsNumbers.includes(rowNumber);
        } while (rowNumberCheck == true);
        rowsNumbers.push(rowNumber);
        $(this).css('top', rowNumber + 'px')
    });
    
    //RANDOM TILE CONFIGURATION
    var tilesNumbers = [];
    var tileNumber;
    var tileNumberCheck = Boolean;

    $('.row').each(function () {
        $(this).find('.kafelek').each(function () {
            do {
                tileNumber = Math.floor(Math.random() * 6) * 105;
                tileNumberCheck = tilesNumbers.includes(tileNumber);
            } while (tileNumberCheck == true);
            tilesNumbers.push(tileNumber);
            $(this).css('left', tileNumber + 'px')
        });
        tilesNumbers = [];
    });

    //SWITCH PLAYER
    var player1 = $('#player1');
    var player2 = $('#player2');
    var activePlayer = player1
    
    function switchPlayer () {
        if (activePlayer == player1) {
            activePlayer = player2;
//            alert('Tura Gracza 2')
        } else if (activePlayer == player2) {
            activePlayer = player1;
//            alert('Tura Gracza 1')
        }
    }
    //ADD SCORE TO ACTIVE PLAYER
    var player1Score = 0;
    var player2Score = 0;
    
    function activePlayerScore (){
        if (activePlayer == player1) {
            player1Score += 1;
            player1.html(player1Score);
        } else if (activePlayer == player2) {
            player2Score += 1;
            player2.html(player2Score);
        }
    };
    
    //SELECTED TILE CHECK
    var checkedTiles = 0;
    var firstTile;
    var secondTile;
    var score = 0;

    $('.mask').click(function () {
        tileCheck(this);
    });

    function tileCheck(tile) {
        if (checkedTiles == 0) {
            $(tile).animate({opacity: '0'}, 300);
            $(tile).hide();
            checkedTiles += 1;
            firstTile = tile.parentElement;
            //            w jquery .parent()
//            console.log(firstTile.classList[1]);
        } else if (checkedTiles == 1) {
            $(tile).animate({opacity: '0'}, 300);
            $(tile).hide();
            checkedTiles += 1;
            secondTile = tile.parentElement;
//            console.log(secondTile.classList[1]);
            if (firstTile.classList[1] == secondTile.classList[1]) {
                //                kafelki są takie same
                activePlayerScore();
            } else {
                //                kafelki są różne
                $(firstTile).find('.mask').show();
                $(firstTile).find('.mask').animate({opacity: '1'}, 1000);
                $(secondTile).find('.mask').show();
                $(secondTile).find('.mask').animate({opacity: '1'}, 1000);
                
                switchPlayer();
                console.log (activePlayer)
            };
            checkedTiles = 0;
        };


    }

})
