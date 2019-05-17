//get all posts with their info and pass it on

var db = require("../models");

module.exports = function(app) {

  
  app.get("/routes/apiPostRoutes", function(req, res) {
    
    db.Post.findAll({}).then(function(data) {
      
      res.json(data);
    });
  });

  app.post("/routes/apiPostRoutes", function(req, res) {
    
    db.Post.create({
      title: req.body.title,
      link: req.body.link,
      desc: req.body.desc
    }).then(function(data) {
      
      res.json(data);
    });
  });

}