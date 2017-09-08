var net = require('net');

var host = '127.0.0.1';
var port = 7777;

var client = new net.Socket();

client.connect(port, host, function () {
    client.write('I am Client');
});

client.on('data', function (data) {
    console.log(data.toString());
    client.destroy();
});

client.on('close', function () {
    console.log('close');
});
