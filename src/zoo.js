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

const { animals, employees } = require('./data');
const data = require('./data');

function animalsByIds(...ids) {
  // seu código aqui
  return ids.map(id => animals.find(animal => animal.id === id));
}


function animalsOlderThan(animal, age) {
  // seu código aqui
  const animalFound = animals.find(animalFind => animalFind.name === animal);
  const animalAge = animalFound.residents.every(animalResident => animalResident.age > age);
  return animalAge;
}

function employeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) {
    return {};
  }
  const id = employees.find(ppl =>
  (ppl.firstName === employeeName || ppl.lastName === employeeName));
  return id;
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return ({ ...personalInfo, ...associatedWith });
}

function isManager(id) {
  // seu código aqui
  return data.employees.some(ppl => ppl.managers.find(ids => ids === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  // seu código aqui
  if (species !== undefined) {
    return animals.find(animal => animal.name === species).residents.length;
  }
  const result = {};
  animals.forEach((animal) => {
    result[animal.name] = animal.residents.length;
  });
  return result;
}

function entryCalculator(entrants) {
  // seu código aqui
  const zero = 0;
  if (!entrants) {
    return zero;
  }
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  return (Adult * data.prices.Adult) + (Child * data.prices.Child) + (Senior * data.prices.Senior);
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
  const adult = Math.round(data.prices.Adult * percentage) / 100;
  const senior = Math.round(data.prices.Senior * percentage) / 100;
  const child = Math.round(data.prices.Child * percentage) / 100;
  data.prices.Adult = Number.parseFloat((data.prices.Adult + adult).toPrecision(4));
  data.prices.Senior = Number.parseFloat((data.prices.Senior + senior).toPrecision(4))
  data.prices.Child = Number.parseFloat((data.prices.Child + child).toPrecision(4))
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
