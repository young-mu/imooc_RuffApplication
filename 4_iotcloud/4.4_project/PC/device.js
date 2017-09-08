var Protocol = require('azure-iot-device-mqtt').Mqtt;
var Client = require('azure-iot-device').Client;
var Message = require('azure-iot-device').Message;

var SAS = 'SharedAccessSignature sr=RuffTest2.azure-devices.cn%2Fdevices%2Fruff_node&sig=aVfEaUel2D3J4BoHaMw9oKDj5qosqHMAffI8Y%2B97y%2Bo%3D&se=1503646468';

var client = Client.fromSharedAccessSignature(SAS, Protocol);

var connectCallback = function (err) {
    if (err) {
        console.log('connect failed with error', err);
    }
    console.log('connect successfully');

    client.on('message', function (msg) {
        console.log('message: ' + msg.data.toString());
    });
};

client.open(connectCallback);
