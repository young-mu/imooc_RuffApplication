var Client = require('azure-iothub').Client;
var Message = require('azure-iot-common').Message;

var connectionString = '<iothub connectionString>';

var client = Client.fromConnectionString(connectionString);
var deviceId = 'ruff_node';

var connectCallback = function (err) {
    if (err) {
        console.log('connect failed with error', err);
        return;
    }
    console.log('connect successfully');

    var i = 0;
    setInterval(function () {
        var message = new Message('I am service end @ ' + i++);
        client.send(deviceId, message, function (err) {
            if (err) {
                console.log('send failed with error', err);
                return;
            }
            console.log('send successfully');
        });
    }, 5000);
};

client.open(connectCallback);
