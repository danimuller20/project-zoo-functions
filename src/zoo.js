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

const { animals, employees } = data;

function animalsByIds(...ids) {
  // seu código aqui
  if (ids === undefined) { return []; }
  const species = [];
  (ids.map(currentValue => species.push(
    animals.find(actualValue => actualValue.id === currentValue))));
  return species;
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const specieNameAndAge = animals.filter(specieNameAndAge => specieNameAndAge.name === animal);
  return specieNameAndAge.residents.every(value2 => value2.age > age);
}

function employeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) {
    return {};
  }
  const employeeSearched = employees.find(currentEmployee =>
  currentEmployee.firstName === employeeName || currentEmployee.lastName === employeeName);
  return employeeSearched;
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  const ifIsManager = employees.find(ifIsManager =>  ifIsManager.managers.find(valuID => valuID === id));
  return ifIsManager;
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
