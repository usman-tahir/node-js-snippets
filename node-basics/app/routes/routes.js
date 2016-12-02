
// Require express
var express = require('express'),
  router = express.Router(),
  path = require('path');

// Export this router
module.exports = router;

// Route the app when the server runs (homepage)
router.get('/', function(request, response) {
  response.sendFile(path.join(__dirname, '../../index.html'));
});

// About page route
router.get('/about', function(request, response) {
  response.send('About page');
});

router.get('/contact');
router.post('/contact');