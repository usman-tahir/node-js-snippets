
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
  router = require('./app/routes/routes'),
  expressLayouts = require('express-ejs-layouts');

// Route the app
app.use('/', router);

// Use ejs and express layouts
app.set('view engine', 'ejs');
app.use(expressLayouts);

// Set static files for usage (CSS, images, etc.)
app.use(express.static(__dirname + '/public'));


// Start the server
app.listen(port, function () {
  console.log('App started.');
});