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

const { animals, employees } = require('./data');
const data = require('./data');

function animalsByIds(...ids) {
  return animals.filter(({ id }, index) => id === ids[index]);
}

function animalsOlderThan(specimen, age) {
  return animals.find(
    ({ name }) => name === specimen).residents.every(
      ({ age: specimenAge }) => specimenAge >= age,
    );
}

function employeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }

  return employees.find(({ firstName, lastName }) =>
  firstName === employeeName || lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some(({ managers }) => managers.find(
    managerId => managerId === id,
    ),
  );
}

function addEmployee(id = '', firstName = '', lastName = '', managers = [], responsibleFor = []) {
  employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function animalCount(species) {
  return species ?
    animals.find(specimen => specimen.name === species)
    .residents.length : animals.reduce(
      (acc, { name, residents,
      }) => Object.assign(
        acc, ({ [name]: residents.length }
          )), {},
    );
}

function entryCalculator(entrants) {
  if (!entrants) return 0;
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  return (Senior * data.prices.Senior) + (Adult * data.prices.Adult) + (Child * data.prices.Child);
}

function animalMap(options) {
  // seu código aqui
}

const weeklySchedule = {
  Tuesday: 'Open from 8am until 6pm',
  Wednesday: 'Open from 8am until 6pm',
  Thursday: 'Open from 10am until 8pm',
  Friday: 'Open from 10am until 8pm',
  Saturday: 'Open from 8am until 10pm',
  Sunday: 'Open from 8am until 8pm',
  Monday: 'CLOSED',
};

function schedule(dayName) {
  if (!dayName) {
    return weeklySchedule;
  } else if (dayName === 'Monday') {
    return { [dayName]: 'CLOSED' };
  }
  return {
    [dayName]: `Open from ${hours[dayName].open}am until ${hours[dayName].close - 12}pm`,
    
  };
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
