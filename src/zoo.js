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

const { animals, employees, prices } = require('./data');
const data = require('./data');

function animalsByIds(ids) {
  // seu código aqui
}

function animalsOlderThan(animal, age) {
  return animals.some(
    objectAnimal => objectAnimal.residents.every(
      arrayResidents => objectAnimal.name === animal && arrayResidents.age >= age,
    ),
  );
}

function employeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  return employees.find(
    objectEmployee => objectEmployee.firstName === employeeName ||
    objectEmployee.lastName === employeeName,
  );
}

function createEmployee(personalInfo, associatedWith) {
  const newEmployee = { ...personalInfo, ...associatedWith };
  return newEmployee;
}

function isManager(id) {
  return employees.some(
    arrayEmployees => arrayEmployees.managers.some(
      stringManagers => stringManagers === id,
    ),
  );
}

function addEmployee(id = '', firstName = '', lastName = '', managers = [], responsibleFor = []) {
  const newEmployee = { id, firstName, lastName, managers, responsibleFor };
  employees.push(newEmployee);
}

function animalCount(species) {
  if (!species) {
    const animalAccumulator = (accumulator, currentAnimal) => {
      accumulator[currentAnimal.name] = currentAnimal.residents.length;
      return accumulator;
    };
    return animals.reduce(animalAccumulator, {});
  }
  return animals.find(
    arrayAnimals => arrayAnimals.name === species,
  ).residents.length;
}

function entryCalculator(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const { Adult = 0, Senior = 0, Child = 0 } = entrants;
  const ticketsValue = (Adult * prices.Adult) + (Senior * prices.Senior) + (Child * prices.Child);
  return ticketsValue;
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
