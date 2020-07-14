const axios = require('axios');

const fetchHierarchyUrl = 'http://localhost:3000/hierarchy';
let hierarchyData = [];
axios.get(fetchHierarchyUrl).then((response) => {
  hierarchyData = response.data;
  if (hierarchyData != null) {
    buildHierarchyMarkup();
  }
}).catch(console.log);

function getChildEntityMarkup(name) {
  return `<li><a href="#popup1">${name}</a></li>`;
}

function getParentEntityMarkup(name) {
  return `<li><a href="#popup1">${name}</a>`;
}

function createHierarchyMarkup(entity) {
  let entityMarkup = '';
  if (entity.children.length != 0) {
    entityMarkup += getParentEntityMarkup(entity.name);
    let childMarkup = '<ul>';
    for (let i = 0; i < entity.children.length; i++) {
      childMarkup += createHierarchyMarkup(entity.children[i]);
    }
    childMarkup += '</ul>';
    return `${entityMarkup + childMarkup}</li>`;
  }
  return getChildEntityMarkup(entity.name);
}

function buildHierarchyMarkup() {
  const hierarchyMarkup = `<ul>${createHierarchyMarkup(hierarchyData[0])}</ul>`;

  const hierarchySection = document.getElementById('hierarchySection');
  hierarchySection.innerHTML = hierarchyMarkup;
  const elements = document.getElementsByTagName('a');
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener('click', function () {
      document.getElementById('_entityName').innerHTML = this.innerHTML;
      document.getElementById('_entityDescription').innerHTML = findDescription(
        this.innerHTML,
      );
    });
  }
}

function getDescription(entity, clickedEntityName) {
  if (entity.name === clickedEntityName) {
    return entity.description;
  } if (entity.children.length != 0) {
    let description = '';
    for (let i = 0, len = entity.children.length; i < len; i++) {
      const childNode = entity.children[i];
      if (childNode.name === clickedEntityName) {
        description = childNode.description;
        break;
      } else if (
        childNode.name != clickedEntityName
        && childNode.children.length != 0
      ) {
        description = getDescription(childNode, clickedEntityName);
      }
    }
    return description;
  }
}

function findDescription(clickedEntityName) {
  return getDescription(hierarchyData[0], clickedEntityName);
}
