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
  if (ids.length === 0) return [];
  return data.filter(({ id }, index) => id === ids[index]);
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const animalsFiltred = data.find(({ name }) => name === animal);
  return animalsFiltred.residents.every(resident => resident.age >= age);
}

function employeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) return {};
  return data.find(
    ({ firstName, lastName }) =>
      firstName === employeeName || lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return Object.assign(personalInfo, associatedWith);
}

function isManager(idEmployee) {
  return data.some(
    ({ managers }, index) => managers[index] === idEmployee);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return data.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  // seu código aqui
  if (!species) {
    return data.reduce((acc, current) => {
      acc[current.name] = current.residents.length;
      return acc;
    }, { });
  }
  return data.find(({ name }) => name === species).residents.length;
}

function entryCalculator(entrants) {
  // seu código aqui
  if (!entrants) return 0;
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  return (Adult * data.Adult) + (Child * data.Child) + (Senior * data.Senior);
}

// auxiliary function of animalMap()
const getNamesAnimalsForLocation = (accumulator, currentValue) => {
  accumulator[currentValue.location] = data
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
  // seu código aqui
  if (!options || !options.includeNames) {
    return data.reduce(getNamesAnimalsForLocation, {});
  }
  const { sorted = false, sex = '' } = options;
  return data.reduce((acc, current) => {
    acc[current.location] = data
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
  const idAnimalResponsable = data.find(({ id }) => id === idEmployee).responsibleFor[0];
  const specie = data.find(({ id }) => id === idAnimalResponsable);
  const agesOfResidentsOfSpecieFind = specie.residents
    .map(animal => animal.age)
    .sort((a, b) => a - b);
  const animalOldFind = specie.residents.find(
    ({ age }) => age ===
      agesOfResidentsOfSpecieFind[agesOfResidentsOfSpecieFind.length - 1]);
  return Object.values(animalOldFind);
}

function increasePrices(percentage) {
  // seu código aqui
  Object.keys(data).forEach((key) => {
    data[key] = (Math.round(data[key] * percentage) + (data[key] * 100)) / 100;
  });
  return data;
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
