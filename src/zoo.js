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
const { animals, employees, prices } = require('./data');

function animalsByIds(...ids) {
  return animals.filter(({ id }) => ids.includes(id));
}

function animalsOlderThan(animal, age) {
  const matchingAnimals = animals.find(element => element.name === animal);
  return matchingAnimals.residents.every(element => element.age > age);
}

function employeeByName(employeeName) {
  let result = { };
  employees.forEach((theEmployee, positionEmployee, list) => {
    if (theEmployee.firstName === employeeName || theEmployee.lastName === employeeName) {
      result = list[positionEmployee];
    }
  });
  return result;
}

function createEmployee(personalInfo, associatedWith) {
  return Object.assign(personalInfo, associatedWith);
}

function listManagers() {
  return data.employees
    .map(employee => employee.managers)
    .reduce((acc, val) => acc.concat(val), []);
}

function isManager(id) {
  const managersList = listManagers();
  return managersList.some(idManager => idManager === id);
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  if (!managers) { managers = []; }
  if (!responsibleFor) { responsibleFor = []; }
  employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  const animaisListaCont = { };
  animals.forEach((animal) => { animaisListaCont[animal.name] = animal.residents.length; });
  if (species) {
    return animaisListaCont[species];
  }
  return animaisListaCont;
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
  const funcRequerido = employees.find(employee => employee.id === id);
  const idPrimAnimal = funcRequerido.responsibleFor[0];
  const especAnimal = animals.find(animal => animal.id === idPrimAnimal);
  const arrayAnimais = especAnimal.residents;
  let idade = 0;
  for (let index = 0; index < Object.keys(arrayAnimais).length; index += 1) {
    if (arrayAnimais[index].age > idade) {
      idade = arrayAnimais[index].age;
    }
  }
  const founderAnimal = animals.find(animalZIN => animalZIN.name === especAnimal.name).residents;
  const fim = founderAnimal.find(creature => creature.age === idade);
  return [fim.name, fim.sex, fim.age];
}

function increasePrices(percentage) {
  prices.Adult = (Math.round((((percentage / 100) + 1) * prices.Adult) * 100)) / 100;
  prices.Child = (Math.round((((percentage / 100) + 1) * prices.Child) * 100)) / 100;
  prices.Senior = (Math.round((((percentage / 100) + 1) * prices.Senior) * 100)) / 100;
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
