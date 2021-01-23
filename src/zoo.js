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

function animalsByIds(id, ids) {
  return animals.filter(animal => animal.id === id || animal.id === ids);
}

function animalsOlderThan(animal, age) {
  const residents = animals.find(animalIterated => animalIterated.name === animal).residents;
  return residents.every(resident => resident.age > age);
}

function employeeByName(employeName) {
  if (!employeName) return {};
  return employees.find(name => name.firstName === employeName || name.lastName === employeName);
}

function createEmployee(personalInfo, associatedWith) {
  const ployee = { ...personalInfo, ...associatedWith };
  return ployee;
}

function isManager(id) {
  return employees.some(employee => employee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function animalCount(species) {
  if (!species) {
    return animals.reduce((acc, crr) => {
      acc[crr.name] = crr.residents.length;
      return acc;
    });
  }
  return animals.find(animal => animal.name === species).residents.length;
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
