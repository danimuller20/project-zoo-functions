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

const { animals } = require('./data');
const data = require('./data');

function animalsByIds(...ids) {
  if (!ids) {
    return [];
  } else if (ids.length === 1) {
    return animals.filter(obj => obj.id === ids[0]);
  }
  return animals.filter(obj => ids.includes(obj.id));
}

function animalsOlderThan(animal, age) {
  const specieName = animals.find(obj => obj.name === animal);
  return specieName.residents.every(obj => obj.age > age);
}

function employeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  return data.employees.find(obj =>
    obj.firstName === employeeName || obj.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

function isManager(id) {
  const cargoManager = data.employees.some(obj => obj.managers.includes(id));
  return cargoManager;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  data.employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function animalCount(species) {
  if (!species) {
    return animals.reduce((acc, obj) => (
      { ...acc, [obj.name]: obj.residents.length }), {});
  }
  return animals.filter(obj => obj.name === species)[0].residents.length;
}

function entryCalculator(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  return Object.keys(entrants).reduce((acc, cv) =>
    acc + (entrants[cv] * data.prices[cv]), 0);
}

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  const dayOb = {};
  Object.keys(data.hours).forEach((valor) => {
    if (valor !== 'Monday') {
      dayOb[valor] = `Open from ${data.hours[valor].open}am until ${(data.hours[valor].close) - 12}pm`;
    } else {
      dayOb[valor] = 'CLOSED';
    }
  });
  if (!dayName) {
    return dayOb;
  }
  return { [dayName]: dayOb[dayName] };
}


function oldestFromFirstSpecies(id) {
  const firstSpecie = data.employees.find(obj =>
    obj.id === id).responsibleFor[0];
  const animalsResidents = animals.find(obj =>
    obj.id === firstSpecie).residents;
  const oldAnimal = animalsResidents.reduce((acc, { name, sex, age }) =>
    (age > acc.age ? [name, sex, age] : acc));
  return oldAnimal;
}

function increasePrices(percentage) {
  Object.keys(data.prices).forEach((valor) => {
    data.prices[valor] = Math.round(((1 + (percentage / 100)) * data.prices[valor]) * 100) / 100;
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
