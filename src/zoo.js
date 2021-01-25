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

const { animals, employees } = require('./data');
const data = require('./data');

function animalsByIds(...ids) {
  // seu código aqui
  if (!ids) { return []; }
  const animalSpecies = [];
  (ids.forEach(value => animalSpecies.push(animals
    .find(element => element.id === value))));
  return animalSpecies;
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const result = (animals.find(element => element.name === animal)
  .residents.every(value => value.age >= age));
  return result;
}

function employeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) { return {}; }
  return (employees.find(element => element
    .firstName === employeeName || element.lastName === employeeName));
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  const result = (employees.some(element => element
    .managers.some(value => value === id)));
  return result;
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function animalCount(species) {
  // seu código aqui
}

function entryCalculator(entrants) {
  // seu código aqui
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
