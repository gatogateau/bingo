var router = require("express").Router();
var gameController = require("../../controller/gameController");


// api/apiRoutes/........





router.route ("/")
  .get(gameController.mainPage)
  console.log ("main Page working");

router.route ("moderator")
.get(gameController.moderator)
console.log ("moderator Page working");

module.exports = router;