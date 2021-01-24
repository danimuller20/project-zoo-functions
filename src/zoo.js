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
const { employees } = data;
const { hours } = data;
const { prices } = data;

function animalsByIds(...ids) {
  return ids.map(info => animals.find(id => info === id.id));
}

const findAnimals = animal => animals.find(name => name.name === animal);

function animalsOlderThan(animal, age) {
  return findAnimals(animal).residents.every(ages => ages.age > age);
}

const employerName = first => employees.find(firstName => firstName.firstName === first);
const employerLastName = last => employees.find(lastName => lastName.lastName === last);

function employeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return employerName(employeeName) || employerLastName(employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

function isManager(id) {
  return employees.some(code => code.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  return animals.reduce((accumulator, currentValue) => {
    if (currentValue.name === species) {
      return currentValue.residents.length;
    }
    accumulator[currentValue.name] = currentValue.residents.length;
    return accumulator;
  }, {});
}

function entryCalculator(entrants = 0) {
  const number = Object.entries(entrants);
  return number.reduce((accumulator, [key, value]) => accumulator + (value * prices[key]), 0);
}

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  const days = Object.entries(hours).reduce((accumulator, [key, value], index, array) => {
    index === array.length - 1 ? accumulator[key] = 'CLOSED' :
    accumulator[key] = `Open from ${value.open}am until ${value.close -12}pm`;
    return accumulator; 
  }, {});
  return !dayName ? days : { [dayName]: days[dayName] };
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
