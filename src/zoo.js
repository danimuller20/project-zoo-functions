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

function animalsByIds(...ids) {
  // seu código aquia
  // nenhum parametro? retornar array vazio
  // um unico parametro? retornar o objeto do animal referente ao ID apresentado
  // mais de um parametro? retornar array com todas as especies referentes aos IDs
  const result = ids.map(actualId => data.animals.find(animal => actualId === animal.id));
  return result;
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const findAnimal = data.animals.find(actualAnimal => actualAnimal.name === animal);
  return findAnimal.residents.every(residents => residents.age > age);
}

function employeeByName(employeeName) {
  // seu código aqui
  const findEmployee = data.employees.find(ActualEmployeeName => ActualEmployeeName.firstName === employeeName || ActualEmployeeName.lastName === employeeName);
  if(findEmployee === undefined) {
    return {};
  }
  return findEmployee;
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