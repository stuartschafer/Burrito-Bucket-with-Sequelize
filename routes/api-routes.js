var db = require("../models");

module.exports = function(app) {

    // This will display every entery in the database if the user enters /api
    app.get("/api", function(req, res) {
        db.BurritoBucket.findAll({}).then(function(results) {   
        res.json(results);
        });
    });

};