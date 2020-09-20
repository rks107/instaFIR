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
    // readData();
    createTable();
  }
});
function createTable() {
  conn.query(
    `create table complain (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
user_id int,
complain_text VARCHAR(200) NOT NULL,
state varchar(20) not null,
district varchar(20) not null,
city varchar(20) not null,
place varchar(50) ,
reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
FOREIGN KEY (user_id) REFERENCES user(id)
);`,
    function (err, results) {
      if(err){
        console.log(err);
      }
      console.log(results);
    }
  );
}
function readData(){
		conn.query('SELECT * FROM user where email="rohit1071998@gmail.com"', 
			function (err, results, fields) {
				if (err) throw err;
        else console.log('Selected ' + results.length + ' row(s).');
        console.log("USER", fields);
        console.log(results[0].email);
        console.log(results[0].name);
				// for (i = 0; i < results.length; i++) {
				// 	console.log('Row: ' + JSON.stringify(results[i]));
				// }
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
