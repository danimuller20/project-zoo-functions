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
const { employees, animals, prices, hours } = require('./data');

function animalsByIds(...ids) {
  return !ids ? [] : animals.filter(animal => ids.includes(animal.id));
}

function animalsOlderThan(animal, age) {
  return (
    animals.find(specie => specie.name === animal).residents.every(dweller => dweller.age > age));
}

function employeeByName(employeeName) {
  return !employeeName ? {} : (
    employees.find(person => `${person.firstName} ${person.lastName}`.includes(employeeName)));
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.filter(person => person.managers.includes(id)).length > 0;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  const objAnimals = {};
  animals.forEach(animal => (objAnimals[animal.name] = animal.residents.length));
  return !species ? objAnimals : animals.find(animal => animal.name === species).residents.length;
}

function entryCalculator(entrants) {
  return !entrants ? 0 : Object.keys(entrants)
    .reduce((total, key) => total + (entrants[key] * prices[key]), 0);
}

function animalMap(options) {
  const obj = { NE: [], NW: [], SE: [], SW: [] };
  // const selectOptions = { includeNames, sex, sorted };
  const funcOptions = {
    showAll() {
      Object.keys(obj).forEach(locate => (obj[locate] = [...animals.filter(animal =>
        animal.location === locate).map(animalName => animalName.name)]));
    },
  };
  switch (options) {
    case undefined: funcOptions.showAll();
      break;
    default: break;
  }
  return obj;
}

function schedule(dayName) {
  const obj = {};
  Object.keys(hours).forEach(day => (hours[day].open > 0 ?
    (obj[day] = `Open from ${hours[day].open}am until ${hours[day].close - 12}pm`) :
    (obj[day] = 'CLOSED')));
  return !dayName ? obj : { [dayName]: obj[dayName] };
}

function oldestFromFirstSpecies(id) {
  return (
    Object.values(animals.find(animal => (animal.id === (employees.find(person => person.id === id)
    .responsibleFor[0]))).residents.reduce((older, next) => (next.age > older.age ? next : older)))
  );
}

function increasePrices(percentage) {
  Object.keys(prices).forEach(price => (prices[price] =
    Math.round(((prices[price] * 100) + (prices[price] * percentage))) / 100));
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
