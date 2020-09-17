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
    // queryDatabase();
    readData();
  }
});
function readData(){
		conn.query('SELECT * FROM user', 
			function (err, results, fields) {
				if (err) throw err;
				else console.log('Selected ' + results.length + ' row(s).');
				for (i = 0; i < results.length; i++) {
					console.log('Row: ' + JSON.stringify(results[i]));
				}
				console.log('Done.');
			})
	   conn.end(
		   function (err) { 
				if (err) throw err;
				else  console.log('Closing connection.') 
		});
};

function queryDatabase() {
  conn.query("DROP TABLE IF EXISTS inventory;", function (
    err,
    results,
    fields
  ) {
    if (err) throw err;
    console.log("Dropped inventory table if existed.");
  });
  conn.query(
    "CREATE TABLE user (id serial PRIMARY KEY, user_id VARCHAR(50), password VARCHAR(20));",
    function (err, results, fields) {
      if (err) throw err;
      console.log("Created inventory table.");
    }
  );
  conn.query(
    "INSERT INTO user (user_id, password) VALUES (?, ?);",
    ["rohit", "123"],
    function (err, results, fields) {
      if (err) throw err;
      else console.log("Inserted " + results.affectedRows + " row(s).");
    }
  );
  conn.query(
    "INSERT INTO user (user_id, password) VALUES (?, ?);",
    ["rks", "123"],
    function (err, results, fields) {
      if (err) throw err;
      console.log("Inserted " + results.affectedRows + " row(s).");
    }
  );
  conn.end(function (err) {
    if (err) throw err;
    else console.log("Done.");
  });
}
