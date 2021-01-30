const { employees, animals, prices } = require('./data');

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

function animalCount(species) {
  const animalsObj = {};
  animals.forEach((bicho) => { animalsObj[bicho.name] = bicho.residents.length; });
  if (species) {
    return animalsObj[species];
  }
  return animalsObj;
}

function entryCalculator(entrants) {
  let result = 0;
  if (!entrants) {
    return 0;
  } else if (Object.keys(entrants).length === 0) {
    return 0;
  }
  Object.keys(entrants).forEach((item) => { result += entrants[item] * prices[item]; });
  return result;
}

function animalMap() {
  // options
  // seu código aqui
}

function schedule() {
  // dayName
  // seu código aqui
}

function oldestFromFirstspecies() {
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
  oldestFromFirstspecies,
  increasePrices,
  createEmployee,
};
