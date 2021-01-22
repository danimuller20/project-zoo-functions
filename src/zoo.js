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
  const newArr = [];
  ids.forEach((id) => {
    const animalsIds = animals.find(animal => id === animal.id);
    newArr.push(animalsIds);
  });
  return newArr;
}

function animalsOlderThan(animal, age) {
  const animalObj = animals.find(value => animal === value.name);
  return animalObj.residents.every(specie => specie.age >= age);
}

function employeeByName(employeeName) {
  const newObj = {};
  const employee = employees.find(value => value.firstName === employeeName ||
    employee.lastName === employeeName);
  if (employee === undefined) {
    return newObj;
  }
  return employee;
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
