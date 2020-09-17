const express = require("express");
const router = express.Router();
const homeController = require('../controller/home_controller');
const usersController = require("../controller/users_controller");



router.use('/users', require('./users'));
router.use('/', homeController.home);




module.exports = router;