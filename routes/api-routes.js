var path = require("path");
var db = require("../models")

// Routes
// =============================================================
module.exports = function (app) {
  // index route loads view.html
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/overview.html"));
  });

  app.get("/habit/:id", function(req, res){
    var query = {};
    if (req.query.author_id) {
      query.UsesrId = req.query.user_id;
    }
    db.Habit.findOne({
      where: query,
      include: [db.Progress]
    }).then(function(result) {
      res.json(result);
    });
  });
  
  app.get("/user/:id", function (req, res) {
    // db.User.findAll({}).then(function(result){
    //   res.json(result);
    // });
    db.User.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Habit]
    }).then(function(result){
      //console.log(result.Habits[0]);
      //console.log(result.Habits[1]);

      var hbsObject = {
        habit:result.Habits[0]
      }

      var array = [];
      for(var i=0;i<result.Habits.length;i++){
        array.push(result.Habits[i]);
      }
      
      res.render("index", {habits : array})
    });
  });
}


