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
const { animals, prices, hours } = require('./data');
const { employees } = require('./data');

function animalsByIds(...ids) {
  // seu código aqui
  const foundAnimals = ids.map((actualId) => {
    const foundAnimal = data.animals.find(animal => actualId === animal.id);
    return foundAnimal;
  });
  return foundAnimals;
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const animalObj = animals.find(({ name }) => name === animal);
  return animalObj.residents.every(elementAge => elementAge.age >= age);
}

function employeeByName(employeeName) {
  // seu código aqui
  const result = {};
  if (employeeName === undefined) {
    return result;
  }
  const findName = employees.find((element) => {
    if (element.firstName === employeeName || element.lastName === employeeName) {
      return element;
    }
    return false;
  });
  return findName;
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const newPerson = { ...personalInfo, ...associatedWith };
  return newPerson;
}

function isManager(id) {
  // seu código aqui
  return employees.some(manager => manager.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aquii
  const newEmployee = { id, firstName, lastName, managers, responsibleFor };
  employees.push(newEmployee);
}

function animalCount(species) {
  // seu código aqui\
  const verifyAnimal = animals.reduce(function (accumulator, animal) {
    accumulator[animal.name] = animal.residents.length;
    return accumulator;
  }, {});
  if (species !== undefined) {
    return verifyAnimal[species];
  }
  return verifyAnimal;
}

function entryCalculator(entrants = {}) {
  // seu código aqui
  return Object.entries(entrants).reduce((acc, [categ, quant]) => acc + (prices[categ] * quant), 0);
}

function getSpecieByName(specieName) {
  return animals.find(specie => specie.name === specieName);
}

function getSpecieResidentsName(specieName, sorted, sex) {
  let residents = getSpecieByName(specieName).residents;
  if (sex) residents = residents.filter(resident => resident.sex === sex);
  const names = residents.map(resident => resident.name);
  if (sorted) names.sort();
  return { [specieName]: names };
}

function animalMap(options = {}) {
  // seu código aqui
  const { includeNames = false, sorted = false, sex } = options;
  const results = animals.reduce((acc, { name, location }) => {
    if (!acc[location]) acc[location] = [];
    acc[location].push(name);
    return acc;
  }, {});
  if (includeNames) {
    return Object.entries(results).reduce((acc, [key, animalNames]) => {
      acc[key] = animalNames.map(animalName => getSpecieResidentsName(animalName, sorted, sex));
      return acc;
    }, {});
  }
  return results;
}

function schedule(dayName) {
  // seu código aqui
  const result = Object.entries(hours).reduce((acc, [key, val]) => {
    const { open, close } = val;
    acc[key] = close - open > 0 ? `Open from ${open}am until ${close % 12}pm` : 'CLOSED';
    return acc;
  }, {});
  if (dayName !== undefined) return { [dayName]: result[dayName] };
  return result;
}

function employeeById(id) {
  return employees.find(employee => employee.id === id);
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
  const employee = employeeById(id);
  const [specie] = animalsByIds(employee.responsibleFor[0]);
  const oldest = specie.residents.reduce((acc, value) => {
    if (acc.age > value.age) {
      return acc;
    }
    return value;
  });
  return Object.values(oldest);
}

function increasePrices(percentage) {
  // seu código aqui
  Object.entries(prices).forEach(([category, price]) => {
    const newPrice = price * (1 + (percentage / 100));
    prices[category] = Math.round(newPrice * 100) / 100;
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
