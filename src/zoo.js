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
  return ids.reduce((species, currentValue) => {
    species.push(data.animals.find(animal => animal.id === currentValue));
    return species;
  }, []);
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  let result;
  data.animals.forEach((specie) => {
    if (specie.name === animal) {
      result = specie.residents.every(resident => resident.age >= age);
    }
  });
  return result;
}

function employeeByName(employeeName) {
  // seu código aqui
  let result;
  if (employeeName === undefined) {
    result = {};
  } else {
    result = data.employees.find(
      employee => employee.firstName === employeeName || employee.lastName === employeeName);
  }
  return result;
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const employee = {
    id: personalInfo.id,
    firstName: personalInfo.firstName,
    lastName: personalInfo.lastName,
    managers: associatedWith.managers,
    responsibleFor: associatedWith.responsibleFor,
  };
  return employee;
}

function isManager(id) {
  // seu código aqui
  let resultTemp;
  let manager = false;
  data.employees.forEach((employee) => {
    resultTemp = employee.managers.some(manager => manager === id);
    if (resultTemp === true) {
      manager = true;
    }
  });
  return manager;
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
