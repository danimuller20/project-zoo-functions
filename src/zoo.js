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

const { animals, employees } = data; // destructure

function animalsByIds(...ids) {
  // seu código aqui
  return animals.filter(value => ids.includes(value.id));
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const animalFound = animals.find(value => value.name === animal);
  return animalFound.residents.every(ageOfAnimal => ageOfAnimal.age >= age);
}

function employeeByName(employeeName) {
  // seu código aqui
  const employeeObject = employees.find(value => value.firstName === employeeName || value.lastName === employeeName )
  if (employeeObject === undefined) {
    return {};
  } return employeeObject;
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
