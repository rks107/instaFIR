const conn = require("../config/mysql");

module.exports.signUp = function(req, res ){
    console.log(req.url);
    return res.render("user_sign_up", {
      title: "instFIR | Sign Up",
    });
}

module.exports.signIn = function (req, res) {
  console.log(req.url);
  return res.render("user_sign_in", {
    title: "instFIR | Sign In",
  });
};

module.exports.create = function (req, res) {
conn.query(
  "INSERT INTO user (name, email, password) VALUES (?, ?, ?);",
  [req.body.name, req.body.email, req.body.password],
  function (err, results, fields) {
    if (err) throw err;
    else console.log("Inserted " + results.affectedRows + " row(s).");
  }
);
  return res.redirect("/users/sign-in");
};