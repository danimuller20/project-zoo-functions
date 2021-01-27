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

function isEmptyObject(obj){
    for(var prop in obj) {
      if(obj.hasOwnProperty(prop))
          return false;
  }

  return true;
  // Function by 'https://pt.stackoverflow.com/questions/83588/em-javascript-como-verificar-que-um-objeto-est%C3%A1-vazio-sem-jquery'
}
function entryCalculator(entrants = {}) {
  if (isEmptyObject(entrants)) {
    return 0;
  } else {
    const { Adult, Child, Senior } = prices;
    const { Adult: Adulte = 0, Child: Childe = 0, Senior: Seniore = 0  } = entrants;
    return (Adult * Adulte) + (Child * Childe) + (Senior * Seniore);
  }
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
