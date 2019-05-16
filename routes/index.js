// merging both api and html routes
// dont know why im doin this but was told its convetational and will help out in the future

const router = require("express").Router();
const path = require("path");
const apiRoutes = require("./api/user-routes");

router.use((req, res) => res.sendFile(path.join(__dirname, "../public/index.html")));

module.exports = router;