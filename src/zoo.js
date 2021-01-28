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

const { animals, employees, prices } = data;

function animalsByIds(...ids) {
  // seu código aqui
  return animals.filter(animal => ids.some(id => id === animal.id));
}

animalsByIds('0938aa23-f153-4937-9f88-4858b24d6bce', 'e8481c1d-42ea-4610-8e11-1752cfc05a46');

function animalsOlderThan(animal, age) {
  // seu código aqui
  return animals.some(currentAnimal =>
    currentAnimal.residents
    .every(resident => resident.age >= age && currentAnimal.name === animal));
}

function employeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) return {};
  return employees
    .find(employee => employee.firstName === employeeName || employee.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  return employees
    .some(employee => employee.managers
    .some(manager => manager === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  return employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function animalCount(species) {
  // seu código aqui
  const animalsObject = {};
  animals.map((animal) => {
    animalsObject[animal.name] = animal.residents.length;
    return animalsObject;
  });
  if (!species) {
    return animalsObject;
  }
  return animals.filter(animal => animal.name === species)[0].residents.length;
}


function entryCalculator(entrants) {
  // seu código aqui
  if (!entrants) return 0;
  let entrantTotal = 0;
  Object.keys(prices)
    .forEach((key) => {
      if (key in entrants) {
        entrantTotal += prices[key] * entrants[key];
      }
    });
  return entrantTotal;
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
  Object.keys(prices)
    .forEach((key) => {
      prices[key] = parseFloat(Math
    .fround(prices[key] * ((percentage / 100) + 1)
    .toFixed(2))
    .toPrecision(4));
  });
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
