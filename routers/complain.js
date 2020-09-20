const express = require("express");
const router = express.Router();
const passport = require("passport");
const complainController = require('../controller/complain_controller');

router.get(
  "/complaincreate",
  passport.checkAuthentication,
  complainController.create
);

module.exports = router;