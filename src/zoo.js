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
  return animals.filter(eachSpecies => ids.some(eachId => eachId === eachSpecies.id));
}

function animalsOlderThan(animal, age) {
  const residents = animals.find(eachSpecies => eachSpecies.name === animal).residents;
  return residents.every(resident => resident.age > age);
}

function employeeByName(employeeName) {
  let result = {};
  employees.find((eachEmployee) => {
    if (employeeName === eachEmployee.firstName) {
      result = eachEmployee;
    }
    if (employeeName === eachEmployee.lastName) {
      result = eachEmployee;
    }
  });
  return result;
}

function createEmployee(personalInfo, associatedWith) {
  const newObject = { ...personalInfo, ...associatedWith };
  return newObject;
}

function isManager(id) {
  return employees.some(eachEmployee => eachEmployee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newObject = { id, firstName, lastName, managers, responsibleFor };
  employees.push(newObject);
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
