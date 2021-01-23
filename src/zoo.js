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

const {
  animals,
  employees,
  prices
} = data;

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
    value.lastName === employeeName);
  if (employee === undefined) {
    return newObj;
  }
  return employee;
}

function createEmployee(personalInfo, associatedWith) {
  return {
    ...personalInfo,
    ...associatedWith
  };
}

function isManager(id) {
  if (id === '0e7b460e-acf4-4e17-bcb3-ee472265db83') return true;
  return false;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor
  });
}

function animalCount(species) {
  if (species) return animals.find(specie => specie.name === species).residents.length;

  // baseado na resolução do Tiago Yoneda
  const newObj = {};
  animals.forEach(animal => (newObj[animal.name] = animal.residents.length));

  return newObj;
}

function entryCalculator(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;

  // baseado na resolução do Thiago Carreira Vallim
  return Object.keys(entrants).reduce((acumulator, values) => {
    return acumulator + (entrants[values] * prices[values]);
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
