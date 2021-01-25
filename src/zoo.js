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

const { employees, animals } = data;

function animalsByIds(...ids) {
  if (!ids) return [];
  return animals.filter(({ id }, index) => id === ids[index]);
}

function animalsOlderThan(animal, age) {
  return animals.find(({ name }) => name === animal).residents.every(bigger => bigger.age > age);
}

function employeeByName(employeeName) {
  if (!employeeName) return {};
  return employees.find(({ firstName, lastName }) =>
  firstName === employeeName || lastName === employeeName);
}

function createEmployee({ id, firstName, lastName }, { managers, responsibleFor }) {
  return { id, firstName, lastName, managers, responsibleFor };
}

function isManager(id) {
  return employees.some(({ managers }, index) => id === managers[index]);
}

function addEmployee(id, firstName, lastName, managers = []
, responsibleFor = []) {
  const newPerson = { id, firstName, lastName, managers, responsibleFor };
  return employees.push(newPerson);
}

function animalCount(species) {
  if (!species) {
    const obj = {};
    animals.forEach((element) => {
      obj[element.name] = element.residents.length;
    });
    return obj;
  }
  return animals.filter(item => species === item.name)[0].residents.length;
}

function entryCalculator(entrants) {

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
