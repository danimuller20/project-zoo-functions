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
  // 1- Caso receba nenhum parâmetro, necessário retornar um array vazio:
  const idsListMap = data.animals.map(element => element.id);

  if (ids.length === 0) {
    return [];
  } else if (ids.length === 1) {
    const findIdOnMap = idsListMap.find(element => element === ids[0]);
    const idsOnObj = data.animals.find(element => element.id === findIdOnMap);
    return [idsOnObj];
  }

  // 3- Ao receber mais de um id, retorna um array com as espécies referentes aos ids:
  const arrayAux = [];
  for (let index = 0; index < ids.length; index += 1) {
    const teste = data.animals.find(element => element.id === ids[index]);
    arrayAux.push(teste);
  }
  return arrayAux;
}

function animalsOlderThan(animal, age) {
  const getAnimal = data.animals.find(element => element.name === animal);
  const ages = getAnimal.residents.map(element => element.age);
  const verifyAge = ages.every(element => element > age);
  return verifyAge;
}

function employeeByName(employeeName) {
  // seu código aqui
  if (typeof employeeName === 'undefined') {
    return {};
  }
  const findOnObj = data.employees.find(
    element =>
      element.firstName === employeeName || element.lastName === employeeName);
  return findOnObj;
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const parr = { ...personalInfo, ...associatedWith };
  return parr;
}

function isManager(id) {
  // seu código aqui
  const arrayManagers = data.employees.map(element => element.managers);
  for (let index = 0; index < arrayManagers.length; index += 1) {
    if (arrayManagers[index].some(element => element === id)) {
      return true;
    }
  }
  return false;
}

function addEmployee(
  id = [],
  firstName = [],
  lastName = [],
  managers = [],
  responsibleFor = [],
) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return data.employees.push(newEmployee);
}

function animalCount(species) {
  // seu código aqui
  if (typeof species === 'undefined') {
    const arrayAnimalsName = data.animals.map(element => element.name);
    const arrayAnimalsNumbers = data.animals.map(element => element.residents.length);
    const objNameNum = {};
    for (let index = 0; index < arrayAnimalsName.length; index += 1) {
      objNameNum[arrayAnimalsName[index]] = arrayAnimalsNumbers[index];
    }
    return objNameNum;
  }
  const findAnimal = data.animals.find(element => element.name === species);
  return findAnimal.residents.length;
}

function entryCalculator(entrants) {
  // seu código aqui
  if (typeof entrants === 'undefined') {
    return 0;
  } else if (Object.entries(entrants).length === 0) {
    return 0;
  }
  let totalValue = 0;
  const objectKeys = Object.keys(entrants);
  if (objectKeys.some(element => element === 'Adult')) {
    const adultValue = entrants.Adult * 49.99;
    totalValue += adultValue;
  }
  const checkChild = objectKeys.some(element => element === 'Child')
    ? entrants.Child * 20.99
    : 0;
  totalValue += checkChild;
  const checkSenior = objectKeys.some(element => element === 'Senior')
    ? entrants.Senior * 24.99
    : 0;
  totalValue += checkSenior;
  return totalValue;
}

function animalMap(options) {
  // seu código aqui
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
