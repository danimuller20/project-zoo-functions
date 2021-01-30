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

// const { animals } = require('./data');
const data = require('./data');

function animalsByIds(args) {
  // if (args.length === 0) return [];

  // const array = [];

  // args.forEach((cadaElemento) => {
  //   return animals.map((item) => {
  //     if (item.id === cadaElemento) {
  //       array.push(item);
  //     }
  //   })});

  // return array;
}

function animalsOlderThan(especie, age) {
  const bixo = data.animals.find(animal => animal.name === especie);
  const idade = bixo.residents.map(item => item.age >= age);
  const resultado = idade.find(item => item === false);

  if (resultado === undefined) {
    return true;
  } return resultado;
}

function employeeByName(employeeName) {
  // seu código aqui
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
}

function isManager(id) {
  // seu código aqui
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function animalCount(species) {
  // seu código aqui
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
