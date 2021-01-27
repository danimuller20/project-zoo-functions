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

const { animals, employees, prices } = require('./data');
const data = require('./data');

function animalsByIds(...args) {
  return animals.filter(element => args.includes(element.id));
}

function animalsOlderThan(animal, age) {
  return animals.every((animalElement) => {
    if (animal === animalElement.name) {
      return animalElement.residents.every(element => element.age > age);
    }
    return true;
  });
}

function employeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return employees.find(e => e.firstName === employeeName || e.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return {
    id: personalInfo.id,
    firstName: personalInfo.firstName,
    lastName: personalInfo.lastName,
    managers: associatedWith.managers,
    responsibleFor: associatedWith.responsibleFor,
  };
}
function isManager(id) {
  return employees.some(element => element.managers[0] === id);
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
  // seu código aqui
}

function isEmptyObject(obj) {
  return Object.keys(obj).length === 0;
  // Function by 'https://qastack.com.br/programming/679915/how-do-i-test-for-an-empty-javascript-object'
}

function entryCalculator(entrants = {}) {
  console.log(isEmptyObject({}));
  if (isEmptyObject(entrants)) {
    return 0;
  }
  const { Adult, Child, Senior } = prices;
  const { Adult: AdultE = 0, Child: ChildE = 0, Senior: SeniorE = 0 } = entrants;
  return (Adult * AdultE) + (Child * ChildE) + (Senior * SeniorE);
}

console.log(entryCalculator());

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
  prices.Adult = (((prices.Adult * (1 + (percentage / 100))) * 100).toPrecision(4)) / 100;
  prices.Child = (((prices.Child * (1 + (percentage / 100))) * 100).toPrecision(4)) / 100;
  prices.Senior = (((prices.Senior * (1 + (percentage / 100))) * 100).toPrecision(4)) / 100;
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
