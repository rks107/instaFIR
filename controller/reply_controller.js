
const conn = require("../config/mysql");


module.exports.reply = function(req, res){
    console.log(req.params.id);

    conn.query(
      "UPDATE complain set resolve = (?) , reply = (?) WHERE id =(?);",
      [true, req.body.reply, req.params.id],
      function (err, results, fields) {
        if (err) throw err;
        else console.log("Inserted " + results.affectedRows + " row(s).");
      }
    );

    return res.redirect("/users/officer-profile");
}