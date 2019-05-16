// merging both api and html routes
// dont know why im doin this but was told its convetational and will help out in the future

const router = require("express").Router();
const path = require("path");
const apiRoutes = require("./api/user-routes");
const api = require("./api");
const html = require("./html");

router.use("/api", api);

router.use("/html", html);

router.use((req, res) => res.sendFile(path.join(__dirname, "../public/index.html")));

module.exports = router;