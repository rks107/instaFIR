const express = require("express");
const router = express.Router();

const usersController = require('../controller/users_controller');

// console.log("I'm here-1");
router.get("/sign-up", usersController.signUp);
router.get("/sign-in", usersController.signIn);
router.post("/create", usersController.create);



module.exports = router;