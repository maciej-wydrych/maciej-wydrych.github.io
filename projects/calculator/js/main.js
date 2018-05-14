'use strict'

$(function () {

    var activeDisplay = $('#active-display');
    var memoryDisplay = $('#memory-display');
    var action;
    var outcome;
    var periodCounter = 0;
    var displayEmpty = true;
    var newNumber = false;
    var lastAction;
    var anotherEquation = false;
    var percentActive = false;

    function animateDisplay() {
        $('.display-content').animate({
            opacity: '0.6'
        }, 75);
        $('.display-content').animate({
            opacity: '1'
        }, 75);
    };

    $('.digits').click(function () {
        if (newNumber == true) {
            activeDisplay.html('');
        };
        var value = $(this).val();
        activeDisplay.append(value);
        animateDisplay();
        displayEmpty = false;
        newNumber = false;
        percentActive = false;
    });

    $('#period-button').click(function () {
        if (periodCounter == 0) {
            if (displayEmpty == true) {
                activeDisplay.html('0' + '.');
                //                activeDisplay.append('.');
            } else if (displayEmpty == false) {
                activeDisplay.append('.')
            };
            animateDisplay();
            periodCounter += 1;
            newNumber = false;
            percentActive = false;
        };
    });

    $('.operators').click(function () {
        action = $(this).val();
        if (displayEmpty == true) {
            memoryDisplay.append('0' + action);
        } else if (displayEmpty == false) {
            memoryDisplay.append(activeDisplay.html() + action)
        }
        animateDisplay();
        newNumber = true;
        displayEmpty = true;
        periodCounter = 0;
        lastAction = '';
        anotherEquation = false;
        //        percentActive = true;
        //        console.log(percentActive);
    });

    $('#percent-button').click(function () {
        //        if (percentActive == true) {
        //            var percentAction = eval('activeDisplay.html() * 0.01');
        //            console.log(percentAction);
        //            activeDisplay.html(percentAction);
        //            solveEquation()
        //        }

        //        console.log(percentActive);
        var percentAction = eval("activeDisplay.html() * 0.01");
        activeDisplay.html(percentAction);
        solveEquation();
        animateDisplay()
    })

    $('#equals-button').click(function () {
        solveEquation();
        animateDisplay()
    });

    function solveEquation() {
        if (anotherEquation == true) {
            memoryDisplay.append(activeDisplay.html() + lastAction);
        } else if (anotherEquation == false) {
            lastAction = action + activeDisplay.html();
            memoryDisplay.append(activeDisplay.html());
        };
        outcome = eval(memoryDisplay.html());
        activeDisplay.html(outcome);
        memoryDisplay.html('');
        anotherEquation = true;
        newNumber = true;
        periodCounter = 0;
    }

    $('#erase-button').click(function () {
        activeDisplay.empty();
        animateDisplay();
    });

    $('#clear-button').click(function () {
        activeDisplay.empty();
        memoryDisplay.empty();
        action = "";
        outcome = "";
        periodCounter = 0;
        displayEmpty = true;
        newNumber = false;
        lastAction = '';
        anotherEquation = false;
        percentActive = false;
    });

})
