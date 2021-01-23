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
  return ids.map(identificator => animals.find(animal => animal.id === identificator));
}

function animalsOlderThan(animalName, minAge) {
  const result = animals.find(animal => animal.name === animalName);
  return result.residents.every(resident => resident.age > minAge);
}

function employeeByName(employeeName) {
  return (employeeName)
  ? employees.find(employee => employee.firstName === employeeName
    || employee.lastName === employeeName)
  : {};
}

function createEmployee(personalInfo, associatedWith) {
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

function isManager(id) {
  return employees.some(employee => employee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  return (species) ? animals.find(animal => species === animal.name).residents.length
  : animals.reduce((acc, current) => {
    acc[current.name] = current.residents.length;
    return acc;
  }, { });
}

function entryCalculator(entrants) {
  const { Adult, Senior, Child } = prices;
  if (entrants === undefined) {
    return 0;
  }
  const { Adult: adultCount = 0, Senior: seniorCount = 0, Child: childCount = 0 } = entrants;
  return (adultCount * Adult) + (seniorCount * Senior) + (childCount * Child);
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
