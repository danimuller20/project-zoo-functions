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

// commit inicial

const data = require('./data');

const { animals, employees } = data;

function animalsByIds(...ids) {
  return animals.filter(animal => ids.find(id => id === animal.id));
}

function animalsOlderThan(animal, age) {
  return animals.find(anml => anml.name === animal).residents.every(anim => anim.age >= age);
}

function employeeByName(employeeName) {
  const employee = employees
  .find(mply => employeeName === mply.firstName || employeeName === mply.lastName);
  const employeeObj = { ...employee };
  return employeeObj;
}

function createEmployee(personalInfo, associatedWith) {
  const employeeObj = {};
  employeeObj.id = personalInfo.id;
  employeeObj.firstName = personalInfo.firstName;
  employeeObj.lastName = personalInfo.lastName;
  employeeObj.managers = associatedWith.managers;
  employeeObj.responsibleFor = associatedWith.responsibleFor;

  return employeeObj;
}

function isManager(searchId) {
  return employees.find(employee => employee.id === searchId).managers.length === 1;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };

  employees.push(newEmployee);
}

function animalCount(species) {  
  if (species) {
    return animals.find(animal => animal.name === species).residents.length;
  };
  
  const allAnimals = animals.reduce((objAnimal, currAnimal) => {
    objAnimal[currAnimal.name] = currAnimal.residents.length;
    return objAnimal;
  }, {});
  return allAnimals;
}

function entryCalculator(entrants) {
  
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
