var express=require("express");
var app=express();
var shuffle= require("shuffle-array");
var bodyParser=require("body-parser");
var routes = require("./routes");



// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(routes);
// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================


// set static page

// Designate our public folder as a static directory
app.use(express.static("views/public"));






// require("./app/routing/apiRoutes")(app);
require("./routes/HTMLRoutes");

// require("./routes/apiRoutes");

// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});