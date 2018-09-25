var path= require("path");
var router = require("express").Router();
var apiRoutes= require ("./apiRoutes");



// use routes
router.use("/apiRoutes", apiRoutes);


module.exports = router;