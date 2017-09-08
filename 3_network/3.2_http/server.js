var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
    var pathname = url.parse(req.url).pathname;
    if (pathname === '/test') {
        res.writeHead(200, {'content-type': 'text/plain'});
        res.end('OK');
    }
}).listen(8888);
