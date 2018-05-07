'use strict'

$(function () {

    var activeDisplay = document.getElementById('active-display');
    var memoryDisplay = document.getElementById('memory-display');
    var action;
    var outcome;;

    $('.digits').click(function () {
            var value = $(this).val();
            $('#active-display').append(value);
    });

    $('#period-button').click(function () {
        $('#active-display').append('.');
    });

    $('.operators').click(function () {
        action = $(this).val();
        $('#memory-display').append(activeDisplay.innerHTML);
        $('#memory-display').append(action);
        activeDisplay.innerHTML = "";
    });

    $('#percent-button').click(function () {
        var percentAction = eval("activeDisplay.innerHTML * 0.01");
        $('#memory-display').append(percentAction);
        activeDisplay.innerHTML = "";
    })

    $('#equals-button').click(function () {
        $('#memory-display').append(activeDisplay.innerHTML);
        outcome = eval(memoryDisplay.innerHTML);
        activeDisplay.innerHTML = outcome;
    });

    $('#erase-button').click(function () {
        $('#active-display').empty();
    });

    $('#clear-button').click(function () {
        $('#active-display').empty();
        $('#memory-display').empty();
        action = "";
        outcome = "";
    });

})
