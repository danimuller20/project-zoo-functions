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

const { animals } = data;
const { employees } = data;
const { prices } = data;
const { hours } = data;
// const { residents } = data;


function animalsByIds(...ids) {
  return animals.filter(animal => ids.find(idd => animal.id === idd));
}

function animalsOlderThan(animal, age) {
  const { residents } = animals.find(({ name }) => name === animal);
  return residents.every(({ age: animalAge }) => animalAge > age);
}

function employeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return data.employees.find(emp =>
  emp.firstName === employeeName || emp.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some(({ managers }) => managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  const population = {};
  if (!species) {
    animals.forEach(({ name, residents }) => {
      population[name] = residents.length;
    });
    return population;
  }
  return animals.find(value => value.name === species).residents.length;
}

function entryCalculator(entrants) {
  if (!entrants) {
    return 0;
  }
  let result = 0;
  Object.keys(prices).forEach((paidOut) => {
    if (entrants[paidOut]) {
      result += entrants[paidOut] * prices[paidOut];
    }
  });
  return result;
}


function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  const openClosed = {};
  Object.keys(hours).forEach((hour) => {
    const { open, close } = hours[hour];
    if (hour === 'Monday') {
      openClosed[hour] = 'CLOSED';
    } else {
      openClosed[hour] = `Open from ${open}am until ${close - 12}pm`;
    }
  });
  if (!dayName) {
    return openClosed;
  }
  return { [dayName]: openClosed[dayName] };
}

function oldestFromFirstSpecies(id) {
  const specieById = employees.find(emp => emp.id === id).responsibleFor[0];
  const reside = animals.find(resides => resides.id === specieById).residents;
  const sortReside = reside.sort((resid1, resid2) => resid2.age - resid1.age)[0];

  return [sortReside.name, sortReside.sex, sortReside.age];
}

function increasePrices(percentage) {
  Object.keys(data.prices).forEach((price) => {
    const newPrice = Math.round((data.prices[price] * (1 + (percentage / 100))) * 100) / 100;
    data.prices[price] = newPrice;
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
