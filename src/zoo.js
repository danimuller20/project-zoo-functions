const { employees, animals } = require('./data');

function animalsByIds(...ids) {
  if (ids === undefined) {
    return [];
  }
  return animals.filter(zooAnimal => ids.some(id => id === zooAnimal.id));
}

function animalsOlderThan(animal, age) {
  const species = animals.find(item => item.name === animal).residents; // array de obj
  return species.every(resident => resident.age >= age);
}

function employeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  return employees.find(
    employee => employee.firstName === employeeName || employee.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return {
    id: personalInfo.id,
    firstName: personalInfo.firstName,
    lastName: personalInfo.lastName,
    managers: associatedWith.managers,
    responsibleFor: associatedWith.responsibleFor,
  };
}

function isManager(id) {
  return employees.some(item => item.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const employeeNew = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return employees.push(employeeNew);
}

function animalCount() {
  // species
  // seu código aqui
}

function entryCalculator() {
  // entrants
  // seu código aqui
}

function animalMap() {
  // options
  // seu código aqui
}

function schedule() {
  // dayName
  // seu código aqui
}

function oldestFromFirstSpecies() {
  // id
  // seu código aqui
}

function increasePrices() {
  // percentage
  // seu código aqui
}

function employeeCoverage() {
  // idOrName
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
