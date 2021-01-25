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

const {
  animals,
  employees,
  hours,
  prices
} = data;

function animalsByIds(...ids) {
  const animalsIds = [...ids];
  return animals.filter(animal => animalsIds.includes(animal.id));
}

function animalsOlderThan(animal, age) {
  const animalObject = animals.find(species => species.name === animal);
  return animalObject.residents.every(resident => resident.age > age);
}

function employeeByName(employeeName) {
  if (employeeName === undefined) return {};
  return employees.find(employee =>
    (employeeName === employee.firstName || employeeName === employee.lastName));
}

function createEmployee(personalInfo, associatedWith) {
  const {
    id,
    firstName,
    lastName
  } = personalInfo;
  const {
    managers,
    responsibleFor
  } = associatedWith;
  return {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor
  };
}

function isManager(id) {
  const managersIds = employees.map(employee => employee.managers);
  return managersIds.some(array => array.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push(createEmployee({
    id,
    firstName,
    lastName
  }, {
    managers,
    responsibleFor
  }));
}

function animalCount(species) {
  if (species !== undefined) {
    const {
      residents
    } = animals.find(animal => animal.name === species);
    return residents.length;
  }
  const animalsList = {};
  animals.forEach(animal => animalsList[animal.name] = animal.residents.length);
  return animalsList;
}

function entryCalculator(entrants = {}) {
  const {
    Adult = 0, Child = 0, Senior = 0
  } = entrants;
  return ((Adult * prices.Adult) + (Child * prices.Child) + (Senior * prices.Senior));
}

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  if (dayName === 'Monday') {
    const day = {}
    day[dayName] = 'CLOSED';
    return day;
  }
  if (dayName !== undefined) {
    const day = {}
    day[dayName] = `Open from ${hours[dayName].open}am until ${hours[dayName].close - 12}pm`;
    return day;
  }

  const formatedSchedule = {};
  const schedule = Object.entries(hours);
  schedule.forEach((day) => {
    if (day[0] === 'Monday') {
      formatedSchedule[day[0]] = `CLOSED`
    } else {
      formatedSchedule[day[0]] = `Open from ${day[1].open}am until ${day[1].close - 12}pm`
    }
  });
  return formatedSchedule
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
