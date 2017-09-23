var path = require("path");
var db = require("../models")

// Routes
// =============================================================
module.exports = function (app) {

    //Retrieve all users
    app.get("/api/users/", function (req, res){
        db.User.findAll({})
        .then(function(result){
            res.send(result);
        });
    });

    //Retrieve current active streak
    app.get("/habitCurStreak/:id", function (req, res){
        db.Progress.findOne({
            where: {
                    HabitId: req.params.id,
                    date: {
                        $lt : new Date(),
                        $gt: new Date(new Date() - 24 * 60 * 60 * 1000)
                }
            }
        }).then(function (result){
            res.json(result);

        });
    });

    //Retrieve all progress entries for the supplied HabitId
    app.get("/habit/:id", function (req, res) {
        //console.log(req.params.id);
        db.Progress.findAll({
            where: {
                HabitId: req.params.id
            }
        }).then(function (result) {
            //console.log(result);
            res.json(result);
        });
    });

    //Retrieve all uncompleted habits for today
    app.get("habitTodo/:id", function (req, res){
        db.Progress.findAll({

        });
    });

    //Create new habit entry
    app.post("/api/createhabit", function (req, res) {
        console.log(req.body)
        db.Habit.create(req.body).then(function (result) {
            res.json(result)
            console.log(result)
        })
    });

    //Create new user   NOT TESTED
    app.post("/api/createuser", function (req, res){
        db.User.create(req.body).then(function (result)
        {
            req.json(result);
        });
    });

    //Add todays progress to supplied habit NOT TESTED
    app.post("/api/updatehabit/:id", function ( req, res){
        //First retrieve current consec_days value if exists
        db.Progress.FindOne({

        }).then(function(days){
            var consec=0;
            if(days){
                consec = days.consec_days+1;
            }
            else{
                consec = 1;
            }
            req.body.consec_days = consec;
            db.Progress.create(req.body).then(function(result)
            {
                req.json(result);
            } );            
        });

    });

    //Retrieve all habits for user with supplied id
    app.get("/user/:id", function (req, res) {
        db.User.findOne({
            where: {
                id: req.params.id
            },
            include: [db.Habit]
        }).then(function (result) {
            //console.log(result.Habits[0]);
            //console.log(result.Habits[1]);
            
            var array = [];
            for (var i = 0; i < result.Habits.length; i++) {
                array.push(result.Habits[i]);
            }
            //console.log(array);
            res.render("index", { habits: array, id: result.id })
        });
    });
}


