const conn = require("../config/mysql");


module.exports.home = function(req, res){

  // conn.query(
  //   `SELECT * FROM complain where user_id = (?)`,
  //   [req.user.id],
  //   function (err, results, fields) {
  //     // console.log(results);

  //     return res.render("home", {
  //       title: "Home",
  //       complains: results,
  //     });
  //   }
  // );
  return res.render("home", {
        title: "Home"
      });
  
};
