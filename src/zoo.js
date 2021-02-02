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
// const { employees } = data;


function animalsByIds(...ids) {
  return animals.filter(animal => ids.find(idd => animal.id === idd));
}

function animalsOlderThan(animal, age) {
  const { residents } = animals.find(({ name }) => name === animal);
  return residents.every(({ age: animalAge }) => animalAge > age);
}
//   const nameEmpFirst;
//   const nameEmpLast;
function employeeByName(employeeName) {
//   const nameEmployee = employees.find(({ firstName, lastName }) =>{

//     if (nameEmpFirst === firstName && nameEmpLast === lastName) {
//       return nameEmpFirst || nameEmpLast;
//     }
//   });
//   return nameEmployee;
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  data.employees.push({ id, firstName, lastName, managers, responsibleFor });
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
