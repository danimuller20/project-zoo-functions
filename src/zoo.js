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
  if (ids.length === 0) {
    return [];
  }
  return animals.filter((animal, index) => animal.id === ids[index]);
}

function animalsOlderThan(animal, age) {
  const animalIndex = animals.some(animalResid => animalResid.residents
    .every(resident => animalResid.name === animal && resident.age > age));
  return animalIndex;
}

function employeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  const compare = employees.find(employ =>
    employ.firstName === employeeName || employ.lastName === employeeName);
  return compare;
}

function createEmployee(personalInfo, associatedWith) {
  const spread = { ...personalInfo, ...associatedWith };
  return spread;
}

function isManager(id) {
  const comparar = employees.some(employee =>
    employee.managers.some(manager => manager === id));
  return comparar;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const objEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  employees.push(objEmployee);
}

function animalCount(species) {
 if (species === undefined) {
   const objVazio = {};
   return objVazio;
 }
 const contador = animals.find(animal => animal.name === species).residents.length;
 return contador;
}

function entryCalculator(entrants) {
  objVazio = {};
  if (entrants === objVazio || !entrants) {
    const zero = 0;
    return zero;
  }
  return Object.keys(entrants).reduce((total, num) => total + (entrants[num] * prices[num]), 0);
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
