const mysql = require("mysql");

var config = {
  host: "instafir.mysql.database.azure.com",
  user: "instafir@instafir",
  password: "Rohit@123",
  database: "instafir",
  port: 3306,
  ssl: true,
};

const conn = new mysql.createConnection(config);

conn.connect(function (err) {
  if (err) {
    console.log("!!! Cannot connect !!! Error:");
    throw err;
  } else {
    console.log("Connection established.");
  }
});

module.exports = conn;