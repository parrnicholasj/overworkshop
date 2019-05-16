const router = require('express').Router()

const postRoutes = require("./htmlRoutes");

router.use("/posts", postRoutes);

module.exports = router;