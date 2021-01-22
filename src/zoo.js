/*
eslint no-unused-vars: [
  'error',
  {
    'args': 'none',
    'vars': 'local',
    'varsIgnorePattern': 'data'
  }
]
*/

const data = require('./data');
const { animals } = data;
const { employees } = data;
// const { hours } = data;
// const { prices } = data;

function animalsByIds(...ids) {
  // seu código aqui

  const foundAnimals = ids.map((idOfIds) => {
    const findById = animals.find(({ id }) => id === idOfIds);

    return findById;
  });

  return foundAnimals;
}

function animalsOlderThan(animal, age) {
  // seu código aqui

  const isEveryResidentOlder = data.animals
    .find((animalOfAnimals) => animalOfAnimals.name === animal) // Find the animal
    .residents //  Vccess the residents
    .every((resident) => resident.age >= age); // Verify if every resident has the minimum age

  return isEveryResidentOlder;
}

function findEmployeeByName(employeeName) {
  const foundEmployee = employees.find((employee) => {
    return (
      employee.firstName === employeeName || employee.lastName === employeeName
    );
  });

  return foundEmployee;
}

function employeeByName(employeeName) {
  // seu código aqui
  if (typeof employeeName === 'undefined') {
    return {};
  }

  return findEmployeeByName(employeeName);
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
