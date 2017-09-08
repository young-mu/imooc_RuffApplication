var Protocol = require('azure-iot-device-mqtt').Mqtt;
var Client = require('azure-iot-device').Client;
var Message = require('azure-iot-device').Message;

var connectionString = '<device connectionString>';

var client = Client.fromConnectionString(connectionString, Protocol);

var connectCallback = function (err) {
    if (err) {
        console.log('connect failed with error', err);
        return;
    }
    console.log('connect successfully');

    /* D2C */
    var i = 0;
    setInterval(function () {
        var message = new Message('I am device @ ' + i++);
        client.sendEvent(message, function (err) {
            if (err) {
                console.log('send failed with error', err);
                return;
            }
            console.log('send successfully');
        });
    }, 5000);

    /* C2D */
    client.on('message', function (msg) {
        console.log('message: ' + msg.data.toString());
    });
};

client.open(connectCallback);
