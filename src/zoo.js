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

const animalsByIds = (...ids) => ids.map((id) => animals.find((animal) => id === animal.id));
  // verificacao de parametro vazio => if (!ids) { return [] }
  // compara se o parametro ids === (false || undefined || null ), caso seja, retorna um array vazio [] 
  // rest parameter ('...') trata numero indefinido de parametros (cada parametro e convertido em elemento de arr)
  // o rest parameter ('...') retorna arr com os parametros declarados, verificacao do arr ids desnecessaria 
  // .map trata cada elemento do array ids[]
  // .find compara, e devolve o o objeto cuja propriedade id (animal.id) seja igual ao parametro fornecido (id)
function animalsOlderThan(animal, age) {
  // seu código aqui
}

function employeeByName(employeeName) {
  // seu código aqui
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
