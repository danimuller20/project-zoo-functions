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

// Esta função serve para busca das espécies de animais por id.
// Deve retornar um array de objeto com as informações dos animais.
// Aceita mais de um parâmetro em sua chamada
// Caso receba nenhum parâmetro, necessário retornar um array vazio
function animalsByIds(...ids) {
  // PESEUDOCÓDIGO
  // 1. Acessar animals e conferir parâmetro está de acordo com algum id
  // 2. Capturar o objeto do animal
  // 3. Enviar objeto para um array
  const array = [];
  animals.forEach((value) => {
    if (ids.includes(value.id)) {
      array.push(value);
    }
  });
  return array;
}
function animalsOlderThan(animal, age) {
  return animals.find(value => value.name === animal).residents.every(idade => idade.age > age);
}

function employeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  return employees
  .find(value => value.firstName === employeeName || value.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some((value, index) => value.managers[index] === id);
}


function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  const obj = {};
  animals.forEach(({ name, residents }) => {
    obj[name] = residents.length;
  });
  return species ? obj[species] : obj;
}

function entryCalculator(entrants) {
  if (!entrants) {
    return 0;
  }
  let result = 0;
  const value = Object.values(entrants);
  const persons = Object.keys(entrants);
  persons.forEach((person, index) => {
    result += prices[person] * value[index];
  });
  return result;
}

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  const obj = {};
  const array = Object.keys(hours);
  array.forEach((day) => {
    const { open, close } = hours[day];
    if (day === 'Monday') {
      obj[day] = 'CLOSED';
    } else {
      obj[day] = `Open from ${open}am until ${close % 12}pm`;
    }
  });
  return dayName ? { [dayName]: obj[dayName] } : obj;
}

function oldestFromFirstSpecies(id) {
  const animal = employees
  .find(ids => ids.id === id).responsibleFor[0];
  const residents = animals
  .find(value => value.id === animal).residents;
  return Object.values(residents.reduce((acc, curr) => {
    if (curr.age > acc.age) {
      acc = curr;
    }
    return acc;
  }));
}

function increasePrices(percentage) {
  return Object.keys(prices).forEach((value) => {
    prices[value] = Math.round((prices[value] * percentage) + (prices[value] * 100)) / 100;
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
