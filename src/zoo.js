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

const { animals } = data;
const { employees } = data;
// const { hours } = data;
// const { prices } = data;

function animalsByIds(...ids) {
  return ids.map(info => animals.find(id => info === id.id));
}

const findAnimals = animal => animals.find(name => name.name === animal);

function animalsOlderThan(animal, age) {
  return findAnimals(animal).residents.every(ages => ages.age > age);
}

const employerName = first => employees.find(firstName => firstName.firstName === first);
const employerLastName = last => employees.find(lastName => lastName.lastName === last);

function employeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return employerName(employeeName) || employerLastName(employeeName);
}


const personalInfo = ['7ed1c9bb-8570-44f6-b718-0666b869573a', 'John', 'Doe'];

const associatedWith = [[
  'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1',
  '9e7d4524-363c-416a-8759-8aa7e50c0992'
],
[
  '0938aa23-f153-4937-9f88-4858b24d6bce',
  '89be95b3-47e4-4c5b-b687-1fabf2afa274',
  'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5'
]
];
function createEmployee([id, firstName, lastName], [managers, responsibleFor]) {
  const objeto = {
    id, firstName, lastName,
    managers,
    responsibleFor
  };
  return objeto;
}
console.log(createEmployee(personalInfo, associatedWith));

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
