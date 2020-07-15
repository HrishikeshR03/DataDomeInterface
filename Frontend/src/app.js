import getData from './utils';

import './resources/css/styles.css';
import './resources/css/chart.css';
import './resources/css/modal.css';

const getLink = (name) => `<a href="#popupContainer">${name}</a>`;

/**
 * Generates the HTML template for the entity hierarchy recursively.
 *
 * @param {array} entity - Entity array with children.
 * @returns {string} - HTML Template for the entity hierarchy
 */
function createHierarchyMarkup(entity) {
  return entity.children.length
    ? `<li>
         ${getLink(entity.name)}
         <ul>
           ${entity.children.map((childEntity) => createHierarchyMarkup(childEntity)).join('')}
         </ul>
       </li>`
    : `<li>
         ${getLink(entity.name)}
       </li>`;
}

/**
 * Returns the description of entity.
 *
 * @param {object} entity - Hierarchy entity object
 * @param {string} clickedEntityName - Entity name
 *
 * @returns {string} Description of entity name.
 */
function getDescription(entity, clickedEntityName) {
  if (entity.name === clickedEntityName) {
    return entity.description;
  }
  if (entity.children.length !== 0) {
    let description = '';
    for (let i = 0, len = entity.children.length; i < len; i += 1) {
      const childNode = entity.children[i];
      if (childNode.name === clickedEntityName) {
        description = childNode.description;
        break;
      } else if (childNode.name !== clickedEntityName && childNode.children.length !== 0) {
        description = getDescription(childNode, clickedEntityName);
      }
    }
    return description;
  }
  return null;
}

/**
 * Build the HTML template.
 * Adds click event handlers on all entity nodes.
 *
 * @param {oject} hierarchyData - Hierarchy entity data.
 */
function buildHierarchyMarkup(hierarchyData) {
  const hierarchyMarkup = `<ul>${createHierarchyMarkup(hierarchyData)}</ul>`;
  const hierarchySectionEl = document.getElementById('hierarchySection');
  const popupHeaderEl = document.getElementById('entityName');
  const popupDescriptionEl = document.getElementById('entityDescription');

  hierarchySectionEl.innerHTML = hierarchyMarkup;
  hierarchySectionEl.querySelectorAll('a').forEach((el) => el.addEventListener('click', (event) => {
    const content = event.target.innerHTML;
    popupHeaderEl.innerHTML = content;
    popupDescriptionEl.innerHTML = getDescription(hierarchyData, content);
  }));
}

/**
 * Get data from API and render chart
 */
getData()
  .then((response) => {
    // TODO: uncomment the below line and remove the next line
    // const hierarchyData = response && response.data && response.data[0];
    const hierarchyData = response && response[0];
    if (hierarchyData) {
      buildHierarchyMarkup(hierarchyData);
    } else {
      throw new Error('no hierarchy data');
    }
  })
  .catch((error) => {
    throw new Error('Error while getting hierarchy data', error);
  });
