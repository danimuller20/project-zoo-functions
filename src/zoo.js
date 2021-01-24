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
  // seu código aqui
  const animalsFind = [];
  ids.forEach(id => animalsFind.push(animals.find(animal => animal.id === id)));
  return animalsFind;
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const animalsBySpecies = animals.find(element => element.name === animal).residents;
  return animalsBySpecies.every(element => element.age >= age);
}

function employeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) { return {}; }
  return employees.find(person => person.firstName === employeeName ||
  person.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;
  return {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
}

function isManager(id) {
  // seu código aqui
  const managersArray = [];
  employees.forEach(elementArray => managersArray.push(elementArray.managers));
  return managersArray.some(element => element.includes(id));
}

// function isManager(id) {
//   // seu código aqui
//   const managersStatus = [];
//   employees.forEach(element => {
//     for (let manager of element.managers) {
//       managersStatus.push(manager);
//     }
//   });
//   return managersStatus.some(managerId => managerId === id);
// }

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  return employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  // seu código aqui
  if (species) {
    const specieArray = animals.find(animal => animal.name === species);
    return specieArray.residents.length;
  }
  const animalsCount = {};
  animals.forEach(animal => (animalsCount[animal.name] = animal.residents.length));
  return animalsCount;
}

const sumIfNotUndefined = (adult, child, senior) => {
  const adultSum = adult ? adult * prices.Adult : 0;
  const childSum = child ? child * prices.Child : 0;
  const seniorSum = senior ? senior * prices.Senior : 0;
  const sum = adultSum + childSum + seniorSum;
  return sum;
};

function entryCalculator(entrants) {
  // seu código aqui
  if (!entrants || (typeof entrants === 'object' && Object.keys(entrants).length === 0)) {
    return 0;
  }
  const { Adult: adult, Child: child, Senior: senior } = entrants;
  return sumIfNotUndefined(adult, child, senior);
}

// Popula o array animalLocation (Usar caso chamada sem parâmetro)
const withOutParameters = (locations, animalLocation) => {
  locations.forEach(function (location) {
    const animalTemp = animals.filter(animal => animal.location === location);
    animalTemp.forEach(animal => animalLocation[location].push(animal.name))
  });
  return animalLocation;
};

function includeNamesTrue(locations, animalLocation) {
  locations.forEach(function (location) {
    const animalTemp = animals.filter(animal => (animal.location === location));
    animalTemp.forEach((animal => {
      const animalArrayTemp = {};
      const animalsResidentTemp = [];
      animal.residents.forEach((resident => {
        animalsResidentTemp.push(resident.name);
      }));
      animalArrayTemp[animal.name] = animalsResidentTemp;
      animalLocation[location].push(animalArrayTemp);
    }))
  });
  return animalLocation;
}

function animalMap(options) {
  // seu código aqui
  const locations = [];
  const animalLocation = {};
  animals.forEach((animal => {
    if (!locations.includes(animal.location)) {
      locations.push(animal.location);
      animalLocation[animal.location] = [];
    }
  }));
  let returnClimate;
  if (!options) {
    returnClimate = withOutParameters(locations, animalLocation);
  } else if (options.includeNames) {
    returnClimate = includeNamesTrue(locations, animalLocation);
  }
  return returnClimate;
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
