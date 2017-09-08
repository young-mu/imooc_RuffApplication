var net = require('net');

var server = net.createServer();

server.on('connection', function (socket) {
    socket.on('data', function (data) {
        console.log(data.toString());
        socket.write('I am Server');
    });

    socket.on('close', function () {
        console.log('close');
    });

}).listen(7777);

server.on('listening', function () {
    console.log('server is listening port 7777');
});
