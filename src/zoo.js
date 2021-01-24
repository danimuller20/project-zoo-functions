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

function animalsByIds(...ids) {
  switch (ids.length) {
    case 0: {
      return [];
    }
    case 1: {
      const animalFind = [data.animals.find(animal => animal.id === ids[0])];
      return animalFind;
    }
    default: {
      return data.animals.filter(animal => ids.find(id => animal.id === id));
    }
  }
}

function animalsOlderThan(animal, age) {
  const animalSpecies = data.animals.find(species => species.name === animal);
  return animalSpecies.residents.every(minimalAge => minimalAge.age > age);
}

function employeeByName(employeeName) {
  if (!employeeName) return {};

  const firstName = data.employees.find(name => name.firstName === employeeName);
  const lastName = data.employees.find(name => name.lastName === employeeName);

  return firstName || lastName;
}

function createEmployee(personalInfo, associatedWith) {
  return Object.assign(personalInfo, associatedWith);
}

function isManager(id) {
  return data.employees.some(employee => employee.managers.find(managerId => managerId === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = { id, firstName, lastName, managers, responsibleFor };
  data.employees = data.employees.concat(newEmployee);
}

function animalCount(species) {
  if (!species) {
    return data.animals.reduce((prev, cur) => {
      prev[cur.name] = cur.residents.length;
      return prev;
    }, {});
  }
  let qtd = 0;
  data.animals.forEach((animal) => {
    if (animal.name === species) {
      qtd = animal.residents.length;
    }
  });
  return qtd;
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
