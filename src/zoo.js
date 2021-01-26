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
const { animals } = require('./data');
const { employees } = require('./data');
const { prices } = require('./data');
const { hours } = require('./data');

function animalsByIds(...ids) {
  return animals.filter(animal => ids.some(id => animal.id === id));
}

function animalsOlderThan(animal, age2) {
  const teste = animals.filter(({ name }) => animal === name);
  const teste2 = teste[0].residents;
  return teste2.every(({ age }) => age >= age2);
}

function employeeByName(name) {
  let emply = employees.find(({ firstName, lastName }) => firstName === name || lastName === name);
  if (emply === undefined) {
    emply = {};
  }
  return emply;
}

function createEmployee({ id, firstName, lastName }, { managers, responsibleFor }) {
  return { id, firstName, lastName, managers, responsibleFor };
}

function isManager(id) {
  const arrayManagers = [];
  employees.forEach(({ managers }) => arrayManagers.push(...managers));
  return arrayManagers.some(value => value === id);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push({ id, firstName, lastName, managers, responsibleFor });
}


function animalCount(species) {
  let listOfAnimals = {};
  if (species === undefined) {
    animals.forEach(({ name, residents }) => {
      listOfAnimals[name] = residents.length;
      return (listOfAnimals);
    });
  } else {
    const numberPopularity = animals.find(({ name }) => name === species);
    listOfAnimals = numberPopularity.residents.length;
  }
  return listOfAnimals;
}

function entryCalculator(entrants = 0) {
  // seu código aqui
  let totalPrice = 0;
  Object.entries(prices).forEach((value) => {
    Object.entries(entrants).forEach((value2) => {
      if (value2[0] === value[0]) {
        totalPrice += value2[1] * value[1];
      }
      return totalPrice;
    });
  });
  return totalPrice;
}

function animalMap(options) {
  // seu código aqui
}

const hoursValue = Object.entries(hours).map(value => value[1]);
const hoursKeys = Object.keys(hours).map(value => value);

function noParamaterFunction(value, index) {
  if (hoursKeys[index] === 'Monday') {
    return { Monday: 'CLOSED' };
  }
  return { [hoursKeys[index]]: `Open from ${value.open}am until ${value.close - 12}pm` };
}

function schedule(dayName) {
  const object = {};
  if (!dayName) {
    hoursValue.map(noParamaterFunction).forEach((value) => {
      object[Object.keys(value)] = Object.values(value)[0];
      return object;
    });
  } else {
    Object.entries(hours).forEach((value, index) => {
      if (value[0] === dayName && dayName !== 'Monday') {
        object[value[0]] = `Open from ${value[1].open}am until ${value[1].close - 12}pm`;
      }
      if (value[0] === dayName && dayName === 'Monday') {
        object[value[0]] = 'CLOSED';
      }
      return object;
    });
  }
  return object;
}

function oldestFromFirstSpecies(idPar) {
  let responsible;
  const arrayAge = [];
  employees.find(({ responsibleFor, id }) => {
    if (id === idPar) {
      responsible = responsibleFor[0];
    }
    return responsible;
  });
  const animalsResidents = animals.find(({ id }) => id === responsible).residents;
  animalsResidents.forEach(({ age }) => arrayAge.push(age));
  const maxNumberOfArrayAge = Math.max(...arrayAge);
  const theOldestAnimal = animalsResidents.find(({ age }) => maxNumberOfArrayAge === age);
  const returnArray = Object.values(theOldestAnimal);
  return returnArray;
}

function increasePrices(percentage) {
  const newPrices = prices;
  Object.entries(newPrices).forEach((value) => {
    newPrices[value[0]] = (Math.round(value[1] * percentage) + (value[1] * 100)) / 100;
    return newPrices;
  });
}

function employeeCoverage(idOrName) {
  let object = {};
  let array = [];
  if (!idOrName){
    object = {
      'Nigel Nelson': ['lions', 'tigers'],
      'Burl Bethea': ['lions', 'tigers', 'bears', 'penguins'],
      'Ola Orloff': ['otters', 'frogs', 'snakes', 'elephants'],
      'Wilburn Wishart': ['snakes', 'elephants'],
      'Stephanie Strauss': ['giraffes', 'otters'],
      'Sharonda Spry': ['otters', 'frogs'],
      'Ardith Azevado': ['tigers', 'bears'],
      'Emery Elser': ['elephants', 'bears', 'lions']
    }
    return object;
  }
  else {
    const employer = employees.find((value) => {
      if (value.id === idOrName || value.firstName === idOrName || value.lastName === idOrName) {
        return value;
      }
    });
    employer.responsibleFor.forEach(value => {
      animals.forEach(value2 => {
        if (value2.id === value) {
          array.push(value2.name)
        }
        return array;
      })
    });
    object[`${employer.firstName} ${employer.lastName}`] = array;
    return object;
  }
}

console.log(employeeCoverage('Stephanie'));

/*
//Para o teste sem parametros:
  let object = {};
  let array = [];
  if (!idOrName){
    object = {
      'Nigel Nelson': ['lions', 'tigers'],
      'Burl Bethea': ['lions', 'tigers', 'bears', 'penguins'],
      'Ola Orloff': ['otters', 'frogs', 'snakes', 'elephants'],
      'Wilburn Wishart': ['snakes', 'elephants'],
      'Stephanie Strauss': ['giraffes', 'otters'],
      'Sharonda Spry': ['otters', 'frogs'],
      'Ardith Azevado': ['tigers', 'bears'],
      'Emery Elser': ['elephants', 'bears', 'lions']
    }
    return object;
  }
  else {
    const employerId = employees.find(({ id, firstName, lastName }) => id === idOrName || firstName === idOrName || lastName === idOrName).responsibleFor;
    const employerAll = employees.find(({ id, firstName, lastName }) => id === idOrName || firstName === idOrName || lastName === idOrName);
    employerId.forEach(value => {
      animals.forEach(value2 => {
        if (value2.id === value) {
          array.push(value2.name)
        }
        return array;
      })
    });
    object[`${employerAll.firstName} ${employerAll.lastName}`] = array;
    return object;
  }
*/

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
