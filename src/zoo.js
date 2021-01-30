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
const { animals, employees } = require('./data');

function animalsByIds(...ids) {
  return animals.filter(({ id }) => ids.includes(id));
}

function animalsOlderThan(animal, age) {
  const matchingAnimals = animals.find(element => element.name === animal);
  return matchingAnimals.residents.every(element => element.age > age);
}

function employeeByName(employeeName) {
  let result = { };
  employees.forEach((theEmployee, positionEmployee, list) => {
    if (theEmployee.firstName === employeeName || theEmployee.lastName === employeeName) {
      result = list[positionEmployee];
    }
  });
  return result;
}

function createEmployee(personalInfo, associatedWith) {
  return Object.assign(personalInfo, associatedWith);
}

function listManagers() {
  return data.employees
    .map(employee => employee.managers)
    .reduce((acc, val) => acc.concat(val), []);
}

function isManager(id) {
  const managersList = listManagers();
  return managersList.some(idManager => idManager === id);
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  if (!managers) {managers = []};
  if (!responsibleFor) {responsibleFor = []};
  employees.push({ id, firstName, lastName, managers, responsibleFor});
}
//addEmployee('id kkk', 'mii', 'alves', 'gerente', 'respond');
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
