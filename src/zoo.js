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

const { animals } = require('./data');
const data = require('./data');

function animalsByIds() {
  // seu código aqui
}

function animalsOlderThan(animal, age) {
  const animalsGroup = animals.find(value => value.name === animal);
  return animalsGroup.residents.every(value => value.age >= age);
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

function speciesCount(species) {
  const animalGroup = animals.find(value => value.name === species);
  return animalGroup.residents.length;
}

function animalCount(species) {
  if (species === undefined) {
    const quantitiesObject = {};
    animals.forEach((animal) => {
      const amountOfAnimals = speciesCount(animal.name);
      quantitiesObject[animal.name] = amountOfAnimals ;
    });
    return quantitiesObject;
  }
  return speciesCount(species);
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
