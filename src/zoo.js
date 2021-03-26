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
  const foundAnimals = animals.filter(animal => ids.some(id => id === animal.id));
  return foundAnimals;
}

function animalsOlderThan(animal, age) {
  return animals.find(dataAnimal => dataAnimal.name === animal)
    .residents.every(dataAge => dataAge.age >= age);
}

function employeeByName(employeeName) {
  if (employeeName === undefined) return {};
  return employees.find(name => name.firstName === employeeName || name.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some(manager => manager.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const empployee = { id, firstName, lastName, managers, responsibleFor };
  employees.push(empployee);
  console.log(employees);
  // return employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  if (!species) {
    return animals.reduce((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      return acc;
    }, {});
  }
  return animals.find(animal => animal.name === species).residents.length;
}

function entryCalculator(entrants) {
  let totalPrice = 0;
  if (!entrants) return 0;
  Object.keys(entrants).forEach(value => (totalPrice += entrants[value] * prices[value]));
  return totalPrice;
}

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  const week = Object.assign({}, hours);
  const weekDays = Object.keys(week);
  const days = {};
  weekDays.forEach((day) => {
    week[day] = `Open from ${week[day].open}am until ${week[day].close - 12}pm`;
    if (day === 'Monday'){
     week[day] = 'CLOSED';
    }

  });
  if (!dayName) return week;
  days[dayName] = week[dayName];
  return days;
}

function oldestFromFirstSpecies(id) {
  const animalId = employees.find(employee => employee.id === id).responsibleFor[0];
  const { age, name, sex } = animals.find(animal => animal.id === animalId)
    .residents.sort((a, b) => b.age - a.age)[0];
  return [name, sex, age];
}

function increasePrices(percentage) {
  const percent = (percentage / 100) + 1;
  Object.keys(prices).forEach(value => (
    prices[value] = Math.round(prices[value] * percent * 100) / 100
  ));
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
