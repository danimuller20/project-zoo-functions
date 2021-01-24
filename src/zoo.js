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
    animals.find(specie => specie.name === animal).residents.every(dweller => dweller.age > age));
}

function employeeByName(employeeName) {
  return !employeeName ? {} : (
    employees.find(person => `${person.firstName} ${person.lastName}`.includes(employeeName)));
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.filter(person => person.managers.includes(id)).length > 0;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  const objAnimals = {};
  animals.forEach(animal => (objAnimals[animal.name] = animal.residents.length));
  return !species ? objAnimals : animals.find(animal => animal.name === species).residents.length;
}

function entryCalculator(entrants) {
  return !entrants ? 0 : Object.keys(entrants)
    .reduce((total, key) => total + (entrants[key] * prices[key]), 0);
}

function animalMap(options) {
  const obj = { NE: [], NW: [], SE: [], SW: [] };
  // const selectOptions = { includeNames, sex, sorted };
  const funcOptions = {
    showAll: function () {
      Object.keys(obj).forEach(locate => (obj[locate] =
    [...animals.filter(animal => animal.location === locate).map(animalName => animalName.name)]));
    },
  };
  switch (options) {
    case undefined: funcOptions.showAll();
  }

  return obj;
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
