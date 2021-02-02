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
  // seu código aqui
  const trackAnimals = ids.map((theId) => {
    const chosenAnimal = data.animals.find(creature => theId === creature.id);
    return chosenAnimal;
  });
  return trackAnimals;
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const listAnimal = data.animals.find(({ name }) => name === animal);
  return listAnimal.residents.every(animalAge => animalAge.age >= age);
}

function employeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) { return {}; }
  let choice = data.employees.find(helper => helper.firstName === employeeName);
  if (choice === undefined) {
    choice = data.employees.find(helper => helper.lastName === employeeName);
  }
  return choice;
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const newEmployee = {};
  Object.assign(newEmployee, personalInfo, associatedWith);
  return newEmployee;
}

function isManager(id) {
  // seu código aqui
  return data.employees.some(employ => employ.managers.some(manager => manager === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  // seu código aqui
  if (!species) {
    return data.animals.reduce(function (count, actualAnimal) {
      count[actualAnimal.name] = actualAnimal.residents.length;
      return count;
    }, {});
  }
  let vol;
  data.animals.forEach((eachAnimal) => {
    if (eachAnimal.name === species) vol = (eachAnimal.residents.length);
  });
  return vol;
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
