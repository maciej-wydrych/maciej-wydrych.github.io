'use strict'

$(function () {

    var buyData;
    var prevBuyData = 0;
    
    var sellData;
    var prevSellData = 0;

    var downArrow = '<i class="fas fa-arrow-down"></i>';
    var upArrow = '<i class="fas fa-arrow-up"></i>';
    var noChange = '<i class="fas fa-minus"></i>';

    function compareToPrevBuy() {
        var buyChangeSign;
        if (prevBuyData == 0) {
            buyChangeSign = '';
        } else if (buyData > prevBuyData) {
            buyChangeSign = upArrow;
        } else if (buyData < prevBuyData) {
            buyChangeSign = downArrow;
        } else if (buyData == prevBuyData) {
            buyChangeSign = noChange;
        }

        return buyChangeSign
    };
    
        function compareToPrevSell() {
        var sellChangeSign;
        if (prevSellData == 0) {
            sellChangeSign = '';
        } else if (sellData > prevSellData) {
            sellChangeSign = upArrow;
        } else if (sellData < prevSellData) {
            sellChangeSign = downArrow;
        } else if (sellData == prevSellData) {
            sellChangeSign = noChange;
        }

        return sellChangeSign
    };
    function uploadData() {
        var now = new Date();
        $.getJSON("https://blockchain.info/pl/ticker", function (response) {
            buyData = response.PLN.buy;
            sellData = response.PLN.sell;
            $('#buy-list').prepend('<p>' + buyData.toFixed(2) + ' ' + compareToPrevBuy() + '</p><p class="date">Upload date: ' + now + '</p><hr>');
            prevBuyData = buyData;
            $('#sell-list').prepend('<p>' + sellData.toFixed(2) + ' ' + compareToPrevSell() + '</p><p class="date">Upload date: ' + now + '</p><hr>');
            prevSellData = sellData;
            
        });
    };

    $('#upload-data-btn').click(function () {
        uploadData();
    });

});
