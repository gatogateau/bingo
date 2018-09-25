var path= require("path");
var router = require("express").Router();
var htmlRoutes= require("./htmlRoutes");




// use routes
router.use("/htmlRoutes", htmlRoutes);


module.exports = router;