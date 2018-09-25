var router = require("express").Router();
var gameController = require("../../controller/gameController");




// api/htmlRoutes/play
router.route ("*")
  .get(gameController.mainPage)
  console.log ("main Page working");


// api/htmlRoutes/moderator 
router.route ("moderator")
.get(gameController.moderator)
console.log ("moderator Page working");

module.exports = router;