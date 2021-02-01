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

const { employees } = require('./data');

const data = require('./data');

const { animals } = data;

function animalsByIds(...ids) {
  return animals.filter(animal => ids.some(id => id === animal.id));
}

function animalsOlderThan(animal, minAge) {
  return animals
    .find(({ name }) => name === animal).residents
    .every(({ age }) => age >= minAge);
}

function employeeByName(employeeName) {
  return employees
    .find(({ firstName, lastName }) => employeeName === firstName || lastName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // utilizar o some para verificar se algum id corresponde
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const createANewEmploye = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  employees.push(createANewEmploye);
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
