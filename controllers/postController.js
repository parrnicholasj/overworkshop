const db = require('../models');

const addPost = (req, res) => {
  console.log(req.body);
  // get information about user out of req.body
  const { title, link, desc, screenshot } = req.body;

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

const getPosts = async (req, res) => {
  const [err, data] = await handle(User.findAll({}));

  if (err) {
    res.status(500).json(err);
  } else {
    res.status(200).json(data);
  }
};

module.exports = {
  addPost,
  getPosts
}
