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

const { animals, employees, prices } = data;

/* animalsByIds */

function animalsByIds(...ids) {
  return ids.map(idValue => animals.find(animalValue => animalValue.id === idValue));
}

/* animalsOlderThan */

function checkAge(ageArray, age) {
  return ageArray.every(value => value.age >= age);
}

function checkAnimal(animalValue, animal) {
  return animalValue === animal;
}

function animalsOlderThan(animal, age) {
  return animals.some(value => checkAnimal(value.name, animal) && checkAge(value.residents, age));
}

/* employeeByName */

function checkEmployee(firstName, lastName, name) {
  return firstName === name || lastName === name;
}

function employeeByName(employeeName) {
  let result = {};

  result = employees.find(value => checkEmployee(value.firstName, value.lastName, employeeName));

  if (result === undefined) result = {};

  return result;
}

/* createEmployee */

function createEmployee(personalInfo, associatedWith) {
  return (Object.assign(personalInfo, associatedWith));
}

/* isManager */

function isManager(id) {
  return employees.some(employee => employee.managers.some(manager => manager === id));
}

/* addEmployee */

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({ id, firstName, lastName, managers, responsibleFor });
}

/* animalCount */

function animalCount(species) {
  if (species === undefined) {
    const animalsObject = {};
    animals.forEach((value) => {
      animalsObject[value.name] = value.residents.length;
    });
    return animalsObject;
  }

  return animals.find(value => value.name === species).residents.length;
}

/* entryCalculator */

function checkEntrants(amount, clientType) {
  const objectPrices = Object.entries(prices);

  return amount * objectPrices.find(price => clientType === price[0])[1];
}

function entryCalculator(entrants) {
  if (typeof entrants === 'undefined' || entrants === null) {
    return 0;
  }

  const keys = Object.keys(entrants);
  const values = Object.values(entrants);

  return keys.reduce((total, entrant, index) => total + checkEntrants(values[index], entrant), 0);
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
