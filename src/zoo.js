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
const { animals, employees } = require('./data');


function animalsByIds(...ids) {
  return animals.filter(element => ids.includes(element.id));
}

function animalsOlderThan(animal, age) {
  const filteredAnimals = animals.filter(animalFiltered => animalFiltered.name === animal);
  const [filteredSpecie] = filteredAnimals;
  return filteredSpecie.residents.every(filteredAnimal => filteredAnimal.age >= age);
}

function employeeByName(employeeName) {
  if (!employeeName) return {};
  const filteredEmployee = employees.filter(employee =>
    (employee.firstName === employeeName || employee.lastName === employeeName));
  const [employeeFound] = filteredEmployee;
  return employeeFound;
}

function createEmployee(personalInfo, associatedWith) {
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;
  return { id, firstName, lastName, managers, responsibleFor };
}

function isManager(id) {
  return employees.some(employee => employee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push( { id, firstName, lastName, managers, responsibleFor } );
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
