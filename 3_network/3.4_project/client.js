var net = require('net');

var host = '127.0.0.1';
var port = 7777;

var client = new net.Socket();

client.connect(port, host, function () {
    var content = JSON.stringify({
        'id': 'led-r',
        'method': 'turnOn'
    });
    client.write(content);
});

client.on('data', function (data) {
    var ret = data.toString();
    if (ret === 'Y') {
        console.log('Control successfully.');
    } else if (ret === 'N') {
        console.log('Control failed.');
    }

    client.destroy();
});
