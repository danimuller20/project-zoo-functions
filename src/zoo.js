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

function animalsByIds(ids) {
  return data.animals.filter(animal => ids.some(id => animal.id === id));
}

function animalsOlderThan(animal, age) {
  const result = data.animals.find(especie => especie.name === animal);
  return result.residents.every( residente => residente.age > age);
  
}

function employeeByName(employeeName) {
  if (!employeeName) return {};
  const result = data.employees.find(element => element.firstName === employeeName || element.lastName === employeeName);
  return result;
}
employeeByName('Nigel');
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
// Playground functions foi legal né? Pra mim, foi.
// SXNzbyBuw6NvIMOpIHVtYSBzZW5oYS4=
// 70 61 73 74 65 62 69 6e 2e 63 6f 6d 2f 6b 58 39 79 36 57 55 61
