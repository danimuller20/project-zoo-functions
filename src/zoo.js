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

const { animals, employees, hours, prices } = data;

function animalsByIds(...ids) {
  if (!ids) return [];
  const arrayWithAnimalsFound = [];
  ids.forEach((id) => {
    arrayWithAnimalsFound.push(animals.find(animal => animal.id === id));
  });
  return arrayWithAnimalsFound;
}

console.log(animalsByIds('e8481c1d-42ea-4610-8e11-1752cfc05a46'));

function animalsOlderThan(animal, age) {
  return animals.some(species => ((animal === species.name) ?
  (species.residents.every(resident => resident.age >= age)) : false));
}

function employeeByName(employeeName) {
  if (!employeeName) return {};
  return employees.find(employee => employeeName === employee.firstName
  || employeeName === employee.lastName);
}

function createEmployee(personalInfo, associatedWith) {
  return Object.assign({}, personalInfo, associatedWith);
}

function isManager(id) {
  const employeeById = employees.find(employee => employee.id === id);
  return employeeById.managers.length === 1;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  employees.push(newEmployee);
}

function animalCount(species) {

}

function entryCalculator(entrants) {
  if (!entrants || entrants === {}) return 0;
  const { Adult = 0, Senior = 0, Child = 0 } = entrants;
  return (Adult * prices.Adult) + (Senior * prices.Senior) + (Child * prices.Child);
}

function animalMap(options) {
  // seu código aqui
}

const convertHourFrom24to12 = hour => ((hour - 12) < 0 ? hour : hour - 12);

function schedule(dayName) {
  const daysOfWeek = Object.keys(hours);
  const resultSchedule = {};

  daysOfWeek.forEach((eachDay) => {
    const { open, close } = hours[eachDay];

    if (eachDay === 'Monday') {
      resultSchedule[eachDay] = 'CLOSED';
    } else {
      resultSchedule[eachDay] = `Open from ${open}am until ${convertHourFrom24to12(close)}pm`;
    }
  });

  if (!dayName) return resultSchedule;
  return { [dayName]: resultSchedule[dayName] };
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  const typeOfEntry = Object.keys(prices);
  typeOfEntry.forEach((person) => {
    prices[person] = Number(((prices[person] +
      (prices[person] * (percentage / 100))) + 0.001).toFixed(2));
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
