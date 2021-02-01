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

const { animals, employees, prices, hours } = data;

function animalsByIds(...ids) {
  const foundAnimals = ids.map((actualId) => {
    const foundAnimal = animals.find(animal => actualId === animal.id);
    return foundAnimal;
  });
  return foundAnimals;
}


function animalsOlderThan(animal, age) {
  return animals.some(objAnimal => objAnimal.residents.every(
    residentAnimal => residentAnimal.age >= age && objAnimal.name === animal,
  ));
}


function employeeByName(employeeName) {
  if (!employeeName) return {};
  return employees.find(
    employee => employee.lastName === employeeName || employee.firstName === employeeName,
  );
}


function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}


function isManager(id) {
  return employees.some(employee => employee.managers.some(manager => manager === id));
}


function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({ id, firstName, lastName, managers, responsibleFor });
}


function animalCount(species) {
  if (!species) {
    return animals.reduce((acumulator, animal) => {
      acumulator[animal.name] = animal.residents.length;
      return acumulator;
    }, {});
  }
  return animals.find(animal => animal.name === species).residents.length;
}


function entryCalculator(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  return (Adult * prices.Adult) + (Child * prices.Child) + (Senior * prices.Senior);
}


function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  const dayObj = {};
  Object.keys(hours).forEach((day) => {
    if (day !== 'Monday') {
      dayObj[day] = `Open from ${hours[day].open}am until ${(hours[day].close) - 12}pm`;
    } else {
      dayObj[day] = 'CLOSED';
    }
  });
  if (!dayName) {
    return dayObj;
  }
  return `${[dayName]}: ${dayObj[dayName]}`;
}


function oldestFromFirstSpecies(id) {
  const employee = employees.find(employee => employee.id === id);
  const firstAnimalId = employee.responsibleFor[0];
  const residents = (animals.find(animal => animal.id === firstAnimalId)).residents;
  // const oldestAnimal = residents.reduce((acumulator, resident) => )
  // const specie = employees.find(animal => animal.id === id);
  // console.log(specie.residents)
}

oldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992')

function increasePrices(percentage) {
  Object.keys(prices).forEach((type) => {
    const newPrice = Math.round(prices[type] * (1 + (percentage / 100)) * 100) / 100;
    prices[type] = newPrice;
  });
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
