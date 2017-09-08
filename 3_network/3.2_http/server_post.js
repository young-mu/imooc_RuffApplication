var http = require('http');
var url = require('url');
var qs = require('querystring');

http.createServer(function (req, res) {
    if (req.method === 'POST') {
        var pathname = url.parse(req.url).pathname;
        if (pathname === '/test') {
            req.on('data', function (chunk) {
                var obj = qs.parse(chunk.toString());
                console.log(obj);
                res.writeHead(200, {'content-type': 'text/plain'});
                res.end('OK');
            });
        }
    }
}).listen(8888);
