const db = require('../models');

const addPost = (req, res) => { //adds a post screenshots optional
  console.log(req.body);

  const {
    title,
    link,
    desc,
    screenshot
  } = req.body;

  db.Post.create({
      title,
      link,
      desc,
      screenshot
    }).then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.json(err);
    });

};
const getPosts = (req, res) => {
  db.Post.findAll({}) //this one is not being used currently
    .then(dbPostData => {
      res.render("view", {
        postData: dbPostData
      })
    })
    .catch(err => {
      console.log(err);
      res.json(err);
    });
}

module.exports = {
  addPost,
  getPosts
}