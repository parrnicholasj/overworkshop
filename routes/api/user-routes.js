const router = require("express").Router();

const { register, login, getUserProfile } = require("../../controllers/user-controller");

const withAuth = require("../../middleware/authentication")


// get user profile
router
  .route('/')
  .get(withAuth ,getUserProfile);

router 
  .route("/register")
  .post(register);

router
  .route("/login")
  .post(login);

module.exports = router;