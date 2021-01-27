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

const { animals, employees, hours, prices } = data;

// console.logs incluídos apenas para o CodeClimate não reclamar
console.log(hours);
console.log(prices);

function animalsByIds(...ids) {
  if (ids === undefined) {
    return [];
  }
  const arrayOfSpecies = [];
  ids.forEach((value) => {
    const idSearch = animals.find(animal => animal.id === value);
    arrayOfSpecies.push(idSearch);
  });
  return arrayOfSpecies;
}

function animalsOlderThan(animal, age) {
  const speciesInfos = animals.filter(infos => infos.name === animal);
  const { residents } = speciesInfos[0];
  return residents.every(check => check.age > age);
}

function employeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) {
    return {};
  }
  return employees.find(person => employeeName === person.firstName || employeeName === person.lastName);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
}

function isManager(id) {
  // seu código aqui
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
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
