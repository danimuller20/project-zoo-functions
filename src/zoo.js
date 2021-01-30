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
  const ages = (getAnimal.residents.map(element => element.age));
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
  const personal = { id, firstNamem, lastName } = personalInfo;
  const managersInfo = {
    managers: associatedWith.managers,
    responsibleFor: associatedWith.responsibleFor,
  }; 
  const parr1 = {...personal, ...managersInfo};
  return parr1;
}
createEmployee({
  id: '7ed1c9bb-8570-44f6-b718-0666b869573a',
  firstName: 'John',
  lastName: 'Doe',
}, {
  managers: [
    'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1',
    '9e7d4524-363c-416a-8759-8aa7e50c0992'
  ],
  responsibleFor: [
    '0938aa23-f153-4937-9f88-4858b24d6bce',
    '89be95b3-47e4-4c5b-b687-1fabf2afa274',
    'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5'
  ]
})

function isManager(id) {
  // seu código aqui
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function animalCount(species) {
  // seu código aqui
}

function entryCalculator(entrants) {
  // seu código aqui
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
