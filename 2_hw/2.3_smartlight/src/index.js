'use strict';

$.ready(function (error) {
    if (error) {
        console.log(error);
        return;
    }

    setInterval(function () {
        $('#light').getIlluminance(function (error, value) {
            console.log('light value is ' + value);
            if (value <= 100) {
                $('#relay').turnOn();
            } else {
                $('#relay').turnOff();
            }
        });
    }, 1000);

    $('#led-r').turnOn();
});

$.end(function () {
    $('#led-r').turnOff();
});
