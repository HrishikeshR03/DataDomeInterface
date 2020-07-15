import hierarchyURL from './constants';

export default async function getData() {
  try {
    const response = await fetch(hierarchyURL);
    const data = await response.json();
    return data;
  } catch (error) {
    // TODO: remove this console.log with some logging to BE
    // eslint-disable-next-line no-console
    console.log(error);
    return new Error(error);
  }
}
