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

const { animals, employees } = data;

function animalsByIds(...ids) {
  // seu código aqui
  const animalsFind = [];
  ids.forEach(id => animalsFind.push(animals.find(animal => animal.id === id)));
  return animalsFind;
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const animalsBySpecies = animals.find(element => element.name === animal).residents;
  return animalsBySpecies.every(element => element.age >= age);
}

function employeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) { return {}; }
  return employees.find(person => person.firstName === employeeName ||
  person.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;
  return {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
}

function isManager(id) {
  // seu código aqui
  const managersArray = [];
  employees.forEach(elementArray => managersArray.push(elementArray.managers));
  return managersArray.some(element => element.includes(id));
}

// function isManager(id) {
//   // seu código aqui
//   const managersStatus = [];
//   employees.forEach(element => {
//     for (let manager of element.managers) {
//       managersStatus.push(manager);
//     }
//   });
//   return managersStatus.some(managerId => managerId === id);
// }

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  return employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  // seu código aqui

  if (species) {
    const specieArray = animals.find(animal => animal.name === species);
    return specieArray.residents.length;
  }
  const animalsCount = {};
  animals.forEach(animal => animalsCount[animal.name] = animal.residents.length);
  return animalsCount;
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
