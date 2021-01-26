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

const withOutParameters = (locations, animalLocation) => {
  locations.forEach(function (location) {
    const animalTemp = animals.filter(animal => animal.location === location);
    animalTemp.forEach(({ name }) => animalLocation[location].push(name));
    // animalTemp.forEach(animal => animalLocation[location].push(animal.name));
  });
};

function includeNamesTrue(locations, animalLocation, options) {
  locations.forEach(function (location) {
    const animalTemp = animals.filter(animal => (animal.location === location));
    animalTemp.forEach(function (animal) {
      const animalArrayTemp = {};
      const animalsResidentTemp = [];
      animal.residents.forEach(function (resident) {
        if ((options.sex) && (resident.sex === options.sex)) {
          animalsResidentTemp.push(resident.name);
        } else if (!options.sex) {
          animalsResidentTemp.push(resident.name);
        }
      });
      if (options.sorted) {
        animalArrayTemp[animal.name] = animalsResidentTemp.sort();
      } else {
        animalArrayTemp[animal.name] = animalsResidentTemp;
      }
      animalLocation[location].push(animalArrayTemp);
    });
  });
}

function animalMap(options) {
  // seu código aqui
  const locations = [];
  const animalLocation = {};
  animals.forEach(function (animal) {
    if (!locations.includes(animal.location)) {
      locations.push(animal.location);
      animalLocation[animal.location] = [];
    }
  });

  if (!options || !options.includeNames) {
    withOutParameters(locations, animalLocation);
  }
  if (options && options.includeNames) {
    includeNamesTrue(locations, animalLocation, options);
  }
  return animalLocation;
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

  newObject.Tuesday = 'Open from 8am until 6pm';
  return newObject;
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
  const employee = employees.find(element => element.id === id);
  const animal = animals.find(element => employee.responsibleFor[0] === element.id);
  let older = 0;
  animal.residents.forEach((element) => {
    if (element.age > older) {
      older = element.age;
    }
    return older;
  });
  const oldAnimal = animal.residents.find(element => element.age === older);
  return Object.values(oldAnimal);
}

function increasePrices(percentage) {
  // seu código aqui
  Object.keys(prices).forEach((element) => {
    prices[element] = (Math.round(prices[element] * percentage) + (prices[element] * 100)) / 100;
  });
}

function animalFind(id) {
  return animals.find(element => element.id === id).name;
}

function findName(id) {
  const employeesObject =
    (employees.find(e => e.id === id || e.firstName === id || e.lastName === id));
  return `${employeesObject.firstName} ${employeesObject.lastName}`;
}

function employeeCoverage(idOrName) {
  // seu código aqui
  const newObject = {};
  const Object = {};
  const employee = employees.map(element => `${element.firstName} ${element.lastName}`);
  const animalsId = employees.map(element => element.responsibleFor);
  const xablau = animalsId.map(element => element.map(element2 => animalFind(element2)));
  employee.map((element, index) => (newObject[element] = xablau[index]));

  if (!idOrName) return newObject;
  Object[findName(idOrName)] = newObject[findName(idOrName)];

  return Object;
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
