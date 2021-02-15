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

const {animals} = require ('./data');
const data = require('./data');

function animalsByIds(...ids) {
  const emptyArray = [];
  ids.forEach(newID => emptyArray.push(animals.find(parametro => parametro.id === newID)));
  return emptyArray;
  //Caso receba nenhum parâmetro, necessário retornar um array vazio
  //o receber como parâmetro um único id, retorna um array com a espécie referente à esse id
  //Ao receber mais de um id, retorna um array com as espécies referentes aos ids
}

function animalsOlderThan(animal, age) {
  const especies = animals.find(especie => especie.name === animal).residents.every(resident => resident.age >= age);
  return especies
}
  //every retorna boolean 
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
