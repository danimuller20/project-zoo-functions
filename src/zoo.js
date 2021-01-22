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
  const receivedIds = [...ids];
  const animalsArray = [];
  receivedIds.forEach((id) => {
    animals.forEach((specie) => {
      if (id === specie.id) {
        animalsArray.push(specie);
      }
    });
  });
  return animalsArray;
}

function animalsOlderThan(animal, age) {
  const specieName = animals.find(specie => specie.name === animal);
  const animalsValidadeAge = specieName.residents.every(item => item.age >= age);
  return animalsValidadeAge;
}

function employeeByName(name = {}) {
  const search = employees.find(employee =>
  employee.firstName === name || employee.lastName === name);
  return search === undefined ? {} : search;
}

function createEmployee(personalInfo, associatedWith) {
  const newEmployee = Object.assign({}, personalInfo, associatedWith);
  return newEmployee;
}

function isManager(id) {
  return employees.some(employee => employee.managers
    .some(managerId => managerId === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return employees.push(newEmployee);
}

function animalCount(specie) {
  const objCount = animals.reduce((previousValue, currentValue) => {
    previousValue[currentValue.name] = currentValue.residents.length;
    return previousValue;
  }, {});
  const search = animals.find(animal => animal.name === specie);
  return search === undefined ? objCount : search.residents.length;
}

function entryCalculator(entrants = 0) {
  let result = 0;
  const getPrices = Object.entries(prices);
  const getEntrances = Object.entries(entrants);
  getEntrances.forEach((typeEntry) => {
    getPrices.forEach((price) => {
      if (typeEntry[0] === price[0]) {
        result += (typeEntry[1] * price[1]);
      }
    });
  });
  return result;
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
