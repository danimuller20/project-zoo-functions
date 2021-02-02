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

const { animals, employees, prices, hours } = data;

function animalsByIds(...ids) {

}

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

}

function animalMap(options) {
  // seu código aqui
}

const convertHourFrom24to12 = (hour) => (hour - 12) < 0 ? hour : hour - 12;

function schedule(dayName) {
  const daysOfWeek = Object.keys(hours);
  const schedule = {};

  daysOfWeek.forEach((eachDay) => {
    const { open, close } = hours[eachDay];

    if (eachDay === 'Monday') {
      schedule[eachDay] = 'CLOSED';
    } else {
      schedule[eachDay] = `Open from ${open}am until ${convertHourFrom24to12(close)}pm`;
      }
  })
  if (!dayName) return schedule;
  return { [dayName]: schedule[dayName] };
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
