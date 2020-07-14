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
  console.log('Time:', Date.now());
  next();
});

app.get(appConfig.hierarchyEndpoint, async (req, res) => {
  const conn = await connection(dbConfig).catch(console.log);
  const fetchHierarchyQuery = 'SELECT name, description, parent FROM entity_details';
  const results = await query(conn, fetchHierarchyQuery).catch(console.log);
  let hierarchyData = [];
  hierarchyData = transform.getHierarchy(results);
  res.json(hierarchyData);
});

app.listen(appPort, () => console.log(`DataDome app is listening on port ${appPort}!`));
