const conn = require('../config/mysql');


module.exports.inserUser = function(name, email, password){
    conn.query(
      "INSERT INTO user (name, email, password) VALUES (?, ?, ?);",
      [name, email, password],
      function (err, results, fields) {
        if (err) throw err;
        else console.log("Inserted " + results.affectedRows + " row(s).");
      }
    );
}
 