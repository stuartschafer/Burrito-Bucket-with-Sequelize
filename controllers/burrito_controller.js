// var express = require("express");

// var burrito = require("../models/burrito.js");

// var router = express.Router();

// router.get("/", function(req, res) {
//     burrito.all(function(data) { var hbsObject = { burrito: data };
//     res.render("index", hbsObject);
//     });
// });

// router.put("/:id", function(req, res) {
//   var condition = "id = " + req.params.id;
//   burrito.update("complete = true", condition, function() { res.redirect("/") });
// });

// router.post("/", function(req, res) {
//     var checkforRange = req.body.range || "short";
//     var checkforGoal = req.body.goal || "I WANT TO BE LIKE STUART";
//     burrito.create(checkforRange, checkforGoal, function() { res.redirect("/") });
// });

// module.exports = router;