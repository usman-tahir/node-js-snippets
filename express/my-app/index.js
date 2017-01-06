
(function() {
  "use strict";

  var express = require("express"),
    app = express();

  app.use(express.static("public"));
  
  app.get("/", function(request, response) {
    response.send("Hello World!");
  });

  app.post("/", function(request, response) {
    response.send("Received a POST request");
  });

  app.put("/user", function(request, response) {
    response.send("Received a PUT request at /user");
  });

  app.delete("/user", function(request, response) {
    response.send("Received a DELETE request at /user");
  });

  app.listen(3000, function() {
    console.log("my-app listening on port 3000");
  });
}());
