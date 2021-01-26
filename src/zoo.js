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

const { animals, employees, prices } = data; // destructure

function animalsByIds(...ids) {
  // seu código aqui
  return animals.filter(value => ids.includes(value.id));
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const animalFound = animals.find(value => value.name === animal);
  return animalFound.residents.every(ageOfAnimal => ageOfAnimal.age >= age);
}

function employeeByName(employeeName) {
  // seu código aqui
  const employeeObject = employees.find(value =>
      value.firstName === employeeName || value.lastName === employeeName);
  if (!employeeObject) {
    return {};
  } return employeeObject;
}

function createEmployee(personalInfo, associatedWith) {
  const newEmployee = Object.assign(personalInfo, associatedWith);
  return newEmployee;
}

function isManager(id) {
  // seu código aqui
  return employees.some(employee => employee.managers.some(manager => (manager === id)));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  employees.push(newEmployee);
}

function animalCount(species) {
  const object = {};
  if (!species) {
    animals.forEach(animalSpe => (object[animalSpe.name] = animalSpe.residents.length));
    return object;
  }
  const arrayOfresidents = animals.filter(animal => animal.name === species);
  return arrayOfresidents[0].residents.length;
}

function entryCalculator(entrants) {
  let finalPrice = 0;
  if (entrants !== undefined && entrants !== {}) {
    const ticketInformation = Object.entries(entrants);
    ticketInformation.forEach((personPrice) => {
      finalPrice += prices[personPrice[0]] * personPrice[1];
    });
    return finalPrice;
  }
  return finalPrice;
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
  const percentageValue = percentage / 100;
  const entrantAge = Object.keys(prices) // Retorna ["Adult", "Senior", "Child"]
  entrantAge.forEach((key) => {
    const increase = prices[key] * percentageValue;
    prices[key] += increase;
    prices[key] = Math.round(prices[key] * 100) / 100;
  });
  return prices;
}

//Usando o simplies////
// data.prices.Adult = Math.ceil(data.prices.Adult * (100 + percentage)).toFixed(2) / 100;
// data.prices.Senior = Math.ceil(data.prices.Senior * (100 + percentage)).toFixed(2) / 100;
// data.prices.Child = Math.ceil(data.prices.Child * (100 + percentage)).toFixed(2) / 100;
// return data.prices;

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
