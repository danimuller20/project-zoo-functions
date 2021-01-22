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

const { animals, employees } = require('./data');
const data = require('./data');

function animalsByIds(...ids) {
  // seu código aqui
  return ids.map(id => animals.find(animal => animal.id === id));
}


function animalsOlderThan(animal, age) {
  // seu código aqui
  const animalFound = animals.find(animalFind => animalFind.name === animal);
  const animalAge = animalFound.residents.every(animalResident => animalResident.age > age);
  return animalAge;
}

function employeeByName(employeeName) {
  // seu código aqui
  const byName = employees.find(people => people.firstName === employeeName);
  const byLastName = employees.find(people => people.LastName === employeeName);
  if (employeeName === undefined) {
    return {};
  } else if (byName === undefined) {
    return byLastName;
  } else if (byLastName === undefined) {
    return byName;
  }
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
