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

const { animals, employees, prices, hours } = require('./data');
const data = require('./data');

function animalsByIds(...ids) {
  // seu código aqui
  return animals.filter((animal, index) => animal.id === ids[index]);
}

function animalsOlderThan(animal, idade) {
  // seu código aqui
  return animals.filter(species => species.name === animal)
    .map(element => element.residents.every(arg => arg.age >= idade))[0];
}

function employeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) return {};
  return employees
    .filter(element => element.firstName === employeeName || element.lastName === employeeName)[0];
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return {
    id: personalInfo.id,
    firstName: personalInfo.firstName,
    lastName: personalInfo.lastName,
    managers: associatedWith.managers,
    responsibleFor: associatedWith.responsibleFor,
  };
}

function isManager(id) {
  // seu código aqui
  return employees.some((value, index) => value.managers[index] === id);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return employees.push(newEmployee);
}

function animalCount(species) {
  // seu código aqui
  const listOfAnimals = {};
  animals.forEach((animal) => { listOfAnimals[animal.name] = animal.residents.length; });
  if (!species) {
    return listOfAnimals;
  }
  return listOfAnimals[species];
}

function entryCalculator(entrants) {
  // seu código aqui
  if (!entrants) {
    return 0;
  }
  const { Adult = 0, Senior = 0, Child = 0 } = entrants;
  return (Adult * prices.Adult) + (Senior * prices.Senior) + (Child * prices.Child);
}

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  // seu código aqui
  if (!dayName) {
    return {
      Tuesday: 'Open from 8am until 6pm',
      Wednesday: 'Open from 8am until 6pm',
      Thursday: 'Open from 10am until 8pm',
      Friday: 'Open from 10am until 8pm',
      Saturday: 'Open from 8am until 10pm',
      Sunday: 'Open from 8am until 8pm',
      Monday: 'CLOSED'
    };
  }
  if (dayName === 'Monday') return { Monday: 'CLOSED', };
  return { [dayName]: `Open from ${hours[dayName].open}am until ${hours[dayName].close - 12}pm` };
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
