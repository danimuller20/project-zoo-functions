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

const { animals, employees, _, prices } = data;

function animalsByIds(...ids) {
  return animals.filter(animal => ids.includes(animal.id));
}

function animalsOlderThan(animal, age) {
  const residents = animals.find(animalIterated => animalIterated.name.includes(animal)).residents;
  return residents.every(resident => resident.age > age);
}

function employeeByName(employeName) {
  if (!employeName) return {};
  return employees.find(name => name.firstName === employeName || name.lastName === employeName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some(employee => employee.managers.includes(id));
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
  if (!species) {
    const obj = {};
    animals.forEach(animal => obj[animal.name] = animal.residents.length);
    return obj;
  }
  return animals.filter(animal => animal.name === species)[0].residents.length;
}

function entryCalculator(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  return Object.keys(entrants).reduce((acc, crr) => acc + (entrants[crr] * prices[crr]), 0);
}

function animalMap(options) {
  // seu código aqui - ultimo
}

function schedule(dayName) {
  // if (!dayName) return hours;
  // return Object.entries(hours).filter((workingDays) => workingDays.includes(dayName));
}
// console.log(schedule('Monday'));

function oldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
}

function employeeCoverage(idOrName) {
  // seu código aqui - penultimo
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
