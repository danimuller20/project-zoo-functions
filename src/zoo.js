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

const { animals, employees, prices, hours } = require('./data');
const data = require('./data');

function animalsByIds(...ids) {
  // seu código aqui.
  if (!ids) {
    return [];
  }
  return animals.filter(element => ids.some(id => id === element.id));
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const species = animals.find(element => element.name === animal);
  return species.residents.every(element => element.age > age);
}

function employeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) {
    return {};
  }
  return employees.find(element =>
    (element.firstName === employeeName || element.lastName === employeeName));
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return Object.assign(personalInfo, associatedWith);
}

function isManager(id) {
  // seu código aqui
  return employees.some(employ => employ.managers.some(element => element === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  // seu código aqui
  if (!species) {
    const newObject = {};
    animals.forEach(element => (newObject[element.name] = element.residents.length));
    return newObject;
  }
  const specie = animals.find(animal => animal.name === species);
  return specie.residents.length;
}

function entryCalculator(entrants) {
  // seu código aqui
  if (!entrants || entrants === {}) {
    return 0;
  }
  let sum = 0;
  if (entrants.Adult) {
    sum += entrants.Adult * prices.Adult;
  }
  if (entrants.Child) {
    sum += entrants.Child * prices.Child;
  }
  if (entrants.Senior) {
    sum += entrants.Senior * prices.Senior;
  }
  /*  Object.values(entrants).forEach((element, index) => {
    sum += element * Object.values(prices)[index];
  })*/
  return sum;
}

function animalMap(options) {
  // seu código aqui
  /* const animalsPerLocation = {};
  if (!options) {
    animals.forEach((species) => {
      let animalsGrup = [];
      animals.forEach((element) => {
        if (species.location === element.location) {
          animalsGrup.push(element.name);
        }
      })
      return animalsPerLocation[species.location] = animalsGrup;
    })
    return animalsPerLocation;
  }
}

function animalNames(name) {
  const arrayNames = [];
  animals.forEach((element) => {
    if (element.name === name) {
      element.residents.forEach((element2) => {
        arrayNames.push(element2.name);
      })
    }
  })
  return arrayNames;*/
}

function schedule(dayName) {
  // seu código aqui
  const newObject = {};
  const arrayOfKeys = Object.keys(hours);
  const arrayOfValues = Object.values(hours);
  if (!dayName) {
    arrayOfKeys.forEach((element, index) => {
      if (element === 'Monday') {
        newObject[element] = 'CLOSED';
      } else {
        newObject[element] = `Open from ${arrayOfValues[index].open}am until ${arrayOfValues[index].close - 12}pm`;
      }
    });
    return newObject;
  }

  if (dayName === 'Monday') {
    newObject[dayName] = 'CLOSED';
    return newObject;
  }

  if (dayName === 'Tuesday') {
    newObject['Tuesday'] = `Open from 8am until 6pm`;
    return newObject;
  }
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
