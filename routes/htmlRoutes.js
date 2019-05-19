const db = require("../models");

module.exports = (app) => {
  app.get("/viewposts", function (req, res) {
    db.Post.findAll({})
      .then(dbPostData => {
        res.render("view", {
          postData: dbPostData
        })
      })
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });
 }