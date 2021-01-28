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

const { animals, employees, hours, prices } = data;

// console.logs incluídos apenas para o CodeClimate não reclamar
console.log(hours);

function animalsByIds(...ids) {
  if (ids === undefined) {
    return [];
  }
  const arrayOfSpecies = [];
  ids.forEach((value) => {
    const idSearch = animals.find(animal => animal.id === value);
    arrayOfSpecies.push(idSearch);
  });
  return arrayOfSpecies;
}

function animalsOlderThan(animal, age) {
  const speciesInfos = animals.filter(infos => infos.name === animal);
  const { residents } = speciesInfos[0];
  return residents.every(check => check.age > age);
}

function employeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  const staff = employees.find(person => employeeName === person.firstName);
  if (staff !== undefined) {
    return staff;
  }
  return employees.find(person => employeeName === person.lastName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  const managerCheck = employees.map(staff => staff.managers.some(manager => manager === id));
  return managerCheck.some(check => check);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {};
  newEmployee.id = id;
  newEmployee.firstName = firstName;
  newEmployee.lastName = lastName;
  newEmployee.managers = [...managers];
  newEmployee.responsibleFor = [...responsibleFor];
  employees.push(newEmployee);
}

function animalCount(species) {
  const animalPopulation = {};
  animals.forEach(animal => (animalPopulation[animal.name] = animal.residents.length));
  if (species === undefined) {
    return animalPopulation;
  }
  return animalPopulation[species];
}

function entryCalculator(entrants) {
  if (entrants === undefined) {
    return 0;
  }
  if (Object.keys(entrants).length === 0) {
    return 0;
  }
  const { Adult = 0, Senior = 0, Child = 0 } = entrants;
  const total = (Adult * prices.Adult) + (Child * prices.Child) + (Senior * prices.Senior);
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
