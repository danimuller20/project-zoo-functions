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
// LET'S DO THIS!
const { prices } = require('./data');
const data = require('./data');

const { animals } = data;
const { employees } = data;

const managersList = [];
employees.forEach(worker => worker.managers.forEach((id) => {
  managersList.push(id);
}));


function animalsByIds(...ids) {
  if (ids.length === 0) return [];
  return animals.filter((animal, index) => animal.id === ids[index]);
}

// a função filter recebe até três parâmetros, assim podemos utilizar o segundo parâmetro
// (index) para utilizarmos na comparação com o o índice do parâmetro ids;

function animalsOlderThan(animal, age) {
  const animalsToCheckAge = animals.find(iteratedAnimal => (
    iteratedAnimal.name === animal));
  return animalsToCheckAge.residents.every(resident => resident.age > age);
}

function employeeByName(string) {
  if (!string) return {};

  return employees.find(person => (
    person.firstName === string || person.lastName === string
  ));
}

function createEmployee(personalInfo, associatedWith) {
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

function isManager(id) {
  const person = employees.find(number => number.id === id);
  return managersList.some(worker => worker === person.id);
}

function addEmployee(id = [], firstName = [], lastName = [], managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return employees.push(newEmployee);
}

function animalPopulation() {
  const allAnimals = {};
  animals.forEach((type) => {
    allAnimals[type.name] = type.residents.length;
  });
  return allAnimals;
}

function animalCount(species) {
  if (!species) {
    return animalPopulation();
  }
  const countSpecimens = animals.find(creature => creature.name === species);
  return countSpecimens.residents.length;
}

function entryCalculator(entrants = {}) {
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  if (entrants === {} || entrants === 0) {
    return 0;
  }
  const total = (prices.Adult * Adult) + (prices.Child * Child) + (prices.Senior * Senior);
  return total;
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
