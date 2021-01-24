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
// LET'S DO THIS!
const data = require('./data');

const { animals } = data;
const { employees } = data;


function animalsByIds(...ids) {
  // seu código aqui
  if (ids.length === 0) return [];
  return animals.filter((animal, index) => animal.id === ids[index]);
}

// a função filter recebe até três parâmetros, assim podemos utilizar o segundo parâmetro
// (index) para utilizarmos na comparação com o o índice do parâmetro ids;

function animalsOlderThan(animal, age) {
  const animalsToCheckAge = animals.find(iteratedAnimal => (
    iteratedAnimal.name === animal));
  return animalsToCheckAge.residents.every(resident => resident.age > age);
}

function employeeByName(string) {
  if (!string) return {};

  return employees.find(person => (
    person.firstName === string || person.lastName === string
  ));
}

function createEmployee(personalInfo, associatedWith) {
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

function isManager(id) {
  // const person = employees.find((number) => number.id === id);
}

console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992'));


function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  if (!id || !firstName || !lastName || !managers || !responsibleFor) return [];
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return employees.push(newEmployee);
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
