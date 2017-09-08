var http = require('http');

var options = {
    host: '127.0.0.1',
    port: 8888,
    path: '/test'
};

var req = http.request(options, function (res) {
    res.on('data', function (data) {
        console.log(data.toString());
    });
});

req.end();
