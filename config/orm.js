// This is for the MySQL connection
// var connection = require("../config/connection.js");

// var orm = {
//     all: function(table, callback) {
//         var queryString = "SELECT * FROM " + table + ";";
//         connection.query(queryString, function(err, result) {
//             if (err) {
//                 throw err;
//             }
//             callback(result);
//         });
//     },
//     update: function(table, setToTrue, condition, callback) {
//         var queryString = "UPDATE " + table + " SET " + setToTrue + " WHERE " + condition;
//         connection.query(queryString, function(err, result) {
//             if (err) {
//                 throw err;
//             }
//             callback(result);
//         });
//     },
//     create: function(table, timeframe, enteredGoal, callback) {
//         var queryString = "INSERT INTO " + table + " (goal, " + timeframe + ", createdAt) VALUES ('" + enteredGoal + "', true, CURRENT_TIME);"
//         connection.query(queryString, function(err, result) {
//             if (err) {
//                 throw err;
//             }
//             callback(result);
//         });
//     }
// }



// module.exports = orm;