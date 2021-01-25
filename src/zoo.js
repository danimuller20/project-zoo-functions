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
const { animals } = require('./data');
const { employees } = require('./data');


function animalsByIds(...ids) {
  const animalsList = [];
  if (ids.length > 0) {
    ids.forEach((listedId) => {
      const foundAnimal = animals.find(animal => animal.id === listedId);
      animalsList.push(foundAnimal);
    });
    return animalsList;
  }
  return animalsList;
}


function animalsOlderThan(animal, age) {
  const givenSpecies = animals.find(species => species.name === animal);
  const everyAnimalHasMinimalAge = givenSpecies.residents.every(resident => resident.age >= age);
  return everyAnimalHasMinimalAge;
}
// duvida pq com !== null dá problema mas com !== null n da
function employeeByName(employeeName) {
  const nada = {};
  if (employeeName !== undefined) {
    const employeeObject = employees.find(employee => employee.firstName === employeeName ||
      employee.lastName === employeeName);
    return employeeObject;
  }
  return nada;
}


function createEmployee({ id, firstName, lastName }, { managers, responsibleFor }) {
  return {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
}

function isManager(id) {
  let trueOrFalse;
  employees.find((employee) => {
    employee.managers.forEach(managerId => managerId === id ? trueOrFalse = true
      : trueOrFalse = false;);
  });
  return trueOrFalse;
}
// console.log(isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83'))

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push(
    {
      id,
      firstName,
      lastName,
      managers,
      responsibleFor,
    },
  );
}

function animalCount(species) {
  if (species !== undefined) {
    const numberForSpecies = animals.find(animal => animal.name === species).residents.length;
    return numberForSpecies;
  }
  const quantityObject = {};
  animals.forEach((animal) => {
    quantityObject[animal.name] = animal.residents.length;
  });
  return quantityObject;
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
