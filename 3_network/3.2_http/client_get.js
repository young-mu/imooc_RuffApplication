var http = require('http');
var qs = require('querystring');

var content = qs.stringify({
    id: '001'
});

var options = {
    host: '127.0.0.1',
    port: 8888,
    path: '/test' + '?' + content,
    method: 'GET'
};

var req = http.request(options, function (res) {
    res.on('data', function (data) {
        console.log(data.toString());
    });
});

req.end();
