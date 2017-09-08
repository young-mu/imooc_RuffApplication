'use strict';

$.ready(function (error) {
    if (error) {
        console.log(error);
        return;
    }

    var Protocol = require('azure-iot-device-mqtt').Mqtt;
    var Client = require('azure-iot-device').Client;

    var connectionString = '<device connectionString>';

    var client = Client.fromConnectionString(connectionString, Protocol);

    client.open(function (err) {
        if (err) {
            console.log('connect failed with error', err);
            return;
        }
        console.log('connect successfully');

        client.on('message', function (msg) {
            var command = msg.data.toString();
            if (command === 'on') {
                $('#led-b').turnOn();
            } else if (command === 'off') {
                $('#led-b').turnOff();
            } else {
                console.log('invalid command: ' + command);
            }
        });
    });

    $('#led-r').turnOn();
});

$.end(function () {
    $('#led-r').turnOff();
});
