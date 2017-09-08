var mqtt = require('mqtt');

var clientA = mqtt.connect('mqtt://test.mosquitto.org');

clientA.on('connect', function () {
    clientA.publish('a2b', 'I am client A');
    clientA.end();
});
