const express = require('express');

const connection = require('./db/connection');
const query = require('./db/query');
const dbConfig = require('./config/dbConfig');
const transform = require('./domain/transform');
const appConfig = require('./config/appConfig');

const app = express();
const appPort = appConfig.port;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});

app.get(appConfig.hierarchyEndpoint, async (req, res) => {
  try {
    const fetchHierarchyQuery = 'SELECT name, description, parent FROM entity_details';
    const conn = await connection(dbConfig);
    const results = await query(conn, fetchHierarchyQuery);
    const hierarchyData = transform.getHierarchy(results);
    res.json(hierarchyData);
  } catch (error) {
    console.log(error);
  }
});

app.listen(appPort, () => console.log(`DataDome app is listening on port ${appPort}!`));
