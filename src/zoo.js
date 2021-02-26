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
const { animals } = require('./data');
const { employees } = require('./data');

function animalsByIds(...ids) {
  // seu código aqui
  const foundAnimals = ids.map((actualId) => {
    const foundAnimal = data.animals.find(animal => actualId === animal.id);
    return foundAnimal;
  });
  return foundAnimals;
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const animalObj = animals.find(({ name }) => name === animal);
  return animalObj.residents.every(elementAge => elementAge.age >= age);
}

function employeeByName(employeeName) {
  // seu código aqui
  const result = {};
  if (employeeName === undefined) {
    return result;
  }
  const findName = employees.find((element) => {
    if (element.firstName === employeeName || element.lastName === employeeName) {
      return element;
    }
    return false;
  });
  return findName;
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const newPerson = { ...personalInfo, ...associatedWith };
  return newPerson;
}

function isManager(id) {
  // seu código aqui
  return employees.some(manager => manager.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aquii
  const newEmployee = {id, firstName, lastName, managers, responsibleFor };
  employees.push(newEmployee);
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
