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
  // seu código aqui.
  if (!ids) {
    return [];
  }
  return animals.filter(element => ids.some(id => id === element.id));
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const species = animals.find(element => element.name === animal);
  return species.residents.every(element => element.age > age);
}

function employeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) {
    return {};
  }
  return employees.find(element =>
    (element.firstName === employeeName || element.lastName === employeeName));
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return Object.assign(personalInfo, associatedWith);
}

function isManager(id) {
  // seu código aqui
  return employees.some(employ => employ.managers.some(element => element === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  // seu código aqui
  if (!species) {
    const newObject = {};
    animals.forEach(element => (newObject[element.name] = element.residents.length));
    return newObject;
  }
  const specie = animals.find(animal => animal.name === species);
  return specie.residents.length;
}

function entryCalculator(entrants) {
  // seu código aqui
  if (!entrants || entrants === {}) {
    return 0;
  }
  let sum = 0;
  if (entrants.Adult) {
    sum += entrants.Adult * 49.99;
  }
  if (entrants.Child) {
    sum += entrants.Child * 20.99;
  }
  if (entrants.Senior) {
    sum += entrants.Senior * 24.99;
  }
  /*  Object.values(entrants).forEach((element, index) => {
    sum += element * Object.values(prices)[index];
  })*/
  return sum;
}
console.log(Object.values(prices));

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
