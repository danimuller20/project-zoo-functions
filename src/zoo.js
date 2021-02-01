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

  return animals.filter((animal) =>
    ids.find(element => element === animal.id)
  );
}

function animalsOlderThan(animal, age) {
  const findAnimals = animals.find(animalFind => animalFind.name === animal)
    .findAnimals;
  return findAnimals.every(animalsAge => animalsAge.age > age);
}

function employeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) return {};

  const findEmployees = employees.find(
    employee => employee.fisrtName === employeeName || employee.lastName
  );

  return findEmployees;
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  const managers = employees.some(employee =>
    employee.managers.some((manager) => manager === id)
  );

  return managers;
}

function addEmployee(
  id,
  firstName,
  lastName,
  managers = [],
  responsibleFor = []
) {
  // seu código aqui
  const NewEmployees = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };

  employees.push(NewEmployees);
}

function animalCount(species) {
  // seu código aqui
  const listAminals = {};

  animals.forEach(animal => {
    listAminals[animal.name] = animal.residents.length;
  });

  if (!species) {
    return listAminals;
  }
  return listAminals.species;
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
