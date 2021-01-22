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

const { animals, employees } = require('./data');
const data = require('./data');

function animalsByIds(...ids) {
  // seu código aqui
  // comparar ids passadas como parametros com ids do objeto;
  // retornar as ids que forem iguais;
  return animals.filter(animal => ids.find(id => id === animal.id));
}

function animalsOlderThan(animal, idade) {
  // seu código aqui
  // retorna true or false
  // testa se todas as espécies do animal possuem idade >= age;
  const objectName = animals.filter(({ name }) => animal === name);
  const objectResidents = objectName[0].residents;
  return objectResidents.every(({ age }) => age >= idade);
}

function employeeByName(employeeName) {
  // seu código aqui
  // sem parametros retorna um obj vazio;
  // passado o primeiro nome do func. retorna o obj do func. ;
  // passado o último nome do func. retorna o obj do func. ;
  if (!employeeName) return {};
  return employees.filter(({ firstName, lastName }) => firstName === employeeName || lastName === employeeName)[0];
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
