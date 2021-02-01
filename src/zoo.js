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
  if (ids.length === 0) {
    return [];
  }
  return animals.filter((animal, index) => animal.id === ids[index]);
}

function animalsOlderThan(animal, age) {
  const animalIndex = animals.some(animalResid => animalResid.residents
    .every(resident => animalResid.name === animal && resident.age > age));
  return animalIndex;
}

function employeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  const compare = employees.find(employ =>
    employ.firstName === employeeName || employ.lastName === employeeName);
  return compare;
}

function createEmployee(personalInfo, associatedWith) {
  const spread = { ...personalInfo, ...associatedWith };
  return spread;
}

function isManager(id) {
  const comparar = employees.some(employee =>
    employee.managers.some(manager => manager === id));
  return comparar;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const objEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  employees.push(objEmployee);
}

function animalCount(species) {
  if (!species) {
    const objVazio = {};
    animals.forEach((animal) => {
      objVazio[animal.name] = animal.residents.length;
    });
    return objVazio;
  }
  const contador = animals.find(animal => animal.name === species).residents.length;
  return contador;
}

function entryCalculator(entrants) {
  if (entrants === {} || !entrants) {
    const zero = 0;
    return zero;
  }
  return Object.keys(entrants).reduce((total, num) => total + (entrants[num] * prices[num]), 0);
}

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  if (!dayName) {
    return {
      Tuesday: 'Open from 8am until 6pm',
      Wednesday: 'Open from 8am until 6pm',
      Thursday: 'Open from 10am until 8pm',
      Friday: 'Open from 10am until 8pm',
      Saturday: 'Open from 8am until 10pm',
      Sunday: 'Open from 8am until 8pm',
      Monday: 'CLOSED',
    };
  }
  if (dayName === 'Monday') {
    const monday = { Monday: 'CLOSED' };
    return monday;
  }
  const result = { [dayName]: `Open from ${hours[dayName].open}am until ${hours[dayName].close - 12}pm` };
  return result;
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  Object.keys(prices).forEach((price) => {
    prices[price] = Math.round(((percentage/100) + 1) * prices[price] * 100) / 100;
  });
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
