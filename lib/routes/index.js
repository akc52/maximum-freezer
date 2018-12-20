const express = require("express");
const Router = express.Router;
const router = Router();

router.use("/auth", require("./auth"));
router.use("/user", require("./user"));
router.use("/product", require("./product"));

module.exports = router;
