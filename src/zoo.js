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

const { TestScheduler } = require('jest');
const data = require('./data');

const { animals } = data;
const { employees } = data;
const { hours } = data;
const { prices } = data;

function animalsByIds(...ids) {
  return ids.map(info => animals.find(id => info === id.id));
}

function animalsOlderThan(animal, age) {
  return animals.find(name => name.name === animal).residents.every(ages => ages.age > age);
}

const employerName = first => employees.find(firstName => firstName.firstName === first);
const employerLastName = last => employees.find(lastName => lastName.lastName === last);

function employeeByName(employeeName) {
  if (!employeeName) {
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
}

function schedule(dayName) {
  const days = Object.entries(hours).reduce((accumulator, [key, value], index, array) => {
    if (index === array.length - 1) {
      accumulator[key] = 'CLOSED';
      return accumulator;
    }
    accumulator[key] = `Open from ${value.open}am until ${value.close - 12}pm`;
    return accumulator;
  }, {});
  return !dayName ? days : { [dayName]: days[dayName] };
}

function oldestFromFirstSpecies(id) {
  const responsable = employees.find(code => code.id === id).responsibleFor[0];
  const animal = animals.find(code => code.id === responsable).residents;
  const { name, sex, age } = animal.reduce((accumulator, currentValue) => (
  currentValue.age > accumulator.age ? currentValue : accumulator));
  return [name, sex, age];
}

function increasePrices(percentage) {
  return Object.entries(prices).forEach(([key, value]) => {
    const round = Math.round(value * percentage);
    let float = ((value + (round / 100))).toFixed(2);
    float = parseFloat(float);
    data.prices[key] = float;
  });
}

function employeeCoverage(idOrName) {
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
