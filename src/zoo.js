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
  return ids.map(animal => animals.find(element => element.id === animal));
}

function animalsOlderThan(animal, age) {
  const searchAnimals = animals.find(nameAnimal => nameAnimal.name === animal).residents;
  return searchAnimals.every(ageAnimal => ageAnimal.age >= age);
}

function employeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return employees.find(searchName => searchName.firstName === employeeName
    || searchName.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;
  return {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
}
// Solução conforme aprendizagem curso GoStack da Rocketseat

function isManager(id) {
  const confirmManager = employees.find(value => value.id === id);
  if (confirmManager.managers.length === 1) {
    return true;
  }
  return false;
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
  if (species !== undefined) {
    const searchAnimals = animals.find(value => value.name === species);
    return searchAnimals.residents.length;
  }
  const animalConsult = {};
  animals.forEach((value) => {
    animalConsult[`${value.name}`] = value.residents.length;
  });
  return animalConsult;
}
function entryCalculator(entrants = {}) {
  let totalprice = 0;
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  const { Adult: pA, Child: pC, Senior: pS } = prices;
  totalprice = (Adult * pA) + (Child * pC) + (Senior * pS);
  return totalprice;
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
