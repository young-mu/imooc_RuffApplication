var net = require('net');

var server = net.createServer();

server.on('connection', function (socket) {
    socket.on('data', function (data) {
        var object = JSON.parse(data);
        var id = object.id;
        var method = object.method;

        $('#' + id)[method](function (error) {
            if (error) {
                console.log(error);
                socket.write('N');
            }
            socket.write('Y');
        });
    });
}).listen(7777);

server.on('listening', function () {
    console.log('server is listening port 7777');
});
