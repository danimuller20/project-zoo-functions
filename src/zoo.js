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
  return animals.filter(animal => ids.find(returnIds => animal.id === returnIds));
}

function animalsOlderThan(animal, age) {
  const specimen = animals.find(querryResult => querryResult.name === animal);
  return specimen.residents.every(result => result.age >= age);
}

function employeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return employees
  .find(({ firstName, lastName }) => firstName === employeeName || lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  const newEmployee = ({ ...personalInfo, ...associatedWith });
  return newEmployee;
}

function isManager(id) {
  return employees.some(({ managers }) => managers.find(manager => (manager === id)));
}

function addEmployee(id = [], firstName = [], lastName = [], managers = [], responsibleFor = []) {
  const addEmployees = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return employees.push(addEmployees);
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
