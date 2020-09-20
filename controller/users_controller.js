const conn = require("../config/mysql");


module.exports.profile = function(req, res){

  conn.query(
    `SELECT * FROM complain where user_id = (?)`,
    [req.user.id],
    function (err, results, fields) {
      // console.log(results);

      return res.render("user_profile", {
        title: "User Profile",
        complains: results,
      });
    }
  );
  // res.end('<h1>USER PROFILE</h1>')
}
module.exports.signUp = function(req, res ){

  if (req.isAuthenticated()) {
    return res.redirect("/users/profile");
  }
    return res.render("user_sign_up", {
      title: "instFIR | Sign Up",
    });
}

module.exports.signIn = function (req, res) {
  if (req.isAuthenticated()) {
    return res.redirect("/users/profile");
  }

  return res.render("user_sign_in", {
    title: "instFIR | Sign In",
  });
};

// Log-Out
module.exports.destroySession = function(req,res) {
    req.logout();
    // req.flash('success', 'You have logged out');
    return res.redirect('/');
}

module.exports.create = function (req, res) {
  if(req.body.password == req.body.confirm_password){
    conn.query(
       "INSERT INTO user (name, email, password) VALUES (?, ?, ?);",
           [req.body.name, req.body.email, req.body.password],
        function (err, results, fields) {
        if (err) throw err;
        else console.log("Inserted " + results.affectedRows + " row(s).");
       }
      );
  return res.redirect("/");

  } else {
   return res.redirect("back");
  }
}

module.exports.createSession=function(req, res){
  return res.redirect('/users/profile');
};