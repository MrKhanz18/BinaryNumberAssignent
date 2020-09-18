var express = require("express");
var router = express.Router();
const { withdrawl, deposit, depositById } = require("../controllers/balance");
const { getUserById } = require("../controllers/user");

router.param("userId", getUserById);
router.param("depositId", depositById);

router.post("/user/dashboard/deposit/:depositId", deposit);

router.post("/user/dashboard/withdrawl", withdrawl);

module.exports = router;
