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

const { animals, employees, hours, prices } = data;

function animalsByIds(...ids) {
  return animals.filter(animal => ids.includes(animal.id));
}

function animalsOlderThan(animal, age) {
  const residents = animals.find(animalIterated => animalIterated.name.includes(animal)).residents;
  return residents.every(resident => resident.age > age);
}

function employeeByName(employeName) {
  if (!employeName) return {};
  return employees.find(name => name.firstName === employeName || name.lastName === employeName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some(employee => employee.managers.includes(id));
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
  if (!species) {
    const objAnimal = {};
    animals.forEach(animal => (objAnimal[animal.name] = animal.residents.length));
    return objAnimal;
  }
  return animals.filter(animal => animal.name === species)[0].residents.length;
}

function entryCalculator(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  return Object.keys(entrants).reduce((acc, crr) => acc + (entrants[crr] * prices[crr]), 0);
}

function animalMap(options) {
  // seu código aqui - ultimo
}

function schedule(dayName) {
  const objDay = {};
  Object.keys(hours).forEach((day) => {
    if (day !== 'Monday') {
      objDay[day] = `Open from ${hours[day].open}am until ${(hours[day].close) - 12}pm`;
    } else {
      objDay[day] = 'CLOSED';
    }
  });
  if (!dayName) {
    return objDay;
  }
  return { [dayName]: objDay[dayName] };
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  const priceChange = 1 + (percentage / 100);
  const objPricenew = Object.keys(data.prices);
  objPricenew.forEach(price => ({
    data.prices[price] = Math.round((data.prices[price] * priceChange) * 100) / 100
  }));
}

function employeeCoverage(idOrName) {
  // seu código aqui - penultimo
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
