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

const { animals, employees, hours, prices } = data;

function animalsByIds(...ids) {
  const animalsFound = [];
  ids.forEach((idSearched) => {
    animalsFound.push(...animals.filter(animal => animal.id === idSearched));
  });
  return animalsFound;
}

function animalsOlderThan(animalName, age) {
  const animalFound = animals.find(animal => animal.name === animalName);
  return animalFound.residents.every(animalResident => animalResident.age > age);
}

function employeeByName(employeeName) {
  const employeeFound = employees.find((employee) => {
    return employee.firstName === employeeName || employee.lastName === employeeName;
  });
  const employeeObj = { ...employeeFound };
  return employeeObj;
}

function createEmployee(personalInfo, associatedWith) {
  const newEmployee = { ...personalInfo, ...associatedWith };
  return newEmployee;
}

function isManager(id) {
  let isManagerFound = false;
  employees.forEach((employee) => {
    let isManagerKey = employee.managers.some(managersIdList => managersIdList === id);
    if (isManagerKey) { isManagerFound = true; }
  });
  return isManagerFound;
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
