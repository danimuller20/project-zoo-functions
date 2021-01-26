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
  const { animals } = data;
  const filteredAnimals = animals.filter(
    animal => ids.some(id => animal.id === id),
  );
  return filteredAnimals;
}

function animalsOlderThan(animal, age) {
  const { animals } = data;
  const findedAnimal = animals.find(currentAnimal => currentAnimal.name === animal);
  return findedAnimal.residents.every(resident => resident.age > age);
}

function employeeByName(employeeName) {
  const { employees } = data;
  const employee = employees.find(
    employeeItem => employeeItem.firstName === employeeName
      ||
      employeeItem.lastName === employeeName);
  if (!employee) return {};
  return employee;
}

function createEmployee(personalInfo, associatedWith) {
  const newEmployee = { ...personalInfo, ...associatedWith };
  return newEmployee;
}

function isManager(id) {
  const { employees } = data;
  return employees.some(
    employee => employee.managers.find(managerId => managerId === id),
  );
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const { employees } = data;
  const newEmployee = { id, firstName, lastName, managers, responsibleFor };
  employees.push(newEmployee);
}

function animalCount(species) {
  const { animals } = data;
  if (!species) {
    const animalsQuantity = {};
    animals.forEach((animal) => {
      animalsQuantity[animal.name] = animal.residents.length;
    });
    return animalsQuantity;
  }
  const animal = animals.find(animalItem => animalItem.name === species);
  const animalsQuantity = animal.residents.length;
  return animalsQuantity;
}

function entryCalculator(entrants) {
  if (!entrants) {
    return 0;
  }
  if (!Object.keys(entrants).length) {
    return 0;
  }
  const { prices } = data;
  const total = Object.entries(entrants).reduce(
    (prev, [entrantType, quantity]) => prev + (prices[entrantType] * quantity),
    0,
  );
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
