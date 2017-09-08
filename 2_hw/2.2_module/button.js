'use strict';

$.ready(function (error) {
    if (error) {
        console.log(error);
        return;
    }

    $('#button').on('push', function () {
        $('#led-g').turnOn();
    });

    $('#button').on('release', function () {
        $('#led-g').turnOff();
    });

    $('#led-r').turnOn();
});

$.end(function () {
    $('#led-r').turnOff();
});


