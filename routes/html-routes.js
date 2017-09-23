var path = require("path");

// Routes
// =============================================================
module.exports = function (app) {
    // index route loads view.html
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/overview.html"));
  });
    // create route loads with createhabit.html
  app.get("/create", function (req, res) {
      res.sendFile(path.join(__dirname, "../public/createhabit.html")); 
  });
}