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

function animalsByIds(...ids) {
  // seu código aqui
  return data.animals.filter(animal => ids.some(id => animal.id === id));
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const especie = data.animals.find(specie => specie.name === animal);
  return especie.residents.every(obj => obj.age > age);
}

function employeeByName(name) {
  // seu código aqui
  let employee = data.employees.find(e => e.firstName === name || employ.lastName === name);
  if (!name) employee = {};
  return employee;
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;
  return { id, firstName, lastName, managers, responsibleFor, };
}

function isManager(id) {
  // seu código aqui
  return data.employees.some(employ => employ.managers.some(idEmploy => idEmploy === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  data.employees.push({ id, firstName, lastName, managers, responsibleFor, });
}

function createNumberAnimals() {
  return data.animals.reduce((acc, animal) => {
    acc[animal.name] = animal.residents.length;
    return acc;
  }, {});
}

function animalCount(species) {
  // seu código aqui
  const animalNumber = createNumberAnimals();
  if (!species) {
    return animalNumber;
  }
  return animalNumber[species];
}

function entryCalculator(entrants = {}) {
  // seu código aqui
  if (Object.keys(entrants).length < 1) return 0;
  return Object.keys(entrants).reduce((acc, age) => {
    acc += data.prices[age] * entrants[age];
    return acc;
  }, 0);
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
