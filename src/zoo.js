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
  return animals.filter(element =>
  ids.some(elementParameter => element.id === elementParameter));
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  return animals.some(currentAnimal =>
    currentAnimal.name === animal &&
    currentAnimal.residents.every(currentResident => currentResident.age >= age));
}

function employeeByName(employeeName) {
  // seu código aqui
  if (employeeName !== undefined) {
    return employees.find(currentEmployee =>
    employeeName === currentEmployee.firstName || employeeName === currentEmployee.lastName);
  }
  return { };
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const { id } = personalInfo;
  const { firstName } = personalInfo;
  const { lastName } = personalInfo;
  const { managers } = associatedWith;
  const { responsibleFor } = associatedWith;
  return {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
}

function isManager(id) {
  // seu código aqui
  const searchManagers = employees.reduce((acc, value) =>
  acc.concat(value.managers), []);
  return searchManagers.some((value => value === id));
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
