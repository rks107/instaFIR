const express = require("express");
const router = express.Router();
const passport = require('passport');

const usersController = require('../controller/users_controller');

// console.log("I'm here-1");
router.get(
  "/profile",
  passport.checkAuthentication,
  usersController.profile
);
router.get("/sign-up", usersController.signUp);
router.get("/sign-in", usersController.signIn);
// logged Out
router.get('/log-out', usersController.destroySession);
router.post("/create", usersController.create);
router.post("/create-session", passport.authenticate(
    'local',
    {failureRedirect: '/users/sign-in'},
), usersController.createSession);



module.exports = router;