const mysql = require("mysql");

const dbConfig = require("./config/dbConfig");
const fileReader = require("./data/fileReader");

const connection = mysql.createConnection({
  host: dbConfig.db_host,
  port: dbConfig.db_port,
  database: dbConfig.db_schema,
  user: dbConfig.db_user,
  password: dbConfig.db_password,
});

connection.connect(function (err) {
  if (err) {
    throw err;
  } else {
    let insert_query =
      "INSERT INTO ENTITY_DETAILS(name, description, parent) VALUES ?";
    connection.query(insert_query, [fileReader.getEntityRecords], function (
      err
    ) {
      if (err) {
        throw err;
      }
    });
  }
});
