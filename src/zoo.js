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

/* animalsByIds */

function animalsByIds(...ids) {
  return ids.map(idValue => animals.find(animalValue => animalValue.id === idValue));
}

/* animalsOlderThan */

function checkAge(ageArray, age) {
  return ageArray.every(value => value.age >= age);
}

function checkAnimal(animalValue, animal) {
  return animalValue === animal;
}

function animalsOlderThan(animal, age) {
  return animals.some(value => checkAnimal(value.name, animal) && checkAge(value.residents, age));
}

/* employeeByName */

function checkEmployee(firstName, lastName, name) {
  return firstName === name || lastName === name;
}

function employeeByName(employeeName) {
  let result = {};

  result = employees.find(value => checkEmployee(value.firstName, value.lastName, employeeName));

  if (result === undefined) result = {};

  return result;
}

/* createEmployee */

function createEmployee(personalInfo, associatedWith) {
  return (Object.assign(personalInfo, associatedWith));
}

/* isManager */

function isManager(id) {
  return employees.some(employee => employee.managers.some(manager => manager === id));
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
