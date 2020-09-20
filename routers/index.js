const express = require("express");
const router = express.Router();
const homeController = require('../controller/home_controller');
const complainController = require("../controller/complain_controller");
const passport = require("passport");


router.post(
  "/create-complain",
  complainController.create
);
router.use('/users', require('./users'));

router.use("/", homeController.home);





module.exports = router;