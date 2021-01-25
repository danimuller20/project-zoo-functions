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

const {
  animals,
  employees,
  prices,
  hours,
} = data;

function animalsByIds(...ids) {
  const newArr = [];
  ids.forEach((id) => {
    const animalsIds = animals.find(animal => id === animal.id);
    newArr.push(animalsIds);
  });
  return newArr;
}

function animalsOlderThan(animal, age) {
  const animalObj = animals.find(value => animal === value.name);
  return animalObj.residents.every(specie => specie.age >= age);
}

function employeeByName(employeeName) {
  const searchEmployee = employees.find(employee => employee.firstName === employeeName ||
    employee.lastName === employeeName);

  if (!searchEmployee) return {};
  return searchEmployee;
}
console.log(employeeByName('Stephanie'))

function createEmployee(personalInfo, associatedWith) {
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

function isManager(id) {
  const findManager = employees.find(employee => employee.managers.find(manager => manager === id));
  if (findManager) return true;
  return false;
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
  if (species) return animals.find(specie => specie.name === species).residents.length;

  // baseado na resolução do Tiago Yoneda
  const newObj = {};
  animals.forEach(animal => (newObj[animal.name] = animal.residents.length));

  return newObj;
}

function entryCalculator(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;

  // baseado na resolução do Thiago Carreira Vallim
  return Object.keys(entrants).reduce((acumulator, people) => acumulator +
    (entrants[people] * prices[people]), 0);
}

function animalMap(options) {
  /* if (!options) {
    const newObj = {};
    animals.forEach(animal => (newObj[animal.location] = animals.filter(animalArr =>
      animalArr.location === animal.location)));
    return newObj;
  } */
}
// console.log(animalMap())

function daysOpen() {
  // baseado na resolução do Daniel Frasano
  const newObj = {};
  Object.entries(hours).forEach((obj) => {
    if (obj[1].open === 0) {
      newObj[obj[0]] = 'CLOSED';
    } else {
      newObj[obj[0]] = `Open from ${obj[1].open}am until ${obj[1].close - 12}pm`;
    }
  });
  return newObj;
}

function schedule(dayName) {
  if (!dayName) return daysOpen();

  const daysObj = daysOpen();
  const objAnsw = {};
  Object.entries(daysObj).forEach((value) => {
    if (value[0] === dayName) {
      objAnsw[value[0]] = value[1];
    }
  });
  return objAnsw;
}

function olderAnimal(specie) {
  return specie.residents.reduce(function (acum, valuePass) {
    return valuePass.age > acum.age ? valuePass : acum;
  });
}

function oldestFromFirstSpecies(id) {
  const idFirstSpecie = employees.find(employee => employee.id === id).responsibleFor[0];
  const specieSearch = animals.find(animal => animal.id === idFirstSpecie);
  const older = olderAnimal(specieSearch);
  return Object.values(older);
}

function newPrices(percent) {
  const oldPrices = Object.values(prices);
  return oldPrices.map((price) => {
    const increase = ((price * ((percent / 100) + 1)));
    const roundNum = ((Math.round(increase * 100)) / 100);
    return roundNum;
  });
}

function increasePrices(percentage) {
  const updated = newPrices(percentage);
  Object.keys(prices).forEach((value, i) => (prices[value] = updated[i]));

  return prices;
}

function employeeCoverage(idOrName) {
  /* if(!idOrName) {
    return employees
  } */
}
console.log(employeeCoverage());

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
