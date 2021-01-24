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

const { animals, prices } = require('./data');
const { employees } = require('./data');
const data = require('./data');

function animalsByIds(...ids) {
  if (!ids) { return []; }
  return animals.filter(animal => ids.includes(animal.id));
}

function animalsOlderThan(animal, age) {
  return (
    animals.find(specie => specie.name === animal).residents.every(dweller => dweller.age > age)
  );
}

function employeeByName(employeeName) {
  if (!employeeName) { return {}; }
  return (
    employees.find(person => person.firstName === employeeName || person.lastName === employeeName)
  );
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.filter(person => person.managers.includes(id)).length > 0;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = { ...employees[0] = { id, firstName, lastName, managers, responsibleFor } };
  return employees.push(newEmployee);
}

function animalCount(species) {
  const objAnimals = {};
  if (!species) {
    for (let index = 0; index < animals.length; index += 1) {
      const name = animals[index].name;
      const qnt = animals[index].residents.length;
      objAnimals[name] = qnt;
    }
    return objAnimals;
  } return animals.find(animal => animal.name === species).residents.length;
}

function entryCalculator(entrants) {
  if (!entrants) { return 0; }
  let total = 0;
  for (let key in prices) {
    if (entrants[key]) {
      total += prices[key] * entrants[key];
    }
  }
  return total;
}
console.log(entryCalculator({ 'Adult': 2, 'Child': 3, 'Senior': 1 }));


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
