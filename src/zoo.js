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
const { animals } = require('./data');
const { employees } = require('./data');
const { prices } = require('./data');

function animalsByIds(...ids) {
  return animals.filter(animal => ids.some(id => animal.id === id));
}

function animalsOlderThan(animal, age2) {
  const teste = animals.filter(({ name }) => animal === name);
  const teste2 = teste[0].residents;
  return teste2.every(({ age }) => age >= age2);
}

function employeeByName(name) {
  let emply = employees.find(({ firstName, lastName }) => firstName === name || lastName === name);
  if (emply === undefined) {
    emply = {};
  }
  return emply;
}

function createEmployee({ id, firstName, lastName }, { managers, responsibleFor }) {
  return { id, firstName, lastName, managers, responsibleFor };
}

function isManager(id) {
  const arrayManagers = [];
  employees.forEach(({ managers }) => arrayManagers.push(...managers));
  return arrayManagers.some(value => value === id);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push({ id, firstName, lastName, managers, responsibleFor });
}


function animalCount(species) {
  let listOfAnimals = {};
  if (species === undefined) {
    animals.forEach(({ name, residents }) => {
      listOfAnimals[name] = residents.length;
      return (listOfAnimals);
    });
  } else {
    const numberPopularity = animals.find(({ name }) => name === species);
    listOfAnimals = numberPopularity.residents.length;
  }
  return listOfAnimals;
}

function entryCalculator(entrants = 0) {
  // seu código aqui
  let totalPrice = 0;
  Object.entries(prices).forEach((value) => {
    Object.entries(entrants).forEach((value2) => {
      if (value2[0] === value[0]) {
        totalPrice += value2[1] * value[1];
      }
      return totalPrice;
    });
  });
  return totalPrice;
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
