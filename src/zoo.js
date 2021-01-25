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

const { animals, employees, prices } = data;

function animalsByIds(...ids) {
  const animalsFound = [];
  ids.forEach((idSearched) => {
    animalsFound.push(...animals.filter(animal => animal.id === idSearched));
  });
  return animalsFound;
}

function animalsOlderThan(animalName, age) {
  const animalFound = animals.find(animal => animal.name === animalName);
  return animalFound.residents.every(animalResident => animalResident.age > age);
}

function employeeByName(employeeName) {
  const employeeFound = employees.find(
    employee => employee.firstName === employeeName || employee.lastName === employeeName);
  const employeeObj = { ...employeeFound };
  return employeeObj;
}

function createEmployee(personalInfo, associatedWith) {
  const newEmployee = { ...personalInfo, ...associatedWith };
  return newEmployee;
}

function isManager(id) {
  let isManagerFound = false;
  employees.forEach((employee) => {
    const isManagerKey = employee.managers.some(managersIdList => managersIdList === id);
    if (isManagerKey) { isManagerFound = true; }
  });
  return isManagerFound;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = { id, firstName, lastName, managers, responsibleFor };
  employees.push(newEmployee);
}

function animalCount(specie) {
  const animalsAndQuantity = {};
  animals.forEach((animal) => {
    animalsAndQuantity[animal.name] = animal.residents.length;
  });
  if (specie !== undefined) {
    return animalsAndQuantity[specie];
  }
  return animalsAndQuantity;
}

function entryCalculator(entrants) {
  let sum = 0;
  if (entrants !== undefined) {
    const entrantsKeys = Object.keys(entrants);
    entrantsKeys.forEach((entrantKey) => {
      sum += entrants[entrantKey] * prices[entrantKey];
    });
  }
  return sum;
}

function animalsByRegion() {
  const animalsObj = { NE: [], NW: [], SE: [], SW: [] };
  Object.keys(animalsObj).forEach((section) => {
    animalsObj[section] = animals.filter(animalFiltered => section === animalFiltered.location);
    animalsObj[section] = animalsObj[section].map(animal => animal.name);
  });
  return animalsObj;
}

function animalsOptionsSexTrue(animal, sex) {
  return animal.residents.filter(animalSex => {
    return animalSex.sex === sex}).map(animalName => animalName.name);
}

function animalsOptionsSexFalse(animal) {
  return animal.residents.map(animalName => animalName.name);
}

function applyOptions(animal, sex, sorted) {
  let breedsNames;
  if (sex) {
    breedsNames = animalsOptionsSexTrue(animal, sex);
  } else {
    breedsNames = animalsOptionsSexFalse(animal);
  }
  if (sorted) {
    breedsNames.sort();
  }
  return breedsNames;
}

function animalsByOptions({ includeNames = false, sorted = false, sex = false }) {
  let animalsObj = { NE: [], NW: [], SE: [], SW: [] };
  animals.forEach((animal) => {
    const breedsNames = applyOptions(animal, sex, sorted);
    const breedAndListNames = {};
    breedAndListNames[animal.name] = breedsNames;
    animalsObj[animal.location].push(breedAndListNames);
  });
  if (!includeNames) {
    animalsObj = animalsByRegion();
  }
  return animalsObj;
}

function animalMap(options) {
  if (!options) {
    return animalsByRegion();
  }
  return animalsByOptions(options);
}

function schedule(dayName) {
  // seu código aqui
}

function oldestFromFirstSpeciesByAge(residents) {
  let higherAge = 0;
  let olderResident;
  residents.forEach((resident) => {
    if (resident.age > higherAge) {
      olderResident = resident;
      higherAge = resident.age;
    }
  });
  return olderResident;
}

function oldestFromFirstSpecies(id) {
  const employeeFound = employees.find(employee => employee.id === id);
  const olderAnimalArray = [];
  employeeFound.responsibleFor.forEach((animalsId) => {
    const olderAnimal = animals.find(animal => animal.id === animalsId);
    olderAnimalArray.push(oldestFromFirstSpeciesByAge(olderAnimal.residents));
  });
  const mostOlder = oldestFromFirstSpeciesByAge(olderAnimalArray);
  return [mostOlder.name, mostOlder.sex, mostOlder.age];
}

function increasePrices(percentage) {
  Object.keys(prices).forEach((range) => {
    prices[range] = Math.round((prices[range] * ((100 + percentage) / 100)) * 100) / 100;
  });
  return prices;
}

function employeeCoverage(idOrName) {
  // const employeeFound = employees.filter((employee) => idOrName in employee);
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
