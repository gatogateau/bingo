var path= require("path");
var router = require("express").Router();
var HTMLRoutes= require("./HTMLRoutes");




// use routes
router.use("/HTMLRoutes", HTMLRoutes);


module.exports = router;