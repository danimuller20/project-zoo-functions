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

// assign to a const the required data in data.js
const data = require('./data');

// get animals key in data object
const { animals, employees } = data;

// animalsByIds grabs the required ids as spread array
// animals array is then filtered by :
function animalsByIds(...ids) {
  return animals.filter(animal => ids.find(element => element === animal.id));
}

function animalsOlderThan(animal, age) {
  const foundAnimal = animals.find(animalIndex => animalIndex.name === animal);
  return !foundAnimal.residents.some(residentsIndex => residentsIndex.age < age);
}

function employeeByName(employeeName) {
  const evaluateName = employeeIndex => employeeIndex.firstName === `${employeeName}` || employeeIndex.lastName === `${employeeName}`;
  const returnedSearch = employees.find(employeeIndex => evaluateName(employeeIndex));
  const toReturn = (returnedSearch === undefined) ? {} : returnedSearch;
  return toReturn;
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
}

function isManager(id) {
  // seu código aqui
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
