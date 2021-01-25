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
  return animals.filter(animal => ids.some(id => id === animal.id));
}
// console.log(animalsByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));

function animalsOlderThan(name, age) {
  return animals
  .some(animal => animal.residents
    .every(resident => animal.name === name && resident.age > age));
}
// console.log(animalsOlderThan('otters', 7));
// console.log(animalsOlderThan('penguins', 10));

function employeeByName(employeeName) {
  if (!employeeName) return {};
  return employees
  .find(employee => employee.firstName === employeeName || employee.lastName === employeeName);
}
// console.log(employeeByName('Emery'));
// console.log(employeeByName('Wishart'));

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some(employee => employee.managers.includes(id));
}
// console.log(isManager('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
// console.log(isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83'));

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
  const allAnimals = {};
  animals.forEach((animal) => { allAnimals[animal.name] = animal.residents.length; });
  if (!species) return allAnimals;
  return allAnimals[species];
}
// console.log(animalCount());
// console.log(animalCount('lions'));
// console.log(animalCount('snakes'));

function entryCalculator(entrants) {
  if (!entrants) return 0;
  let total = 0;
  Object.keys(prices).forEach((person) => {
    if (entrants[person]) {
      total += entrants[person] * prices[person];
    };
  });
  return total;
}
// console.log(entryCalculator());
// console.log(entryCalculator({}));

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
