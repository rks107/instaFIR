const express = require("express");
const router = express.Router();

const usersController = require('../controller/users_controller.js');

console.log("I'm here-1");
router.get("/sign-up", usersController.signUp);



module.exports = router;