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

function animalsByIds(...ids) {
  // seu código aqui
  return animals.filter(value => ids.some(id => id === value.id));
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  return animals.some(species => species.name === animal &&
    species.residents.every(residents => residents.age > age));
}

function employeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) return {};
  return employees.find(person => person.firstName === employeeName ||
    person.lastName === employeeName);
}


function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
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

function isManager(id) {
  // seu código aqui
  return employees.some(person => person.managers.some(value => value === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const person = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };

  return data.employees.push(person);
}

function animalCount(species) {
  // seu código aqui
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
  // seu código aqui
  if (!entrants) return 0;

  let result = 0;
  Object.keys(prices).forEach((pay) => {
    if (entrants[pay]) {
      result += entrants[pay] * prices[pay];
    }
  });
  return result;
}

function animalMap() {
  // seu código aqui
}

const showDay = (day) => {
  const { open, close } = hours[day];
  if (open === 0) {
    return 'CLOSED';
  }
  return `Open from ${open}am until ${close - 12}pm`;
};

function schedule(dayName) {
  // seu código aqui
  if (!dayName) {
    return Object.keys(hours).reduce((operation, day) => {
      operation[day] = showDay(day);
      return operation;
    }, {});
  }
  return { [dayName]: showDay(dayName) };
}


function oldestFromFirstSpecies(id) {
  // seu código aqui
  const collaborator = employees.find(colaborador => id === colaborador.id);
  const species = animals.find(animal => animal.id === collaborator.responsibleFor[0]);
  const animalOlder = species.residents.reduce((older, newest) => {
    return older.age > newest.age ? older : newest;
  });
  return Object.values(animalOlder);
}

function increasePrices(percentage) {
  // seu código aqui
  const { Adult, Senior, Child } = data.prices;

  const increase = {
    Adult: Math.round((Adult * (1 + (percentage / 100))) * 100) / 100,
    Senior: Math.round((Senior * (1 + (percentage / 100))) * 100) / 100,
    Child: Math.round((Child * (1 + (percentage / 100))) * 100) / 100,
  };

  data.prices = increase;

  return increase;
}

function employeeCoverage() {
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
