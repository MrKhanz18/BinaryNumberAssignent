var express = require("express");
var router = express.Router();
const {withdrawl, deposit} = require("../controllers/balance");
const { getUserById } = require("../controllers/user")

router.param("userId", getUserById);

router.post("/user/dashboard/deposit",deposit);

router.post("/user/dashboard/withdrawl",withdrawl)

module.exports = router;