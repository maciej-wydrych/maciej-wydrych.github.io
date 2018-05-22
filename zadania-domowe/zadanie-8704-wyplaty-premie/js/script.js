'use strict'

$(function () {
    $('#oblicz').click(function () {
        var workaholic1;
        var workaholic2;
        var workaholic3;

        $('.czas').each(function () {
            var pracownik = $(this).parent();
            var czas = $(this).val();
            var stawka = pracownik.find('.stawka').val();
            var wyplata = pracownik.find('.wyplata');
            var nadgodziny = 0;
            var premia = 0;
            
            if (czas > 160) {
                nadgodziny = czas - 160;
                premia = nadgodziny * stawka * 2;
            } else if (czas < 100) {
                pracownik.find('.pracownik').css('backgroundColor', 'red')
            };

//            workaholic1 empty check
            if (workaholic1 == undefined) {
                workaholic1 = pracownik;
//            workaholic1 value check
            }else if (czas > parseInt(workaholic1.find('.czas').val())) {
                workaholic3 = workaholic2;
                workaholic2 = workaholic1;
                workaholic1 = pracownik;
//            workaholic2 empty check
            } else if (workaholic2 == undefined) {
                workaholic2 = pracownik;  
//            workaholic2 value check
            } else if (czas > parseInt(workaholic2.find('.czas').val())) {
                workaholic3 = workaholic2;
                workaholic2 = pracownik;
//            workaholic3 empty check
            } else if (workaholic3 == undefined) {
                workaholic3 = pracownik;
//            workaholic3 value check
            } else if (czas > parseInt(workaholic3.find('.czas').val())) {
                workaholic3 = pracownik;
            };
                
            wyplata.html(czas * stawka + premia);
        });
        
        $('#workaholic1').html("1. " + workaholic1.find('.pracownik').html());
        $('#workaholic2').html("2. " + workaholic2.find('.pracownik').html());
        $('#workaholic3').html("3. " + workaholic3.find('.pracownik').html());
        
    }); 

});
