
/*
var http = require('http'),
  server;

function handleRequest(request, response) {
  response.end('Hello, World!');
}

server = http.createServer(handleRequest);

server.listen(8080, function () {
  console.log('Listening on port 8080');
});
*/

/* Server setup with express */

// Dependencies
var express = require('express'),
  app = express(),
  port = 8080,
  router = require('./app/routes/routes');

// Route the app
app.use('/', router);

// Start the server
app.listen(port, function() {
  console.log('App started.');
});