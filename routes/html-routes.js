var path = require("path");
var db = require("../models");
var moment = require("moment");

module.exports = function(app) {

	// This gets all of the data from the database and displays it via handlebars
	app.get("/", function(req, res) {
		db.BurritoBucket.findAll({}).then(function(data) {

            // This is creating a new array so I can format the date to show on the page in the format I want
            var newArray = [];
            
            for (var i = 0; i < data.length; i++) {
                var newObj = {};
                newObj.id = data[i].id;
                newObj.goal = data[i].goal;
                newObj.short = data[i].short;
                newObj.longer = data[i].longer;
                newObj.bucket = data[i].bucket;
                newObj.complete = data[i].complete;
                newObj.createdAt = moment(data[i].updatedAt).format('MMMM Do YYYY, h:mm a');
                newObj.timeittook = moment(data[i].updatedAt).from(moment(data[i].createdAt));
                newArray.push(newObj);
            }

            var hbsObject = { burrito: newArray }; 
             
			res.render("index", hbsObject);
		});
	});

    app.post("/:id", function(req, res) {

        // This updates the goal and moves to the complete column
        if (req.query._method === "PUT") {
            db.BurritoBucket.update({
                complete: true,
                }, {
                where: {
                    id: req.params.id
                }
                }).then(function(results) {
                res.redirect("/");
                });
        } else {
            
            // This deletes the item completely from the database
            db.BurritoBucket.destroy({
                where: {
                    id: req.params.id
            }
            }).then(function(results) {
                res.redirect("/");
            });
        }
    });

    // This is when the user enters a new goal
    app.post("/", function(req, res) {
        // This part runs a check to see what the user entered.
        var short_section = false;
        var longer_section = false;
        var bucket_section = false;
        // var checkforRange = req.body.range || "short";
        // var checkforGoal = req.body.goal || "I WANT TO BE LIKE STUART";
        var range = req.body.range;
        if (range === "bucket") { bucket_section = true }
        else if (range === "longer") { longer_section = true }
        else { short_section = true }

        // This will create a new entery in the database
        db.BurritoBucket.create({
            goal: req.body.goal,
            complete: req.body.complete,
            short: short_section,
            longer: longer_section,
            bucket: bucket_section
        }).then(function(results) {

            // This reloads the page to display all the data including the new entry
            res.redirect("/");
        }, function(err){
            res.redirect("/");
        });
    });
}     