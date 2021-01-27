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
  return animals.filter((animal, index) => animal.id === ids[index]);
}
console.log(animalsByIds('0938aa23-f153-4937-9f88-4858b24d6bce', 'e8481c1d-42ea-4610-8e11-1752cfc05a46'));
function animalsOlderThan(animal, age) {
  // seu código aqui
  return animals
.find(animalName => animalName.name === animal).residents
.every(ageGiven => ageGiven.age >= age);
}
console.log(animalsOlderThan('otters', 7));

function employeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return employees.find(employee => employee.firstName === employeeName
  || employee.lastName === employeeName);
}

console.log(employeeByName('Wishart'));

function createEmployee(personalInfo, associatedWith) {
  /* const newEmployeeInfo = { ...personalInfo, ...associatedWith };
  data.employees.push(newEmployeeInfo);
  return employees.find(employee => employee[employee.length-1]);
}
console.log(createEmployee({
  id: '7ed1c9bb-8570-44f6-b718-0666b869573a',
  firstName: 'John',
  lastName: 'Doe',
}, {
  managers: [
    'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1',
    '9e7d4524-363c-416a-8759-8aa7e50c0992'],
  responsibleFor: [
    '0938aa23-f153-4937-9f88-4858b24d6bce',
    '89be95b3-47e4-4c5b-b687-1fabf2afa274',
    'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5'],
}));
*/
}
function isManager(id) {
  return employees.some(employee => employee.managers.includes(id));
}
console.log(isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83'));

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  data.employees.id.push(id);
  data.employees.firstName.push(firstName);
  data.employees.lastName(lastName);
  data.employees.managers(managers);
  data.employees.responsibleFor(responsibleFor);
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
