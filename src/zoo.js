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

const { animals, employees, prices } = require('./data');
const data = require('./data');

function animalsByIds(...ids) {
  // seu código aqui
  const animalsFilterId = [];
  ids.forEach((idAnimal) => {
    animalsFilterId.push(...animals.filter(value => value.id === idAnimal));
  });
  return animalsFilterId;
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const findAnimal = animals.find(valueAnimal => valueAnimal.name === animal);
  return findAnimal.residents.every(ageAnimal => ageAnimal.age >= age);
}

function employeeByName(employeeName) {
  // seu código aqui
  const employeeFound = employees.find(
    employee => employee.firstName === employeeName || employee.lastName === employeeName);
  const employeeObj = { ...employeeFound };
  return employeeObj;
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const returnEmployee = personalInfo;
  returnEmployee.managers = associatedWith.managers;
  returnEmployee.responsibleFor = associatedWith.responsibleFor;
  return returnEmployee;
}

function isManager(id) {
  // seu código aqui
  let verify = false;
  employees.forEach((valueId) => {
    const verifyManagers = valueId.managers.some(value => value === id);
    if (verifyManagers) { verify = true; }
  });
  return verify;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const addObject = { id, firstName, lastName, managers, responsibleFor };
  employees.push(addObject);
}

function animalCount(species) {
  // seu código aqui
  const objAnimalCount = {};
  if (!species) {
    animals.forEach((objAnimal) => {
      const objNamePopulation = {
        [objAnimal.name]: objAnimal.residents.length,
      };
      Object.assign(objAnimalCount, objNamePopulation);
    });
    return objAnimalCount;
  }
  return animals.find(element => element.name === species).residents.length;
}

function entryCalculator(entrants) {
  // seu código aqui
  if (!entrants || entrants === {}) {
    return 0;
  }
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  const sumPrice = (Adult * prices.Adult) + (Child * prices.Child) + (Senior * prices.Senior);
  return sumPrice;
}

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  // seu código aqui
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
  let higherAge = 0;
  const firstSpeciesId = employees.find(element => element.id === id).responsibleFor[0];
  const speciesResidents = animals.find(elemt => elemt.id === firstSpeciesId).residents;
  speciesResidents.forEach((element) => {
    if (element.age > higherAge) {
      higherAge = element.age;
    }
  });
  const oldestAnimal = speciesResidents.find(element => element.age === higherAge);
  const resultAnimal = Object.values(oldestAnimal);
  return resultAnimal;
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
