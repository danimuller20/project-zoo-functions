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

const { animals, employees, hours, prices } = require('./data');
const data = require('./data');

function animalsByIds(...ids) {
  return ids.map(id => animals.find(singleAnimal => singleAnimal.id === id));
}

function animalsOlderThan(animal, age) {
  const foundAnimal = animals.find(singleAnimal => singleAnimal.name === animal);
  return foundAnimal.residents.every(animalName => animalName.age >= age);
}

function employeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  return employees.find(employee =>
    employee.firstName === employeeName || employee.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

function isManager(id) {
  return employees.some(employee => employee.managers.find(boss => boss === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function animalCount(species) {
  const animalResult = {};
  animals.forEach(animal => (animalResult[animal.name] = animal.residents.length));
  if (species === undefined) {
    return animalResult;
  }
  return animalResult[species];
}

function entryCalculator(entrants) {
  // /
}

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  //
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
