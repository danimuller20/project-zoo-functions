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
  const animalsFilterId = [];
  ids.forEach((idAnimal) => {
    animalsFilterId.push(...animals.filter(value => value.id === idAnimal));
  });
  return animalsFilterId;
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const findAnimal = animals.find(valueAnimal => valueAnimal.name === animal);
  return findAnimal.residents.every(ageAnimal => ageAnimal.age >= age);
}

function employeeByName(employeeName) {
  // seu código aqui
  const employeeFound = employees.find(
    employee => employee.firstName === employeeName || employee.lastName === employeeName);
  const employeeObj = { ...employeeFound };
  return employeeObj;
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const returnEmployee = personalInfo;
  returnEmployee.managers = associatedWith.managers;
  returnEmployee.responsibleFor = associatedWith.responsibleFor;
  return returnEmployee;
}

function isManager(id) {
  // seu código aqui
  let verify = false;
  employees.forEach((valueId) => {
    const verifyManagers = valueId.managers.some(value => value === id);
    if (verifyManagers) { verify = true; }
  });
  return verify;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const addObject = {id: id, firstName: firstName, lastName:lastName, managers: managers, responsibleFor: responsibleFor };
  employees.push(addObject);
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
