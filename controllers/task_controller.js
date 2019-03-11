let db = require('../models');

module.exports = function (app) {
    // Get Tasks
    app.get("/", function (req, res) {
        db.Task.findAll({}).then(function(dbTasks) {
            res.render("index", {tasks: dbTasks});
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
    app.put("/:id", function(req, res) {
        db.Task.update({
            completed: true
        }, {
            where: {
                id: req.params.id
            }
        }).then(function() {
            res.redirect("/");
        });
    });
};





