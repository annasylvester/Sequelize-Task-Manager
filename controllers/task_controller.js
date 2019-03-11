let db = require('../models');

module.exports = function (app) {
    // Get Tasks
    app.get("/", function (req, res) {
        db.Task.findAll({
            order: [['task_name', 'ASC']]
        }).then (function (result) {
            let hbsObject = {
                tasks: data
            };
            console.log(hbsObject);
            res.render("index", hbsObject);
        });
    });

    // Post Task
    app.post("/", function (req, res) {
        db.Task.create({
            task_name: req.body.task_name
        }).then(function (task) {
            res.redirect("/");
        });
    });

    // Update Tasks
    app.put("/", function(req, res) {
        db.Task.update({
            completed: req.body.completed
        }, {
            where: {
                id: req.body.id
            }
        }).then(function(task) {
            res.redirect("/");
        });
    });
};





