const mysql = require('mysql');

const dbConfig = require('./config/dbConfig');
const fileReader = require('./data/fileReader');

const connection = mysql.createConnection({
  host: dbConfig.dbHost,
  port: dbConfig.dbPort,
  database: dbConfig.dbSchema,
  user: dbConfig.dbUser,
  password: dbConfig.dbPassword,
});

connection.connect((connectionError) => {
  if (connectionError) {
    throw connectionError;
  } else {
    const insertQuery = 'INSERT INTO ENTITY_DETAILS(name, description, parent) VALUES ?';
    connection.query(insertQuery, [fileReader.getEntityRecords], (
      queryExecutionError,
    ) => {
      if (queryExecutionError) {
        throw queryExecutionError;
      }
    });
  }
});
