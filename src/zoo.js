const { employees, animals, prices } = require('./data');

function animalsByIds(...ids) {
  if (ids === undefined) {
    return [];
  }
  return animals.filter(zooAnimal => ids.some(id => id === zooAnimal.id));
}

function animalsOlderThan(animal, age) {
  const species = animals.find(item => item.name === animal).residents; // array de obj
  return species.every(resident => resident.age >= age);
}

function employeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  return employees.find(
    employee => employee.firstName === employeeName || employee.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return {
    id: personalInfo.id,
    firstName: personalInfo.firstName,
    lastName: personalInfo.lastName,
    managers: associatedWith.managers,
    responsibleFor: associatedWith.responsibleFor,
  };
}

function isManager(id) {
  return employees.some(item => item.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const employeeNew = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return employees.push(employeeNew);
}

function animalCount(species) {
  const animalsObj = {};
  animals.forEach((bicho) => { animalsObj[bicho.name] = bicho.residents.length; });
  if (species) {
    return animalsObj[species];
  }
  return animalsObj;
  // feito com ajuda/explicação e colaboração dos colegas : Rafa Reis, Bruna Ferreira e Henrique Moura
}

function entryCalculator(entrants) {
  let result = 0;
  if (!entrants) {
    return 0;
  } else if (Object.keys(entrants).length === 0) {
    return 0;
  }
  Object.keys(entrants).forEach((item) => { result += entrants[item] * prices[item]; });
  return result;
}

function animalMap() {
  // options
  // seu código aqui
}

function schedule() {
  // dayName
  // seu código aqui
}

function oldestFromFirstSpecies(id) {
  const collaborator = employees.find(colaborador => id === colaborador.id);
  const animais = animals.find(animal => collaborator.responsibleFor[0] === animal.id);
  const animalVelho = animais.residents.sort((a, b) => b.age - a.age);
  return Object.values(animalVelho[0]);
 // requisito feito com o apoio e colaboração do colega Layo Kaminski
}
oldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992')

function increasePrices(percentage) {
  Object.keys(prices).forEach((item) => {
    prices[item] = Math.round((prices[item] + (prices[item] * (percentage / 100))) * 100) / 100;
  });
}

function employeeCoverage() {
  // idOrName
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
