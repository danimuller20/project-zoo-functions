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
  return animals.filter(animal => ids.find(id => id === animal.id));
}

function animalsOlderThan(animal, age) {
  return animals.some(({ name, residents }) =>
    name === animal && residents.every(({ age: animalAge }) => animalAge >= age));
}

function employeeByName(employeeName) {
  if (employeeName === undefined) return {};
  return employees.find(({ firstName, lastName }) =>
    employeeName === firstName || employeeName === lastName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some(({ managers }) => managers.find(managerId => managerId === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  if (species === undefined) {
    return animals.reduce(((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      return acc;
    }), {});
  }
  const animal = animals.find(({ name }) => name === species);
  return animal.residents.length;
}

function entryCalculator(entrants) {
  if ((entrants === undefined) || (Object.keys(entrants).length === 0)) {
    return 0;
  }
  const entrantsArray = Object.entries(entrants);
  let entryPrice = 0;
  entrantsArray.forEach((element) => {
    if (element[0] === 'Adult') {
      entryPrice += prices.Adult * element[1];
    } else if (element[0] === 'Child') {
      entryPrice += prices.Child * element[1];
    } else if (element[0] === 'Senior') {
      entryPrice += prices.Senior * element[1];
    }
  });
  return entryPrice;
}

const getZooLocation = (acc, curr) => {
  acc[curr.location] = animals.filter(({ location }) =>
    location === curr.location).map(({ name }) => name);
  return acc;
};

function animalMap(options) {
  const zooMap = animals.reduce(getZooLocation, {});
  const zooLocations = Object.keys(zooMap);
  if (options === undefined) {
    return zooMap;
  }
  if ((options.includeNames) && (options.sex === undefined)) {
    zooLocations.forEach((key) => {
      zooMap[key].forEach((animal, index) => {
        zooMap[key][index] = {
          [animal]: animals.find(({ name }) =>
          name === animal).residents.map(({ name }) => name),
        };
      });
    });
  }
  if ((options.includeNames) && (options.sex)) {
    zooLocations.forEach((key) => {
      zooMap[key].forEach((animal, index) => {
        zooMap[key][index] = {
          [animal]: animals.find(({ name }) =>
          name === animal).residents.filter(({ sex }) =>
          sex === options.sex).map(({ name }) => name),
        };
      });
    });
  }
  if ((options.includeNames) && (options.sorted)) {
    zooLocations.forEach((key) => {
      zooMap[key].forEach((animal) => {
        Object.keys(animal).forEach((key2) => { animal[key2].sort(); });
      });
    });
  }
  return zooMap;
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
