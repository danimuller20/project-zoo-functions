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

const { prices } = require('./data');
const data = require('./data');

const { animals } = data;
const { employees } = data;

function animalsByIds(...ids) {
  if (ids.length === 0) return [];
  return animals.filter(({ id }, index) => id === ids[index]);
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
    ({ managers }, index) => managers[index] === idEmployee);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  if (!species) {
    return animals.reduce((acc, current) => {
      acc[current.name] = current.residents.length;
      return acc;
    }, { });
  }
  return animals.find(({ name }) => name === species).residents.length;
}

function entryCalculator(entrants) {
  if (!entrants) return 0;
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  return Adult * prices.Adult + Child * prices.Child + Senior * prices.Senior;
}

const getNamesAnimalsForLocation = (accumulator, currentValue) => {
  accumulator[currentValue.location] = animals
    .filter(({ location }) => location === currentValue.location)
    .map((animal) => animal.name);
  return accumulator;
};

const getAnimalForSex = (objAnimal, currentAnimal, sex, sorted) => {
  const animalForSex = currentAnimal.residents
    .filter((resident) => resident.sex === sex)
    .map((resident) => resident.name);
  if (!sorted) {
    objAnimal[currentAnimal.name] = animalForSex;
  } else {
    objAnimal[currentAnimal.name] = animalForSex.sort();
  }
};

function animalMap(options) {
  if (!options) {
    return animals.reduce(getNamesAnimalsForLocation, {});
  }
  const { includeNames = false, sorted = false, sex = "" } = options;
  if (includeNames) {
    return animals.reduce((acc, current) => {
      acc[current.location] = animals
        .filter(({ location }) => location === current.location) // objeto da especie
        .reduce((accAnimal, currentAnimal) => {
          const objAnimal = {};
          if (sorted) {
            if (sex !== "") {
              getAnimalForSex(objAnimal, currentAnimal, sex, sorted);
            } else {
              const animalForSex = currentAnimal.residents
                .map((resident) => resident.name)
                .sort();
              objAnimal[currentAnimal.name] = animalForSex;
            }
          } else {
            if (sex !== "") {
              getAnimalForSex(objAnimal, currentAnimal, sex, sorted);
            } else {
              objAnimal[currentAnimal.name] = currentAnimal.residents.map(
                (resident) => resident.name
              );
            }
          }
          accAnimal.push(objAnimal);
          return accAnimal;
        }, []);
      return acc;
    }, {});
  }
  return animals.reduce(getNamesAnimalsForLocation, {});
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
