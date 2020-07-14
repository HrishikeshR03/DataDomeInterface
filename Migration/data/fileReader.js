const fs = require("fs");

const migrationDataJSON = fs.readFileSync("./data/migration_data.json");
const parsedJSON = JSON.parse(migrationDataJSON);
const data = parsedJSON.data;
let entity_records = [];
data.forEach((entity) => {
  let record = [];
  record.push(entity.name);
  record.push(entity.description);
  record.push(entity.parent);
  entity_records.push(record);
});

module.exports.getEntityRecords = entity_records;
