const express = require("express");
const router = express.Router();
const passport = require('passport');

const usersController = require('../controller/users_controller');

const complainController = require("../controller/complain_controller");
const officerController = require("../controller/officer_controller");

// router.get(
//   "/officer-create-session",
//   officerController.CreateSession
// );
// router.post(
//   "/officer-create-session",
//   passport.authenticate("local", { failureRedirect: "/users/officer-sign-in" }),
//   officerController.CreateSession
// );

router.post("/officer-create", officerController.officerCreate);

router.get("/officer-sign-up", officerController.officerSignUp);

router.get(
  "/officer-profile",
  passport.checkAuthentication,
  officerController.officerProfile
);

router.get("/officer-sign-in", officerController.officerSignIn);
router.post(
  "/officer-create-session",
  passport.authenticate("local", { failureRedirect: "/users/officer-sign-in" }),
  officerController.CreateSession
);

// passport.authenticate("local", { failureRedirect: "/users/officer-sign-in" }),


router.get(
  "/create-complain",
  passport.checkAuthentication,
  complainController.create
);

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