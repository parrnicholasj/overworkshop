const router = require('express').Router()
const withAuth = require('../../middleware/authentication');
const fileUploader = require('../../middleware/file-upload');

const {
  getUserProfile,
  register,
  login
} = require('../../controllers/user-controller');

router
  .route('/')
  .get(withAuth, getUserProfile);

router
  .route('/login')
  .post(login);

router
  .route('/register')
  .post(fileUploader, register);

module.exports = router;