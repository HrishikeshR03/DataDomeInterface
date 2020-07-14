const fs = require('fs');

const migrationDataJSON = fs.readFileSync('./data/migration_data.json');
const parsedJSON = JSON.parse(migrationDataJSON);
const { data } = parsedJSON;
const entityRecords = [];
data.forEach((entity) => {
  const record = [];
  record.push(entity.name);
  record.push(entity.description);
  record.push(entity.parent);
  entityRecords.push(record);
});

module.exports.getEntityRecords = entityRecords;
