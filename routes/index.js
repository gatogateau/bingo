var path = require("path");
var router = require("express").Router();
var apiRoutes = require("./api");
var htmlRoutes = require("./html");
// API Routes
router.use("/html", htmlRoutes);
router.use("/api", apiRoutes);

// If no API routes are hit, send to main page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../views/public/pages/home.html"));
  console.log ("no routes hit");
});

module.exports = router;