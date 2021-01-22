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

const { animals, employees, prices } = require('./data');
const data = require('./data');

function animalsByIds(...ids) {
  return (ids.length === 0) ? ids : animals.filter(animal => ids.includes(animal.id));
}

function animalsOlderThan(animal, minAge) {
  const name = animals.find(specie => (animal === specie.name)).residents;
  return name.every(individual => individual.age >= minAge);
}

function employeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return employees.find(name => name.lastName === employeeName || name.firstName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some(({ managers }) => managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  const animalsObject = { };
  if (species === undefined) {
    animals.forEach(animal => (animalsObject[animal.name] = animal.residents.length));
    return animalsObject;
  }
  return animals.find(animal => species.includes(animal.name)).residents.length;
}

function entryCalculator(entrants) {
  let entryTotalFee = 0;
  if (entrants === undefined || entrants === {}) {
    return entryTotalFee;
  }
  Object.keys(prices).forEach((age) => {
    if (entrants[age]) {
      entryTotalFee += prices[age] * entrants[age];
    }
  });
  return entryTotalFee;
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
