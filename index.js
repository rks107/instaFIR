const express = require('express');
const path = require("path");
const app = express();
const port = 8000;
const expressLayouts = require("express-ejs-layouts");
// const db = require('./config/mysql');

const sassMiddleware = require("node-sass-middleware");


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



// use express router
app.use('/',require('./routers'));

app.listen(port, function (err) {
  if (err) {
    console.log(`Error in runing surver: ${err}`);
    return;
  }

  console.log(`Server is runing on port: ${port}`);
});