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

const {animals, employees} = require('./data');

function animalsByIds(...ids) {
  return animals.filter(animal => ids.includes(animal.id));
 // if (!ids) return [];
 // return [animals.find(animal => animal.id === ids)];
}

function animalsOlderThan(specie, age) {
  return animals.find(animal.name === specie).residents
  .every(resident => resident.age >= age);
}

function employeeByName(employeeName) {
  //if (employeeName === undefined) return {};
  return employees.find(({firstName, lastName}) =>
  (firstName === employeeName || lastName === employeeName))
};

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return {...personalInfo, ...associatedWith};
}

function isManager(id) {
  // seu código aqui
  return employees.some(({ managers }) => managers.includes(id));
}

function addEmployee(id = '', firstName = '', lastName = '', managers = [], responsibleFor = []) {
  // seu código aqui
  const personalInfo = { id, firstName, lastName };
  const associatedWith = { managers, responsibleFor };
  const employee = createEmployee(personalInfo, associatedWith);
  employees.push(employee);
}

function animalCount(species) {
  // seu código aqui
  const result = animals.reduce((acc, animal) => {
    const  { name, residents } = animal;
    acc[name] = residents.length;
    return acc;
  }, {})
  if (species !== undefined) return result[species];
  return result;
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
