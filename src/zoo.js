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

const { employees, animals, prices } = data;

function animalsByIds(...ids) {
  if (!ids) return [];
  return animals.filter(({ id }, index) => id === ids[index]);
}

function animalsOlderThan(animal, age) {
  return animals.find(({ name }) => name === animal).residents.every(bigger => bigger.age > age);
}

function employeeByName(employeeName) {
  if (!employeeName) return {};
  return employees.find(({ firstName, lastName }) =>
  firstName === employeeName || lastName === employeeName);
}

function createEmployee({ id, firstName, lastName }, { managers, responsibleFor }) {
  return { id, firstName, lastName, managers, responsibleFor };
}

function isManager(id) {
  return employees.some(({ managers }, index) => id === managers[index]);
}

function addEmployee(id, firstName, lastName, managers = []
, responsibleFor = []) {
  const newPerson = { id, firstName, lastName, managers, responsibleFor };
  return employees.push(newPerson);
}

function animalCount(species) {
  if (!species) {
    const obj = {};
    animals.forEach((element) => {
      obj[element.name] = element.residents.length;
    });
    return obj;
  }
  return animals.filter(item => species === item.name)[0].residents.length;
}

function entryCalculator(entrants = {}) {
  if (Object.values(entrants).length === 0) return 0;
  return Object.keys(entrants)
    .reduce((acc, curr) => acc + (entrants[curr] * prices[curr]), 0);
}

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {

}

function oldestFromFirstSpecies(ident) {
  const employ = employees.find(({ id }) => id === ident).responsibleFor[0];
  const anima = animals.find(({ id }) => id === employ).residents;
  const objResult = anima.reduce((acc, curr) => (curr.age <= acc.age ? acc : curr));
  return Object.values(objResult);
}

function increasePrices(percentage) {
  Object.keys(prices).forEach((element) => {
    const priceAtual = Math.round(prices[element] * (1 + (percentage / 100)) * 100) / 100;
    prices[element] = priceAtual;
  });
  return prices;
}

function someEmployeeCover(obj, nameOrId) {
  const pessoa = employees.find(person =>
    nameOrId === person.id || nameOrId === person.firstName || nameOrId === person.lastName);
  const fullName = `${pessoa.firstName} ${pessoa.lastName}`;
  const personFind = { [fullName]: obj[fullName] };
  return personFind;
}

function employeeCoverage(idOrName) {
  const employeeObj = {};
  employees.forEach(person => (employeeObj[`${person.firstName} ${person.lastName}`] =
    [...person.responsibleFor].map(idOf => animals.find(({ id }) => id.includes(idOf)).name)));
  if (!idOrName) {
    return employeeObj;
  }
  return someEmployeeCover(employeeObj, idOrName);
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
