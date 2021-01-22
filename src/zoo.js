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

const data = require('./data');

const { animals, employees, hours, prices } = data;

function animalsByIds(...ids) {
  const animalsIds = [...ids];
  return animals.filter( animal => animalsIds.includes(animal.id));
}

function animalsOlderThan(animal, age) {
  const animalObject = animals.find(species => species.name === animal);
  return animalObject.residents.every(resident => resident.age > age);
}

function employeeByName(employeeName) {
  return employees.find(employee => employeeName === employee.firstName || employeeName === employee.lastName);
}

function createEmployee(personalInfo, associatedWith) {
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;
  return { id, firstName, lastName, managers, responsibleFor };
}

function isManager(id) {
  const managersIds = employees.map(employee => employee.managers);
  return managersIds.some(array => array.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push(createEmployee({ id, firstName, lastName }, { managers, responsibleFor }));
}

function animalCount(species) {
  // seu código aqui
}

function entryCalculator(entrants = {}) {
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  return ((Adult * prices.Adult) + (Child * prices.Child) + (Senior * prices.Senior));
}

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  // seu código aqui
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
}

function employeeCoverage(idOrName) {
  // seu código aqui
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
