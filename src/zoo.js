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

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor
  });
  console.log(employees);
}

addEmployee('7ed1c9bb-8570-44f6-b718-0666b869573a','John','Doe',['c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1','9e7d4524-363c-416a-8759-8aa7e50c0992'],['0938aa23-f153-4937-9f88-4858b24d6bce','89be95b3-47e4-4c5b-b687-1fabf2afa274','bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5']);

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
