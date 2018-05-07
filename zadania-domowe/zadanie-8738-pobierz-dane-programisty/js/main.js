'use strict'

$(function () {
    $('#btn').click(function () {
        $.ajax({
            url: 'https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php',
            dataType: "json",
            success: function (response) {
                daneProgramisty(response);
            }
        })
    })

    function daneProgramisty(data) {
        $('#btn').after('<div id="dane-programisty"></div>');
        $('#dane-programisty').css({
            'width': '200px',
            'height': '200px',
            'border': '1px solid black',
        });
        $('#dane-programisty').html('<p>Dane programisty:</p><p>Imię: ' + data.imie + '</p><p>Nazwisko: ' + data.nazwisko + '</p><p>Zawód: ' + data.zawod + '</p><p>Firma: ' + data.firma + '</p>')
    }
})
