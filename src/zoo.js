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
const { prices } = require('./data');
const { animals } = require('./data');
const { employees } = require('./data');

function animalsByIds(...ids) {
  if (ids.length === 0) return [];
  return animals.filter(({ id }, i) => id === ids[i]);
}

function animalsOlderThan(animal, age) {
 
  const animalsFiltred = animals.find(({ name }) => name === animal);
  return animalsFiltred.residents.every(resident => resident.age >= age);
}

function employeeByName(employeeName) {
 
  if (!employeeName) return {};
  return employees.find(
    ({ firstName, lastName }) =>
      firstName === employeeName || lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
 
  return Object.assign(personalInfo, associatedWith);
}

function isManager(idEmployee) {
  return employees.some(
    ({ managers }, i) => managers[i] === idEmployee);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
 
  if (!species) {
    return animals.reduce((acr, current) => {
      acr[current.name] = current.residents.length;
      return acr;
    }, { });
  }
  return animals.find(({ name }) => name === species).residents.length;
}

function entryCalculator(entrants) {
 
  if (!entrants) return 0;
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  return (Adult * prices.Adult) + (Child * prices.Child) + (Senior * prices.Senior);
}

// auxiliary function of animalMap()
const getNamesAnimalsForLocation = (accumulator, currentValue) => {
  accumulator[currentValue.location] = animals
    .filter(({ location }) => location === currentValue.location)
    .map(animal => animal.name);
  return accumulator;
};

// auxiliary function of animalMap()
const sortedNamesOrGetForSex = (accAnimal, currentAnimal, sex, sorted) => {
  const objAnimal = {};
  const animalForSex = currentAnimal.residents
    .filter(resident => (sex === '' ? true : resident.sex === sex))
    .map(resident => resident.name);
  objAnimal[currentAnimal.name] = animalForSex;
  if (sorted) {
    objAnimal[currentAnimal.name].sort();
  }
  accAnimal.push(objAnimal);
  return accAnimal;
};

function animalMap(options) {
 
  if (!options || !options.includeNames) {
    return animals.reduce(getNamesAnimalsForLocation, {});
  }
  const { sorted = false, sex = '' } = options;
  return animals.reduce((acc, current) => {
    acc[current.location] = animals
      .filter(({ location }) => location === current.location)
      .reduce(
        (accAnimal, currentAnimal) =>
          sortedNamesOrGetForSex(accAnimal, currentAnimal, sex, sorted), []);
    return acc;
  }, {});
}

function schedule(dayName) {

}

function oldestFromFirstSpecies(idEmployee) {
  const idAnimalResponsable = employees.find(({ id }) => id === idEmployee).responsibleFor[0];
  const specie = animals.find(({ id }) => id === idAnimalResponsable);
  const agesOfResidentsOfSpecieFind = specie.residents
    .map(animal => animal.age)
    .sort((a, b) => a - b);
  const animalOldFind = specie.residents.find(
    ({ age }) => age ===
      agesOfResidentsOfSpecieFind[agesOfResidentsOfSpecieFind.length - 1]);
  return Object.values(animalOldFind);
}

function increasePrices(percentage) {
 
  Object.keys(prices).forEach((key) => {
    prices[key] = (Math.round(prices[key] * percentage) + (prices[key] * 100)) / 100;
  });
  return prices;
}

function employeeCoverage(idOrName) {
 
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
