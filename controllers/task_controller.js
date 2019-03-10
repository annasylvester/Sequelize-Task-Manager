const express = require("express");
const router = express.Router();

// Import the model (cat.js) to use its database functions.
const tasks = require("../models/task_manager.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    tasks.selectAll(function (data) {
        let hbsObject = {
            tasks: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/tasks", function (req, res) {
    tasks.insertOne([
        "task_name"
    ], [
        req.body.task_name
    ], function (result) {
        // Send back the ID of the new quote
        res.redirect('/');
    });
});

router.put("/tasks/:id", function (req, res) {
    let condition = "id = " + req.params.id;

    console.log("condition", condition);

    tasks.updateOne({
        completed: true
      }, condition, function(result) {
        res.redirect('/');
      });
});

// Export routes for server.js to use.
module.exports = router;