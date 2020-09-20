const conn = require("../config/mysql");


module.exports.officerSignUp = function(req, res){
    return res.render('officer_sign_up',{
        title: 'Officer Sign Up'
    })
};

module.exports.officerSignIn = function(req, res){
    if (req.isAuthenticated()) {
      return res.redirect("/users/officer-profile");
    } else {
      return res.render("officer_sign_in", {
        title: "Officer Sign In",
      });
    }
    
}

module.exports.officerCreate = function(req, res) {

    
    if(req.body.password == req.body.confirm_password){
        conn.query(
          "INSERT INTO user (name, email, password, officer) VALUES (?, ?, ?, 'yes');",
          [req.body.name, req.body.email, req.body.password],
          function (err, results, fields) {
            if (err) throw err;
            else console.log("Inserted " + results.affectedRows + " row(s).");
          }
        );
        return res.render('officer_sign_in',{
            title: 'Officer Sign In'
        });
    } else {
        return res.redirect("back");
    }

}

module.exports.CreateSession = function (req, res) {
  console.log("hi");
  return res.redirect("/users/officer-profile");
};

module.exports.officerProfile = function(req, res){

    // let complains;
    // console.log(req.user.id);
    conn.query(
      `SELECT * FROM complain where resolve = false`,
      function (err, results, fields) {
        //   console.log(complains);
          return res.render("officer_profile", {
            title: "User Profile",
            complains: results,
          });
        
      });

    // conn.query(
    //   `SELECT * FROM user where id = (?)`,
    //   [req.user.id],
    //   function (err, results, fields) {
    //     const temp = results[0];
    //     return res.render("officer_profile", {
    //       title: "User Profile",
    //       officer: temp,
    //       complains: complains,
    //     });
    //   }
    // );
}