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
const { animals } = require('./data');


function animalsByIds(...ids) {
  const animalsList = [];
  if (ids.length > 0) {
    ids.forEach((listedId) => {
      const foundAnimal = animals.find(animal => animal.id === listedId);
      animalsList.push(foundAnimal);
    });
    return animalsList;
  }
  return animalsList;
}


function animalsOlderThan(animal, age) {
  const givenSpecie = animals.find(specie => specie.name === animal);
  const everyAnimalHasMinimalAge = givenSpecie.residents.every(resident => resident.age >= age);
  return everyAnimalHasMinimalAge;
}

function employeeByName(employeeName) {
  // seu código aqui
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
}

function isManager(id) {
  // seu código aqui
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
