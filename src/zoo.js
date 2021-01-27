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
  const Employee = data.employees.find(aEmployeeName => aEmployeeName.firstName === employeeName
    ||
    aEmployeeName.lastName === employeeName);
  if (Employee === undefined) {
    return {};
  }
  return Employee;
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const newEmployee = { ...personalInfo, ...associatedWith };
  return newEmployee;
}

function isManager(id) {
  // seu código aqui
  const manager = data.employees.find(employeeId =>
    employeeId.managers.find(currentValue => currentValue === id) === id);
  if (manager === undefined) {
    return false;
  }
  return true;
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  data.employees.push(newEmployee);
  return newEmployee;
}
//console.log(addEmployee('4141da1c-a6ed-4cf7-90c4-99c657ba4ef3', 'Jane', 'Doe',
//[
//  '546fe3d4-2d81-4bb4-83a7-92d5b7048d17',
//  'a67a36ee-3765-4c74-8e0f-13f881f6588a',
//],
//[
//  'ee6139bf-b526-4653-9e1e-1ca128d0ad2e',
//  '210fcd23-aa7b-4975-91b7-0230ebb27b99',
//]));
function animalCount(species = undefined) {
  // seu código aqui
  if (species === undefined) {
    data.animals.forEach(currentValue => currentValue.name + currentValue.residents.length);
  }
  return data.animals.find(currentValue => currentValue.name === species).residents.length;
}
//console.log(animalCount('lions'));
function entryCalculator(entrants = undefined) {
  // seu código aqui
  let fullPrice = 0
  if (entrants === undefined) {
    return 0;
  }
  Object.keys(entrants).forEach(key => fullPrice += data.prices[key] * entrants[key]);
  return fullPrice;
}
console.log(entryCalculator({}));
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
