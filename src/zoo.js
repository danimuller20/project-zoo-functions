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

// const data = require('./data');
const { animals, employees, prices, hours } = require('./data');

function animalsByIds(...ids) {
  return animals.filter(animal => ids.some(id => animal.id === id));
}

function animalsOlderThan(animal, age) {
  const residents = animals.find(animalSpecie => animalSpecie.name === animal).residents;
  return residents.every(resident => resident.age >= age);
}

function employeeByName(employeeName) {
  return employeeName === undefined ?
  {} :
  employees.find(empl => empl.firstName === employeeName || empl.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some(employee => employee.managers.some(manager => manager === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  if (species === undefined) {
    const countAnimals = {};
    animals.forEach(animal => (countAnimals[animal.name] = animal.residents.length));
    return countAnimals;
  }
  const countAnimals = animals.find(({ name }) => name === species);
  return countAnimals.residents.length;
}

function entryCalculator(entrants) {
  if (!entrants) return 0;
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  return ((Adult * prices.Adult) + (Child * prices.Child) + (Senior * prices.Senior));
}

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  const allDays = Object.keys(hours);
  const scheduleDay = {};
  allDays.forEach((day) => {
    const { open, close } = hours[day];
    if (day === 'Monday') {
      scheduleDay[day] = 'CLOSED';
    } else {
      scheduleDay[day] = `Open from ${open}am until ${close % 12}pm`;
    }
  });
  return !dayName ? scheduleDay : { [dayName]: scheduleDay[dayName] };
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  Object.keys(prices).forEach(price =>
    (prices[price] = Math.ceil(prices[price] * (percentage + 100)) / 100));
  return prices;
}

function getAnimalsListFromEmployee(employee) {
  return employee.responsibleFor
    .map(animalId => animals.find(specie => animalId === specie.id).name);
}

function getEmployeeFullName(employee) {
  return `${employee.firstName} ${employee.lastName}`;
}

function employeeCoverage(idOrName) {
  if (!idOrName) {
    return employees.reduce((acc, employee) => {
      const animalsList = getAnimalsListFromEmployee(employee);
      acc[getEmployeeFullName(employee)] = animalsList;
      return acc;
    }, {});
  }
  const foundEmployee = employees
    .find(employee => employee.id === idOrName
      || employee.firstName === idOrName
      || employee.lastName === idOrName);
  const animalsList = getAnimalsListFromEmployee(foundEmployee);
  const fullName = getEmployeeFullName(foundEmployee);
  return { [fullName]: animalsList };
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
