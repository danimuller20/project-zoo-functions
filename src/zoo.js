/*
eslint no-unused-vars: [
  "error",
  {
    "args": "none",
    "vars": "local",
    "varsIgnorePattern": "data"
  }
]
*/

const { animals, employees, prices, hours } = require('./data');
const data = require('./data');

function animalsByIds(...ids) {
  const emptyArray = [];
  ids.forEach(newID => emptyArray.push(animals.find(parametro => parametro.id === newID)));
  return emptyArray;
}

function animalsOlderThan(animal, age) {
  const especies = animals.find(especie =>
    especie.name === animal).residents.every(resident =>
    resident.age >= age);
  return especies;
}

function employeeByName(employeeName = false) {
  let name = {};
  if (!employeeName) return name;
  name = employees.find(employee =>
    employee.firstName === employeeName || employee.lastName === employeeName);
  return name;
}

function createEmployee(personalInfo, associatedWith) {
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

function isManager(id) {
  return employees.some(({ managers }) => managers.includes(id));
}

function addEmployee(id = '', firstName = '', lastName = '', managers = [], responsibleFor = []) {
  const personalInfo = { id, firstName, lastName };
  const associatedWith = { managers, responsibleFor };
  const employee = createEmployee(personalInfo, associatedWith);
  employees.push(employee);
}

function animalCount(species) {
  const result = animals.reduce((acc, { name, residents }) => {
    acc[name] = residents.length;
    return acc;
  }, {});
  if (species) return result[species];
  return result;
}

function entryCalculator(entrants) {
  // if (entrants === undefined || Object.keys(entrants).length === 0) return 0;
  // return Object.entries(entrants)
  //     .reduce((acc, [category, quantity]) => {
  //       return acc + prices[category] * quantity;
  //     }, 0);
}

function animalMap(options) {

}

function schedule(dayName) {
  const result = Object.entries(hours).reduce((acc, [key, val]) => {
    const { open, close } = val;
    acc[key] = close - open > 0 ? `Open from ${open}am until ${close - 12}pm` : 'CLOSED';
    return acc;
  }, {});
  if (dayName !== undefined) return { [dayName]: result[dayName] };
  return result;
}

function employeeID(id) {
  return employees.find(employee => employee.id === id);
}

function oldestFromFirstSpecies(id) {
  const employee = employeeID(id);
  const [specie] = animalsByIds(employee.responsibleFor[0]);
  const oldest = specie.residents.reduce((acc, cur) =>
    acc.age > cur.age ? acc : cur)
    return Object.values(oldest)  
}

function increasePrices(percentage) {

}

function employeeCoverage(idOrName) {

}

module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  animalMap,
  animalsByIds,
  employeeByName,
  employeeCoverage,
  addEmployee,
  isManager,
  animalsOlderThan,
  oldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
