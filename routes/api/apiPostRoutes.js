//use the postController.js to make posts

const router = require('express').Router();
const fileUploader = require('../../middleware/fileUpload');

const postControl = require("../../controllers/postController");

router.route("/add")
.post(fileUploader, postControl.addPost)//use multipart to test in insomnia

module.exports = router;

