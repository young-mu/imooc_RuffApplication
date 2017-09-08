'use strict';

$.ready(function (error) {
    if (error) {
        console.log(error);
        return;
    }

    setInterval(function () {
        if ($('#led-r').isOn()) {
            $('#led-r').turnOff();
        } else {
            $('#led-r').turnOn();
        }
    }, 5000);
});

$.end(function () {
    $('#led-r').turnOff();
});
