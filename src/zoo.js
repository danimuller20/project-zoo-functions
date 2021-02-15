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

const { animals, employees } = data;

const animalsByIds = (...ids) => ids.map(id => animals.find(animal => id === animal.id));
  // verificacao de parametro vazio => if (!ids) { return [] }
  // compara se o parametro ids === (false||undefined||null) se sim retorna um array vazio[]
  // rest parameter ('...') trata numero indefinido de parametros
  // (cada parametro e convertido em elemento de arr)
  // o rest parameter ('...') retorna arr com os parametros declarados,
  // verificacao do arr ids desnecessaria
  // .map trata cada elemento do array ids[]
  // .find compara, e devolve o o objeto cuja propriedade id (animal.id)
  // seja igual ao parametro fornecido (id)
function animalsOlderThan(specie, age) {
  return animals.find(animal => animal.name === specie).residents
    .every(resident => resident.age >= age);
}

function employeeByName(employeeName) {
  if (employeeName === undefined) return {};
  return employees.find(({ firstName, lastName }) => (
    firstName === employeeName || lastName === employeeName
  )) || {};
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some(({ managers }) => managers.includes(id));
}

function addEmployee(id = '', firstName = '', lastName = '', managers = [], responsibleFor = []) {
  const personalInfo = { id, firstName, lastName };
  const associatedWith = { managers, responsibleFor };
  const employee = createEmployee(personalInfo, associatedWith);
  employees.push(employee);
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
