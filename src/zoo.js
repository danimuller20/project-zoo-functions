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

function animalsByIds(...ids) {
  return animals.filter((animalId, param) => animalId.id === ids[param]);
}

function animalsOlderThan(animal, age) {
  const findAnimal = animals.find(specie => specie.name === animal);
  return findAnimal.residents.every(resident => resident.age >= age);
}

function employeeByName(employeeName) {
  if (!employeeName) return {};
  const findNames = employees.find(employee =>
  employeeName === employee.firstName || employeeName === employee.lastName);
  return findNames;
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
  return employees.some(employee => (employee.managers).find(managerId => managerId === id));
}

// parameter default
function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = { id, firstName, lastName, managers, responsibleFor };
  return employees.push(newEmployee);
}

function animalCount(species) {
  let animalObj = {};
  animals.forEach(({ name, residents }) => (animalObj[name] = residents.length));
  if (species) {
    animalObj = animalObj[species];
  }
  return animalObj;
}

function entryCalculator(entrants) {
    if (entrants === undefined || Object.keys(entrants).length == 0) {
      return 0;
    }
    let acc = 0;
      Object.keys(entrants).forEach(key => {
      acc = acc + (entrants[key] * prices[key]);
    });
    return acc;
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
