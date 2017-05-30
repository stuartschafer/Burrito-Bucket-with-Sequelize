var path = require("path");
var db = require("../models");
var moment = require("moment");


// Routes
// =============================================================
module.exports = function(app) {

	// Each of the below routes just handles the HTML page that the user gets sent to.

	// This gets all of the data from the database and displays it via handlebars
	app.get("/", function(req, res) {
		db.BurritoBucket.findAll({}).then(function(data) {
			var hbsObject = { burrito: data };
                            // moment(data.updatedAt).format('MMMM Do YYYY, h:mm a') 
                    console.log(hbsObject);

                    // var intlData = {
                    //     "locales": "en-US",
                    //     "formats": {
                    //         "date": {
                    //             "short": {
                    //                 "day": "numeric",
                    //                 "month": "long",
                    //                 "year": "numeric"
                    //             }
                    //         }
                    //     }
                    // };

                    // var html = template(context, {
                    //     data: {intl: intlData}
                    // });
            // console.log(comçpleted);
			res.render("index", hbsObject);
		});
	});

    // app.put("/:id", function(req, res) {
    // //   var condition = "id = " + req.params.id;
    // //   // burrito.update("complete = true", condition, function() { res.redirect("/") });
    // console.log("HERE!!!!");

    // db.BurritoBucket.update({
    //     complete: true
    //     }, {
    //     where: {
    //         id: req.body.id
    //     }
    //     }).then(function(results) {
    //     res.redirect("/");
    //     });
    // });

// });

    app.post("/", function(req, res) {
        // This part runs a check to see what the user entered.
        var short_section = false;
        var longer_section = false;
        var bucket_section = false;
        // var checkforRange = req.body.range || "short";
        // var checkforGoal = req.body.goal || "I WANT TO BE LIKE STUART";
        var range = req.body.range;
        if (range === "short") { short_section = true }
        else if (range === "longer") { longer_section = true }
        else { bucket_section = true }

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
        });
    });
}     