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
const { animals, employees, prices } = require('./data');


function animalsByIds(...ids) {
  return animals.filter(({ id }, index) => id === ids[index]);
}

function animalsOlderThan(animal, age) {
  return animals.filter(({ name }) => name === animal)
    .every(({ residents }, index) => residents[index].age > age);
}

function employeeByName(employeeName) {
  return !employeeName ? {} : employees
    .find(employee => employee.firstName === employeeName || employee.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;
  return { id, firstName, lastName, managers, responsibleFor };
}

function isManager(id) {
  return employees
    .some(employe => employe.managers
      .some(idManager => idManager === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  // seu código aqui
  if (!species) {
    return animals.reduce((acumulador, valorAtual) => {
      acumulador[valorAtual.name] = valorAtual.residents.length;
      return acumulador;
    }, {});
  }
  const quantity = animals.find(animal => animal.name === species);
  return quantity.residents.length;
}

function entryCalculator(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  return Object.keys(entrants).reduce((acumulator, person) => {
    acumulator += prices[person] * entrants[person];
    return acumulator;
  }, 0);
}

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  const timetable = {
    Tuesday: 'Open from 8am until 6pm',
    Wednesday: 'Open from 8am until 6pm',
    Thursday: 'Open from 10am until 8pm',
    Friday: 'Open from 10am until 8pm',
    Saturday: 'Open from 8am until 10pm',
    Sunday: 'Open from 8am until 8pm',
    Monday: 'CLOSED',
  };
  if (!dayName) {
    return timetable;
  }
  if (dayName === 'Monday') {
    return { [dayName]: timetable[dayName] };
  }
  return { [dayName]: timetable[dayName] };
}

function oldestFromFirstSpecies(id) {
  const employeeFilter = employees.find(employe => employe.id === id);
  const { responsibleFor } = employeeFilter;
  const animalManaged = animals
    .find(managed => managed.id === responsibleFor[0]).residents
    .sort(({ age: a }, { age: b }) => b - a);
  const { name, sex, age } = animalManaged[0];
  return [name, sex, age];
}

function increasePrices(percentage) {
  Object.keys(prices).forEach((item) => {
    data.prices[item] = Math.round((data.prices[item] * (1 + (percentage / 100))) * 100) / 100;
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
