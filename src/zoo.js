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

// assign to a const the required data in data.js
const data = require('./data');

// get animals key in data object
const { animals, employees, hours, prices } = data;

// animalsByIds grabs the required ids as spread array
// animals array is then filtered by :
function animalsByIds(...ids) {
  return animals.filter(animal => ids.find(element => element === animal.id));
}

function animalsOlderThan(animal, age) {
  const foundAnimal = animals.find(animalIndex => animalIndex.name === animal);
  return !foundAnimal.residents.some(residentsIndex => residentsIndex.age < age);
}

function employeeByName(employeeName) {
  const evaluateName = employeeIndex => employeeIndex.firstName === `${employeeName}` || employeeIndex.lastName === `${employeeName}`;
  const returnedSearch = employees.find(employeeIndex => evaluateName(employeeIndex));
  const toReturn = (returnedSearch === undefined) ? {} : returnedSearch;
  return toReturn;
}

const createEmployee = (personalInfo, associatedWith) => ({ ...personalInfo, ...associatedWith });

const isManager = id => employees.some(employee => employee.managers.some(managersIndex => managersIndex === `${id}`));

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species = '') {
  if (species !== '') {
    return Object.keys(animals.find(animalValue => animalValue.name === `${species}`).residents).length;
  }
  const allAnimals = {};
  animals.forEach((animalIndex) => {
    allAnimals[animalIndex.name] = animalIndex.residents.length;
  });
  return allAnimals;
}

function entryCalculator(entrants) {
  if (typeof entrants !== 'object' || Object.keys(entrants).length === 0) {
    return 0;
  }
  let sum = 0;
  const entries = Object.entries(entrants);
  entries.forEach((entryValue) => {
    if (entryValue[0] === 'Child') {
      sum += entryValue[1] * 20.99;
    }
    if (entryValue[0] === 'Adult') {
      sum += entryValue[1] * 49.99;
    }
    if (entryValue[0] === 'Senior') {
      sum += entryValue[1] * 24.99;
    }
  });
  return parseFloat(sum.toFixed(2));
}

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName = '') {
  const askedSchedule = { };
  const evaluate = (day) => {
    if (day[0] === 'Monday') {
      askedSchedule[day[0]] = 'CLOSED';
    } else {
      askedSchedule[day[0]] = `Open from ${day[1].open}am until ${(day[1].close) - 12}pm`;
    }
  };
  Object.entries(hours).forEach(day => evaluate(day));
  return (dayName === '') ? askedSchedule : { [dayName]: askedSchedule[dayName] };
}

function oldestFromFirstSpecies(id) {
  const firstSpecie = employees.find(employee => employee.id === id).responsibleFor[0];
  const residents = (animals.find(specie => specie.id === firstSpecie).residents);
  function older(final, current) {
    return (final.age >= current.age) ? final : current;
  }
  return Object.values(residents.reduce((final, current) => older(final, current)));
}

function increasePrices(percentage) {
  return Object.keys(prices)
  .forEach(priceTag => prices[priceTag] = Math.round((prices[priceTag] + (prices[priceTag] * (percentage / 100))) * 100) / 100);
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
