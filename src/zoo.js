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

function animalsByIds(id, ...rest) {
  const ids = [];
  if (id === undefined || id.length <= 0) {
    return ids;
  }
  ids.push(id, ...rest);
  const animalsList = [];
  ids.forEach((elementId) => {
    const animal = animals.find(element => element.id === elementId);
    if (animal !== undefined) {
      animalsList.push(animal);
    }
  });
  return animalsList;
}

function animalsOlderThan(animalSpecies, age) {
  const animalFound = animals.find(animal => animal.name === animalSpecies);
  const everyoneIsOfMinimumAge = animalFound.residents.every(resident => resident.age >= age);
  return everyoneIsOfMinimumAge;
}

function employeeByName(name) {
  if (name === undefined) {
    return {};
  }
  const isEmployee = employee => employee.firstName === name || employee.lastName === name;
  const employeeFound = employees.find(isEmployee);
  return employeeFound;
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some(employee => employee.managers.some(manager => manager === id));
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  const employee = {
    id,
    firstName,
    lastName,
    managers: managers || [],
    responsibleFor: responsibleFor || [],
  };
  employees.push(employee);
}

function animalCount(species) {
  if (species) {
    const animalFound = animals.find(animalElement => animalElement.name === species);
    return animalFound.residents.length;
  }
  const amountOfAnimals = {};
  animals.forEach((animal) => { amountOfAnimals[animal.name] = animal.residents.length; });
  return amountOfAnimals;
}

function entryCalculator(entrants) {
  if (entrants) {
    let amount = 0;
    for (const entrant in entrants) {
      if (Object.prototype.hasOwnProperty.call(foo, key)) {
        amount += entrants[entrant] * prices[entrant];
      }
    }
    return amount;
  }
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
