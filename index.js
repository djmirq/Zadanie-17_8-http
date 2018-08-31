var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/hello') {
		fs.readFile('./index.html', function(err, data) {
			response.write(data);
            response.end();				
		});
    } else {
		response.statusCode = 404;
        response.write('<img src=https://static.vecteezy.com/system/resources/previews/000/097/978/non_2x/404-template-set-vector.jpg alt="404">');
        response.end();
    }
});

server.listen(9000);