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

const { animals } = data;
const { employees } = data;

const animalsByIds = (...ids) => animals.filter(animal => ids.includes(animal.id));

const getAnimalByName = animalName => animals.find(animal => animal.name === animalName);

const animalsOlderThan = (animal, age) => {
  const { residents } = getAnimalByName(animal);
  return residents.every(resident => resident.age >= age);
};

const employeeByName = (employeeName) => {
  const foundEmployee = employees.find(
    employee => employee.firstName === employeeName || employee.lastName === employeeName);
  return { ...foundEmployee };
};

const createEmployee = (personalInfo, associatedWith) => ({ ...personalInfo, ...associatedWith });

// const getEmployeeById = id => employees.find(employee => employee.id === id);

const isManager = (id) => {
  const managersIds = employees.reduce((acc, current) => [...acc, ...current.managers], []);
  return managersIds.includes(id);
};

const addEmployee = (id, firstName, lastName, managers = [], responsibleFor = []) => {
  employees.push({ id, firstName, lastName, managers, responsibleFor });
};

const animalCount = (species) => {
  let countReport = animals.reduce((accObject, current) => {
    accObject[current.name] = current.residents.length;
    return accObject;
  }, {});
  if (Object.keys(countReport).includes(species)) countReport = countReport[species];
  return countReport;
};

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
