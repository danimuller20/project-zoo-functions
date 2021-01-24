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

const { animals, employees, prices } = require('./data');
const data = require('./data');

function animalsByIds(...ids) {
  return animals.filter(({ id }, index) => id === ids[index]);
}

function animalsOlderThan(animal, age) {
  const specie = animals.find(({ name }) => name === animal);
  return specie.residents.every(testAnimal => testAnimal.age >= age);
}

function employeeByName(employeeName) {
  return employeeName ? employees.find(({ firstName, lastName }) =>
  firstName === employeeName || lastName === employeeName) : {};
}

function createEmployee({ id, firstName, lastName }, { managers, responsibleFor }) {
  return { id, firstName, lastName, managers, responsibleFor };
}

function isManager(id) {
  return employees.some(({ managers }) => managers.some(managerid => managerid === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  if (!species) {
    const animalObj = {};
    animals.forEach(({ name, residents }) => (animalObj[name] = residents.length));
    return animalObj;
  }
  return animals.find(animal => animal.name === species).residents.length;
}

function entryCalculator(entrants) {
  return entrants ? Object.keys(entrants).reduce((sum, curr) =>
  sum += entrants[curr] * prices[curr], 0) : 0;
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
