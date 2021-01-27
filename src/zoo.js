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

function animalsByIds(...ids) {
  // seu código aqui
  return data.animals.filter(animal => ids.some(id => animal.id === id));
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const especie = data.animals.find(specie => specie.name === animal);
  return especie.residents.every(obj => obj.age > age);
}

function employeeByName(name) {
  // seu código aqui
  let employee = data.employees.find(emp => emp.firstName === name || emp.lastName === name);
  if (!name) employee = {};
  return employee;
}
// https://www.digitalocean.com/community/tutorials/js-array-find-method
function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;
  return { id, firstName, lastName, managers, responsibleFor };
}

function isManager(id) {
  // seu código aqui
  return data.employees.some(employee => employee.managers.some(idEmployee => idEmployee === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function createNumberForAnimals() {
  return data.animals.reduce((acc, animal) => {
    acc[animal.name] = animal.residents.length;
    return acc;
  }, {});
}

function animalCount(species) {
  // seu código aqui
  const countAnimalSpecies = createNumberForAnimals();
  if (!species) {
    return countAnimalSpecies;
  }
  return countAnimalSpecies[species];
}

function entryCalculator(entrants = {}) {
  // seu código aqui
  const { Ad = 0, Ch = 0, Sr = 0 } = entrants;
  if (entrants === {} || entrants === 0) {
    return 0;
  }
  const ticket = (data.prices.Adult * Ad) + (data.prices.Child * Ch) + (data.prices.Senior * Sr);
  return ticket;
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
