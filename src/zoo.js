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
  const resposta = [];

  if (ids.length === 0) {
    return ids;
  }
  for (let index = 0; index < ids.length; index += 1) {
    data.animals.forEach((animal) => {
      if (animal.id === ids[index]) {
        resposta.push(animal);
      }
    });
  }
  return resposta;
}

function animalsOlderThan(animal, age) {
  const objAnimal = data.animals.find(bixo => animal === bixo.name);
  return objAnimal.residents.every(objResident => objResident.age >= age);
}

function employeeByName(employeeName) {
  const objEmpty = {};
  if (employeeName === undefined) {
    return objEmpty;
  }
  return data.employees.find(person =>
    (person.firstName === employeeName || person.lastName === employeeName));
}

function createEmployee(personalInfo, associatedWith) {
  const { id, firstName, lastName } = personalInfo;
  return {
    id,
    firstName,
    lastName,
    managers: associatedWith.managers,
    responsibleFor: associatedWith.responsibleFor,
  };
}

function isManager(id) {
  const objPerson = data.employees.find(person =>
  (person.managers.find(arrayManagers => arrayManagers === id)));
  if (typeof (objPerson) === 'object') {
    return true;
  }
  return false;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const obj = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  data.employees.push(obj);
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
