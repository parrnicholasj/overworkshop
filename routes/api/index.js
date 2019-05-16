
const router = require('express').Router()

const postRoutes = require("./apiPostRoutes");

router.use("/posts", postRoutes);

module.exports = router;