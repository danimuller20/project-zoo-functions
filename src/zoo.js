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

const { employees, prices } = require('./data');

const data = require('./data');

const { animals } = data;

function animalsByIds(...ids) {
  return animals.filter(animal => ids.some(id => id === animal.id));
}

function animalsOlderThan(animal, minAge) {
  return animals
    .find(({ name }) => name === animal).residents
    .every(({ age }) => age >= minAge);
}

function employeeByName(employeeName) {
  return employees
    .find(({ firstName, lastName }) => employeeName === firstName || lastName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some(({ managers }) => managers.some(managerId => managerId === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const createANewEmploye = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  employees.push(createANewEmploye);
}

function animalCount(species) {
  const allAnimals = animals.reduce((previousAnimalObject, currentAnimals) => {
    previousAnimalObject[currentAnimals.name] = currentAnimals.residents.length;
    return previousAnimalObject;
  }, {});
  if (species) {
    return allAnimals[species];
  }
  return allAnimals;
}

function entryCalculator(entrants) {
  if (entrants) {
    return Object.keys(entrants).reduce((soma, key) => (soma += prices[key] * entrants[key]), 0);
  }
  return 0;
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
