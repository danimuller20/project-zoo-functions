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
  const filteredAnimals = [];
  ids.forEach(askedID => filteredAnimals.push(animals.find(({ id }) => id === askedID)));
  return filteredAnimals;
}

function animalsOlderThan(animal, age) {
  const { residents } = animals.find(({ name }) => name === animal);
  return residents.every(({ age: animalAge }) => animalAge > age);
}

function employeeByName(employeeName) {
  const employee = employees.find(({ firstName, lastName }) => {
    const matchFirstName = employeeName === firstName;
    const matchLastName = employeeName === lastName;
    return matchFirstName || matchLastName;
  });
  return (employee === undefined ? {} : employee);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some(({ managers }) => managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  const allAnimals = animals.reduce(function (acc, { name, residents }) {
    return { ...acc, [name]: residents.length };
  }, {});

  return (!species ? allAnimals : animals.find(({ name }) => name === species).residents.length);
}

function entryCalculator(entrants) {
  const arrEnt = (!entrants ? 0 : Object.entries(entrants));
  return (!arrEnt ? arrEnt : arrEnt.reduce((acc, [type, qnty]) => acc + (qnty * prices[type]), 0));
}

const animalsByLocation = animals.reduce(function (acc, { name, location }) {
  return {...acc, [location]: (!acc[location] ? [name] : [...acc[location],name])}
}, {});
const animalsByName = animals.reduce(function (acc, { name, residents }) {
  residentsList = residents.map(({ name }) => name);
  return {...acc, [name]: residentsList }
}, {});

function animalMap(options) {
  if (!options) {
    return animalsByLocation;
  } else if (options.includeNames) {
    return animalsByName;
  }
}

function schedule(dayName) {
  const formatedSchedule = Object.entries(hours).reduce((acc, [day, { open, close }]) => {
    return { ...acc, [day]: (!open ? 'CLOSED' : `Open from ${open}am until ${close - 12}pm`)};
  } , {});
  return (!dayName ? formatedSchedule : {[dayName]: formatedSchedule[dayName]});
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
