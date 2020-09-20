
const conn = require("../config/mysql");


module.exports.create = function (req, res) {

    
    //  console.log(req.body);
    conn.query(
      "INSERT INTO complain (user_id, complain_text, state, district, city, place, pincode) VALUES (?, ?, ?, ?, ?, ?, ?);",
      [
        req.user.id,
        req.body.complain_text,
        req.body.state,
        req.body.district,
        req.body.city,
        req.body.place,
        req.body.pincode
      ],
      function (err, results, fields) {
        if (err) throw err;
        else console.log("Inserted " + results.affectedRows + " row(s).");
      }
    );
    return res.redirect("/users/profile");

};