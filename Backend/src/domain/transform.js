function getHierarchyData(records) {
  const hierarchyData = [];
  const mappedRecords = {};
  let recordsElem;
  let mappedElem;

  for (let i = 0, len = records.length; i < len; i++) {
    recordsElem = records[i];
    mappedRecords[recordsElem.name] = recordsElem;
    mappedRecords[recordsElem.name].children = [];
  }

  for (const name in mappedRecords) {
    if (mappedRecords.hasOwnProperty(name)) {
      mappedElem = mappedRecords[name];

      if (mappedElem.parent) {
        mappedRecords[mappedElem.parent].children.push(mappedElem);
      } else {
        hierarchyData.push(mappedElem);
      }
    }
  }
  return hierarchyData;
}

module.exports.getHierarchy = getHierarchyData;
