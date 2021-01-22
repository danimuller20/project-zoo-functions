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
  let employee = employees.find(({ firstName, lastName }) => {
    const matchFirstName = employeeName === firstName;
    const matchLastName = employeeName === lastName;
    return matchFirstName || matchLastName;
  });
  if (employee === undefined) employee = {};
  return employee;
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
  // const allAnimals =

  return (!species ? {...animals.map(({ name, residents }) => ({[name]: residents.length}))} : animals.find(({ name }) => name === species).residents.length);

  // const count = {};
  // animals.map(({ name, residents }) => (count[name] = residents.length));
  // if (!species) {
  // } else {
  //   animals.find(({ name }) => name === species).residents.length;
  // }
  // return {...count};

  // const count = {};
  // if (!species) {
  //   animals.map(({ name, residents }) => (count[name] = residents.length));
  //   return {...count};
  // }
  // return animals.find(({ name }) => name === species).residents.length;
}

function entryCalculator(entrants) {
  // seu código aqui
}

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  // seu código aqui
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
