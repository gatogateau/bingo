var bodyParser = require("body-parser");
var express = require("express");
var app = express();
var path = require("path");

module.exports = {

    mainPage: function (req, res) {
        console.log (path.join(__dirname, "../views/public/pages/home.html"));
        
// get rid of the path.join and test
        res.sendFile(path.join(__dirname, "../views/public/pages/home.html"))
        console.log ("mainpage function ran");
        console.log ("but still not working");
    },

    moderator: function (req, res) {
        res.sendFile(path.join(__dirname, "../views/public/pages/moderator.html"))
        console.log ("moderator page ran");
    }

};



