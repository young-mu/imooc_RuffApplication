'use strict';

$.ready(function (error) {
    if (error) {
        console.log(error);
        return;
    }

    var interval;

    $('#button').on('push', function () {
        interval = setInterval(function () {
            if ($('#led-b').isOn()) {
                $('#led-b').turnOff();
            } else {
                $('#led-b').turnOn();
            }
        }, 500);
    });

    $('#button').on('release', function () {
        clearInterval(interval);
    });

    $('#led-r').turnOn();
});

$.end(function () {
    $('#led-r').turnOff();
});


