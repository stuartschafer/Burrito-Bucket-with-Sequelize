var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

// This will display every entery in the database
app.get("/api", function(req, res) {
    db.BurritoBucket.findAll({}).then(function(results) {   
    res.json(results);
    });
});






  // POST route for saving a new todo
//   app.post("/api/BurritoBuckets", function(req, res) {
//     // create takes an argument of an object describing the item we want to
//     // insert into our table. In this case we just we pass in an object with a text
//     // and complete property (req.body)
//     db.BurritoBucket.create({
//       text: req.body.text,
//       complete: req.body.complete
//     }).then(function(results) {
//       // We have access to the new todo as an argument inside of the callback function
//       res.json(results);
//     });
//   });

  // DELETE route for deleting todos. We can get the id of the todo to be deleted from
  // req.params.id
//   app.delete("/api/BurritoBuckets/:id", function(req, res) {
//     // We just have to specify which todo we want to destroy with "where"
//     db.BurritoBucket.destroy({
//       where: {
//         id: req.params.id
//       }
//     }).then(function(results) {
//       res.json(results);
//     });

//   });

  // PUT route for updating todos. We can get the updated todo data from req.body
//   app.put("/api/BurritoBuckets", function(req, res) {



    app.post("/:id", function(req, res) {
        //   var condition = "id = " + req.params.id;
        //   // burrito.update("complete = true", condition, function() { res.redirect("/") });
        db.BurritoBucket.update({
            complete: true,
            }, {
            where: {
                id: req.params.id
            }
            }).then(function(results) {
            res.redirect("/");
            });
        });




};