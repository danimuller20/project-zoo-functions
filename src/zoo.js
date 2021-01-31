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
  return ids.map(animal => animals.find(element => element.id === animal));
}

function animalsOlderThan(animal, age) {
  const searchAnimals = animals.find(nameAnimal => nameAnimal.name === animal).residents;
  return searchAnimals.every(ageAnimal => ageAnimal.age >= age);
}

function employeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return employees.find(searchName => searchName.firstName === employeeName
    || searchName.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;
  return {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
}
// Solução conforme aprendizagem curso GoStack da Rocketseat

function isManager(id) {
  const confirmManager = employees.find(value => value.id === id);
  if (confirmManager.managers.length === 1) {
    return true;
  }
  return false;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function animalCount(species) {
  if (species !== undefined) {
    const searchAnimals = animals.find(value => value.name === species);
    return searchAnimals.residents.length;
  }
  const animalConsult = {};
  animals.forEach((value) => {
    animalConsult[`${value.name}`] = value.residents.length;
  });
  return animalConsult;
}
function entryCalculator(entrants = {}) {
  let totalprice = 0;
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  const { Adult: pA, Child: pC, Senior: pS } = prices;
  totalprice = (Adult * pA) + (Child * pC) + (Senior * pS);
  return totalprice;
}

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  if (dayName === undefined) {
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
    return { Monday: 'CLOSED' };
  }
  const zooOpen = hours[`${dayName}`];
  return { [dayName]: `Open from ${zooOpen.open}am until ${zooOpen.close - 12}pm` };
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  const newValue = ((100 + percentage) / 100) + 0.000000001;
  prices.Adult = parseFloat((prices.Adult * newValue).toFixed(2));
  prices.Child = parseFloat((prices.Child * newValue).toFixed(2));
  prices.Senior = parseFloat((prices.Senior * newValue).toFixed(2));
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
