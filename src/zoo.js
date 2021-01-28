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

const { employees, prices } = require('./data');
const data = require('./data');

function animalsByIds(...ids) {
  return data.animals.filter(animal => ids.includes(animal.id));
}

function animalsOlderThan(animal, age) {
  return data.animals.find(array => array.name === animal)
  .residents.every(array2 => array2.age >= age);
}

function employeeByName(employeeName) {
  if (employeeName === undefined) return {};
  return employees.find(emp => emp.firstName === employeeName || emp.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return ({ ...personalInfo, ...associatedWith });
}

function isManager(id) {
  return employees.some(employ => employ.managers.some(employ1 => employ1 === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  if (species === undefined) {
    return data.animals.reduce((accumulator, currentValue) => {
      accumulator[currentValue.name] = currentValue.residents.length;
      return accumulator;
    }, {});
  }
  return data.animals.find(animal => animal.name === species).residents.length;
}

function entryCalculator(entrants) {
  if (entrants === undefined || Object.entries(entrants).length === 0) return 0;
  return Object.keys(entrants)
  .reduce((accumulator, currentValue) =>
    accumulator + (entrants[currentValue] * prices[currentValue]), 0);
}
// https://pt.stackoverflow.com/questions/83588/em-javascript-como-verificar-que-um-objeto-est%C3%A1-vazio-sem-jquery

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {

}

function oldestFromFirstSpecies(id) {
  const employObject = data.employees.find(employ => employ.id === id);
  const animalObject = data.animals.find(animal => animal.id === employObject.responsibleFor[0]);
  const { residents } = animalObject;
  const newArray = residents.reduce((accumulator, currentValue) => {
    if (accumulator.age > currentValue.age) {
      return accumulator;
    }
    return currentValue;
  });
  return Object.values(newArray);
}
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/values


function increasePrices(percentage) {
  const adulto = prices.Adult + (prices.Adult * (percentage / 100));
  const crianca = prices.Child + (prices.Child * (percentage / 100));
  const idoso = prices.Senior + (prices.Senior * (percentage / 100));
  prices.Adult = Math.round(adulto * 100) / 100;
  prices.Child = Math.round(crianca * 100) / 100;
  prices.Senior = Math.round(idoso * 100) / 100;
  return prices;
}

function employeeCoverage(idOrName) {

}

// Sem parâmetros, retorna uma lista de funcionários e os animais pelos quais eles são responsáveis
// Com o id de um funcionário, retorna os animais pelos quais o funcionário é responsável
// Com o primeiro nome de um funcionário, retorna os animais pelos quais o funcionário é responsável
// Com o último nome de um funcionário, retorna os animais pelos quais o funcionário é responsável


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
