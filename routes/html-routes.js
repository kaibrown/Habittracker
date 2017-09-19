var path = require("path");
var db = require("../models")

// Routes
// =============================================================
module.exports = function (app) {
  // index route loads view.html
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/overview.html"));
  });
  app.get("/user/:id", function (req, res) {
    db.User.findOne({
      include: [{
        model: db.Habit,
        where: {
          id: req.params.id
        }
      }]
    }).then(function(result){
      res.json(result)
    });
  });
}