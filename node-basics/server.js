
var http = require('http'),
  server;

function handleRequest(request, response) {
  response.end('Hello, World!');
}

server = http.createServer(handleRequest);

server.listen(8080, function () {
  console.log('Listening on port 8080');
});