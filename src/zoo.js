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

function animalsByIds(...ids) {
  const result = [];
  ids.forEach((id) => {
    animals.filter(animal => (animal.id === id ? result.push(animal) : undefined));
  });
  return result;
}

function animalsOlderThan(animal, age) {
  const findanimal = animals.find(animalElement => animalElement.name === animal);

  const hasMinAge = findanimal.residents.every(ageElement => ageElement.age >= age);

  return hasMinAge;
}

function employeeByName(employeeName) {
  if (!employeeName) return {};
  const findedEmployer = employees.find(e => e.firstName === employeeName
    || e.lastName === employeeName);
  return findedEmployer;
}

function createEmployee(personalInfo, associatedWith) {
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

function isManager(id) {
  const result = employees.some(manager => manager.managers
    .some(findmanager => findmanager === id));
  return result;
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  if (!managers) managers = [];
  if (!responsibleFor) responsibleFor = [];

  const newEmployer = { id, firstName, lastName, managers, responsibleFor };

  return employees.push(newEmployer);
}

function animalCount(species) {
  const animal = animals.find(findAnimal => findAnimal.name === species);

  return animal.residents.length;
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
