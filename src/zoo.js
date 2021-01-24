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

const { animals, prices } = require('./data');
const { employees } = require('./data');
const data = require('./data');

function animalsByIds(...ids) {
  return !ids ? [] : animals.filter(animal => ids.includes(animal.id));
}

function animalsOlderThan(animal, age) {
  return (
    animals.find(specie => specie.name === animal).residents.every(dweller => dweller.age > age)
  );
}

function employeeByName(employeeName) {
  return !employeeName ? {} : (
    employees.find(person => person.firstName === employeeName || person.lastName === employeeName)
  );
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.filter(person => person.managers.includes(id)).length > 0;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = { ...employees[0] = { id, firstName, lastName, managers, responsibleFor } };
  return employees.push(newEmployee);
}

function animalCount(species) {
  const objAnimals = {};
  if (!species) {
    for (let index = 0; index < animals.length; index += 1) {
      const name = animals[index].name;
      const qnt = animals[index].residents.length;
      objAnimals[name] = qnt;
    }
    return objAnimals;
  } return animals.find(animal => animal.name === species).residents.length;
}

function entryCalculator(entrants) {
  if (!entrants) { return 0; }
  return Object.keys(entrants).reduce((total, key) => total + (entrants[key] * prices[key]), 0);
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
