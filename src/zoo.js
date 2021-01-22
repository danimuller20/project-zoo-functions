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
  // seu código aqui
  const idReturn = [];
  animals.forEach((idAnimals) => {
    ids.forEach((searchAnimals) => {
      if (searchAnimals === idAnimals.id) {
        idReturn.push(idAnimals);
      }
    });
  });
  return idReturn;
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  return animals.some(({ name, residents }) =>
  name === animal && residents.every(valor => valor.age > age));
}

function employeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) return {};
  return employees.find(({ firstName, lastName }) => (
  firstName === employeeName || lastName === employeeName));
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return Object.assign({}, personalInfo, associatedWith);
}

function isManager(id) {
  // seu código aqui
  return employees.some(({ managers }) => (managers.find(value => (value === id))));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const addEmployees = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return employees.push(addEmployees);
}

function animalCount(species) {
  // seu código aqui
  const result = {};
  if (typeof species === 'string') {
    const animal = animals.find(value => value.name === species);
    return animal.residents.length;
  }
  animals.forEach(animal => (result[animal.name] = animal.residents.length));
  return result;
}

function entryCalculator(entrants = 0) {
  // seu código aqui
  const arrayEntry = Object.entries(entrants);
  const priceEntry = Object.entries(prices);
  let value = 0;
  arrayEntry.forEach((element) => {
    priceEntry.forEach((price) => {
      if (element[0] === price[0]) value += (element[1] * price[1]);
    });
  });
  return value;
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
