
(function() {
  "use strict";

  var express = require("express"),
    app = express();

  app.get("/", function(request, response) {
    response.send("Hello World!");
  });

  app.listen(3000, function() {
    console.log("my-app listening on port 3000");
  });
}());
