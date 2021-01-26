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
  // seu código aqui

  // Referencia: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/contains

  return animals.filter(animal => ids.includes(animal.id));
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  return animals.some(({ name, residents }) =>
  name === animal && residents.every(res =>
  res.age > age));
}

function employeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) {
    return {};
  }
  return employees.find(({ firstName, lastName }) =>
  firstName === employeeName || lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  return employees.some(employee => employee.managers.find(ids => ids === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function animalCount(species) {
  // seu código aqui
  const objectFinal = {};
  if (species === undefined) {
    animals.forEach(animal => (objectFinal[animal.name] = animal.residents.length));
    return objectFinal;
  }
  return animals.find(animal => animal.name === species).residents.length;
}

function entryCalculator(...entrants) {
  // seu código aqui
  let result = 0;
  if (entrants.length === 0 || entrants === {}) {
    return result;
  }
  Object.keys(entrants[0]).forEach(item => (result += entrants.reduce((acc, curr) =>
  acc + (curr[item] * prices[item]), 0)));
  return result;
}

// Funcoes auxiliares de animalMap

function sortAnimal(options, objectLocal, animal, animalArray) {
  const animalObject = {};
  if (options.sorted) {
    animalObject[animal.name] = animalArray.sort();
    objectLocal[animal.location].push(animalObject);
  } else {
    animalObject[animal.name] = animalArray;
    objectLocal[animal.location].push(animalObject);
  }
  return objectLocal;
}

function animalLocation(options, objectLocal) {
  animals.forEach((animal) => {
    const animalArray = (animal.residents.map(resident => resident.name));
    sortAnimal(options, objectLocal, animal, animalArray);
  });
  return objectLocal;
}

function sexAnimal(options, objectLocal) {
  animals.forEach((animal) => {
    const animalArray = (animal.residents.filter(animalFilter =>
        animalFilter.sex === options.sex).map(resident => resident.name));
    sortAnimal(options, objectLocal, animal, animalArray);
  });
  return objectLocal;
}

function noOptions(objectLocal) {
  return animals.forEach(element => objectLocal[element.location].push(element.name));
}

function animalMap(options) {
  // seu código aqui
  const objectLocal = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };

  if (options === undefined) {
    noOptions(objectLocal);
    return objectLocal;
  }

  if (options.includeNames !== undefined && options.sex !== undefined) {
    sexAnimal(options, objectLocal);
    return objectLocal;
  }

  if (options.includeNames !== undefined) {
    animalLocation(options, objectLocal);
    return objectLocal;
  }

  noOptions(objectLocal);
  return objectLocal;
}

const convertHours = (hour => hour - 12);

function schedule(dayName) {
  // seu código aqui
  const daysZoo = {};
  Object.keys(hours).forEach(hour => (daysZoo[hour] = `Open from ${hours[hour].open}am until ${convertHours(hours[hour].close)}pm`));
  daysZoo.Monday = 'CLOSED';
  if (dayName === undefined) {
    return daysZoo;
  }

  const day = {};

  day[dayName] = daysZoo[dayName];
  return day;
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
  const findAnimal = employees.find(employee => employee.id === id).responsibleFor[0];

  const ageAnimal = animals.find(animal =>
    animal.id === findAnimal).residents.reduce((acc, curr) =>
    (acc < curr.age ? curr.age : acc), 0);

  const animalInfo = animals.find(animal =>
    animal.id === findAnimal).residents.find(resident =>
    resident.age === ageAnimal);

  return [animalInfo.name, animalInfo.sex, animalInfo.age];
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
