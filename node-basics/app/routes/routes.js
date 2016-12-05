
// Require express
var express = require('express'),
  router = express.Router(),
  path = require('path');

// Export this router
module.exports = router;

// Route the app when the server runs (homepage)
router.get('/', function(request, response) {
  response.render('pages/index');
});

// About page route
router.get('/about', function(request, response) {
  response.render('pages/about');
});

// Contact page
router.get('/contact', function (request, response) {
  response.render('pages/contact');
});