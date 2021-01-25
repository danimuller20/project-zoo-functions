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

function animalsByIds(...ids) {
  return ids.map(id => animals.find(animal => animal.id === id));
}

function animalsOlderThan(animal, age) {
  return animals.find(beast =>
    beast.name === animal).residents.every(resident =>
      resident.age >= age);
}

function employeeByName(employeeName) {
  const filteredEmployee = employees.find(employee =>
    employee.firstName === employeeName || employee.lastName === employeeName);
  return filteredEmployee || {};
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.map(employee =>
    employee.managers.some(maneger =>
      maneger === id)).some(employee => employee);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  const all = {};
  animals.forEach(animal => (all[animal.name] = animal.residents.length));
  return species ? animals.find(animal => animal.name === species).residents.length : all;
}

function entryCalculator(entrants) {
  if (!entrants) return 0;
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  return (Adult * prices.Adult) + (Child * prices.Child) + (Senior * prices.Senior);
}

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  let day = {};
  if (!dayName) {
    Object.keys(hours).forEach(hour => (day[hour] = `Open from ${hours[hour].open}am until ${hours[hour].close - 12}pm`));
    day.Monday = 'CLOSED';
  } else if (dayName === 'Monday') day = { Monday: 'CLOSED' };
  else day = { [dayName]: `Open from ${hours[dayName].open}am until ${hours[dayName].close - 12}pm` };
  return day;
}

function oldestFromFirstSpecies(id) {
  const filteredEmployee = employees.find(employee => employee.id === id);
  let animalEmployee = animalsByIds(filteredEmployee.responsibleFor[0]);
  animalEmployee = animalEmployee[0].residents.reduce((acc, curr) =>
    acc = ((acc.age < curr.age) ? curr : acc));
  return [animalEmployee.name, animalEmployee.sex, animalEmployee.age];
}

function increasePrices(percentage) {
  const multiplier = (percentage / 100) + 1;
  prices.Adult = parseFloat(((prices.Adult * multiplier) + 0.005).toFixed(2));
  prices.Senior = parseFloat(((prices.Senior * multiplier) + 0.005).toFixed(2));
  prices.Child = parseFloat(((prices.Child * multiplier) + 0.005).toFixed(2));
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
