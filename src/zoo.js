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

// commit inicial

const { animals, employees } = require('./data');

function animalsByIds(...ids) {
  // seu código aqui
  return animals.filter(animal => ids.find(id => id === animal.id));
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  return animals.find(anml => anml.name === animal).residents.every(anim => anim.age >= age);
}

function employeeByName(employeeName) {
  // seu código aqui
  const employee = employees
  .find(mply => employeeName === mply.firstName || employeeName === mply.lastName);
  const employeeObj = { ...employee };
  return employeeObj;
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const employeeObj = {};
  employeeObj.id = personalInfo.id;
  employeeObj.firstName = personalInfo.firstName;
  employeeObj.lastName = personalInfo.lastName;
  employeeObj.managers = associatedWith.managers;
  employeeObj.responsibleFor = associatedWith.responsibleFor;

  return employeeObj;
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
