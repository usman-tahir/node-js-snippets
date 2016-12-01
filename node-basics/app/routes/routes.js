
// Require express
var express = require('express'),
  router = express.Router();

// Export this router
module.exports = router;

// Route the app when the server runs (homepage)
router.get('/', function(request, response) {
  response.send('Hello, World!');
});

// About page route
router.get('/about', function(request, response) {
  response.send('About page');
});

router.get('/contact');
router.post('/contact');