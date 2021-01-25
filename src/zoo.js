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

const {
  animals,
  employees,
  hours,
  prices,
} = require('./data');

const data = require('./data');

function animalsByIds(...ids) {
  if (ids.length === 0) return ids;
  return animals.filter(animal => ids.includes(animal.id));
}

function animalsOlderThan(animal, age) {
  return animals
    .find(element => element.name === animal).residents
    .every(foreachAnimal => foreachAnimal.age >= age);
}

function employeeByName(employeeName) {
  if (!employeeName) return {};
  return employees.find(person =>
    person.firstName === employeeName || person.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  const employee = {
    ...personalInfo,
    ...associatedWith,
  };
  return employee;
}

function isManager(id) {
  return employees.some(person => person.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
  return newEmployee;
}

function animalCount(species) {
  const allAnimals = {};
  if (!species) {
    animals.forEach(animal => (allAnimals[animal.name] = animal.residents.length));
    return allAnimals;
  }
  return animals.find(animal => animal.name === species).residents.length;
}

function entryCalculator(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const entrantsKey = Object.keys(entrants).map(key => prices[key]);
  const entrantsValue = Object.values(entrants)
    .reduce((accumulator, currentValue, index) =>
      accumulator + (entrantsKey[index] * currentValue), 0);
  return entrantsValue;
}

// Função auxiliar da "animalMap()"; filtra animais
const animalFilter = (name, sorted, sex) => {
  let filterAnimal = animals.find(animal => animal.name === name).residents;
  if (sex === 'female' || sex === 'male') {
    filterAnimal = filterAnimal.filter(animal => animal.sex === sex);
  }

  const filteredAnimal = filterAnimal.map(animal => animal.name);

  if (sorted) {
    filteredAnimal.sort();
  }

  return { [name]: filteredAnimal };
};

function animalMap(options = {}) {
  const { includeNames = false, sorted = false, sex } = options;

  let mapResults = animals.reduce((accumulator, animal) => {
    if (!accumulator[animal.location]) {
      accumulator[animal.location] = [];
    }
    accumulator[animal.location].push(animal.name);
    return accumulator;
  }, {});

  if (includeNames) {
    mapResults = Object.entries(mapResults).reduce((accumulator, [region, animal]) => {
      accumulator[region] = animal.map(name => animalFilter(name, sorted, sex));
      return accumulator;
    }, {});
  }
  return mapResults;
}

function schedule(dayName = '') {
  const myObject = {};

  Object.entries(hours).reduce((_, [index, value]) => {
    const closeTime = value.close % 12;
    return (myObject[index] = value.close - value.open > 0 ?
      `Open from ${value.open}am until ${closeTime}pm` :
      'CLOSED'
    );
  }, {});

  const verifyDay = Object.entries(myObject).some(day => day[0] === dayName);
  if (dayName !== '') {
    if (!verifyDay) {
      return 'Dia inválido!';
    }
    return { [dayName]: myObject[dayName] };
  }

  return myObject;
}

function oldestFromFirstSpecies(id) {
  let result = employees.find(employee => employee.id === id).responsibleFor[0];
  result = animals.find(animal => animal.id === result);

  result = result.residents.reduce((accumulator, currentValue) => {
    if (accumulator.age > currentValue.age) {
      return accumulator;
    }
    return currentValue;
  });

  result = [result.name, result.sex, result.age];

  return result;
}

function increasePrices(percentage) {
  Object.keys(prices).forEach((key) => {
    prices[key] = Math.ceil(prices[key] * (100 + percentage)) / 100;
  });
  return prices;
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
