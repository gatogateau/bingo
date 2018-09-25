

module.exports = {

    mainPage: function (req, res) {
        res.sendFile(path.join(__dirname, "../views/public/pages/home.html"))
    },

    moderator: function (req, res) {
        res.sendFile(path.join(__dirname, "../views/public/pages/moderator.html"))
    }

};



