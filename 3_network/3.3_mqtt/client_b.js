var mqtt = require('mqtt');

var clientB = mqtt.connect('mqtt://test.mosquitto.org');

clientB.on('connect', function () {
    clientB.subscribe('a2b');
});

clientB.on('message', function (topic, message) {
    console.log('topic: ' + topic);
    console.log('message: ' + message.toString());
    clientB.end();
});
