var path = require("path");
var router = require("express").Router();
var apiRoutes = require("./apiRoutes");
var HTMLRoutes = require("./HTMLRoutes");
// API Routes
router.use("/html", HTMLRoutes);
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../views/public/pages/home.html"));
});

module.exports = router;