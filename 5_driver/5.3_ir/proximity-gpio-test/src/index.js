'use strict';

$.ready(function (error) {
    if (error) {
        console.log(error);
        return;
    }

    $('#led-r').turnOn();

    $('#proximity').on('near', function () {
        $('#led-g').turnOn();
    });

    $('#proximity').on('away', function () {
        $('#led-g').turnOff();
    });

    setInterval(function () {
        if ($('#proximity').near) {
            console.log('near');
        } else {
            console.log('away');
        }
    }, 2000);
});

$.end(function () {
    $('#led-r').turnOff();
});
