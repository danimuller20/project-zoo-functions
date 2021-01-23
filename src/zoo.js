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

const { animals } = data;
const { employees } = data;
// const { hours } = data;
// const { prices } = data;

function animalsByIds(...ids) {
  return ids.map(info => animals.find(id => info === id.id));
}

const findAnimals = animal => animals.find(name => name.name === animal);

function animalsOlderThan(animal, age) {
  return findAnimals(animal).residents.every(ages => ages.age > age);
}

const employerName = first => employees.find(firstName => firstName.firstName === first);
const employerLastName = last => employees.find(lastName => lastName.lastName === last);

function employeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return employerName(employeeName) || employerLastName(employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return { 
  ...personalInfo, 
  ...associatedWith,
  };
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
