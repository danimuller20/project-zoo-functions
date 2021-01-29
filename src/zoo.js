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

const { animals } = require('./data');
const data = require('./data');

function animalsByIds(...ids) {
  // seu código aqui
  return animals.filter(animal => ids.includes(animal.id));
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const requiredSpecie = animals.find(anm => anm.name === animal);
  const residents = requiredSpecie.residents;
  const olderAnimals = residents.filter(currAnimal => currAnimal.age > age);
  return olderAnimals.length === residents.length;
}

function employeeByName(employeeName) {
  // seu código aqui
  const foundEmployee = data.employees.find(({ firstName, lastName }) =>
  firstName === employeeName || lastName === employeeName);

  return employeeName ? foundEmployee : {};
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return ({ ...personalInfo, ...associatedWith });
}

function isManager(id) {
  // seu código aqui
  return data.employees.filter(employee =>
  employee.managers.includes(id)).length > 0;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  // seu código aqui
  if (species) {
    const foundAnimal = animals.find(animal => animal.name === species);
    const amount = foundAnimal.residents.length;
    return amount;
  }

  return animals.reduce((acc, curr) => {
    acc[curr.name] = curr.residents.length; return acc;
  }, {});
}

const invalidEntry = entrants =>
  (!entrants) || (Object.keys(entrants).length === 0);

function entryCalculator(entrants) {
  // seu código aqui
  if (invalidEntry(entrants)) return 0;
  const prices = data.prices;
  const total = Object.entries(entrants)
  .reduce((acc, [kindOfTicket, amount]) => acc + (prices[kindOfTicket] * amount), 0);

  return total;
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
  if (!idOrName) return withoutIdOrName();
  return withIdOrName(idOrName);
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
