const express = require('express');
const cookiePrser = require('cookie-parser');
const path = require("path");
const app = express();
const port = 8000;
const expressLayouts = require("express-ejs-layouts");
const db = require('./config/mysql');

// Used for session cookies
const session = require('express-session');
const passport = require('passport');
const passportLocal = require("./config/passport-local-strategy")

const sassMiddleware = require("node-sass-middleware");
app.use(cookiePrser());

// SASS
app.use(
  sassMiddleware({
    src: "./assets/scss",
    dest: "./assets/css",
    debug: false,
    outputStyle: "expanded",
    prefix: "/css",
  })
);

// middleware
app.use(express.urlencoded({ extended: true }));

app.use(express.static('./assets'));


app.use(expressLayouts);
// extract style and scripts from sub-pages into layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);
//EJS View Engine setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(
  session({
    name: "instaFIR",
    // TODO change the secret before deployment in production mode
    secret: 'somethingblah',
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 1000 * 60 * 100,
    },
    // store: new MongoStore(
    //   {
    //     mongooseConnection: db,
    //     autoRemove: "disabled",
    //   },
    //   function (err) {
    //     console.log(err || "connect-mongodb setup ok");
    //   }
    // ),
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.checkAuthenticationUser);

// use express router
app.use('/',require('./routers'));

app.listen(port, function (err) {
  if (err) {
    console.log(`Error in runing surver: ${err}`);
    return;
  }

  console.log(`Server is runing on port: ${port}`);
});