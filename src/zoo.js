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
// código jlfagundes

const { animals, employees } = require('./data');
const data = require('./data');

function animalsByIds(...ids) {
  // seu código aqui
  return animals.filter(animal => ids.some(id => animal.id === id));
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const animalType = animals.find(animalOlder => animalOlder.name === animal);
  return animalType.residents.every(value1 => value1.age > age);
}

function employeeByName(employeeName) {
  // seu código aqui
  let employeeFind = employees
    .find(value1 => value1.firstName === employeeName || value1.lastName === employeeName);
  if (!employeeName) employeeFind = {};
  return employeeFind;
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;
  return { id, firstName, lastName, managers, responsibleFor };
}

function isManager(id) {
  // seu código aqui
  return employees.some(employee => employee.managers.some(idEmployee => idEmployee === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  // seu código aqui
  if (!species) {
    const objAnimal = {};
    animals.forEach(animal => (objAnimal[animal.name] = animal.residents.length));
    return objAnimal;
  }
  return animals.filter(animal => animal.name === species)[0].residents.length;
}

function entryCalculator(entrants) {
  //  seu código aqui
  //  if (!entrants) return 0;
  //  if (entrants = {}) return 0;
  //  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  //  return (Adult * data.prices.Adult) + (Child * data.prices.Child) +
  //  (Senior * data.prices.Senior);
}

function animalMap(options) {
  // seu código aqui
  // a função retorna um objeto
  // a função recebe um objeto
  // esse objeto possui a seguinte entrada chave=localização e valor=array
}

function schedule(dayName) {
  // seu código aqui
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
  const findId = data.employees.find(employee => employee.id === id).responsibleFor[0];
  const findAnimal = data.animals.find(animal => animal.id === findId).residents
    .sort((value1, value2) => value2.age - value1.age)[0];
  return [findAnimal.name, findAnimal.sex, findAnimal.age];
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
