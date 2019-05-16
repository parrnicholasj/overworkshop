const db = require("../../models");

module.exports = (app) => {
  app.get("/viewPosts", function (req, res) {
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

// const router = require('express').Router();

// router.route("/view")
// .post(fileUploader, addPost)//use multipart to test in insomnia

// module.exports = router;