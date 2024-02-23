const express = require("express");
const router = express.Router();


router.use("", require("./users/auth"));
router.use("", require("./product/category"));
router.use("", require("./product/product"));

module.exports = router;