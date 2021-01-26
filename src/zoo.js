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

const { animals } = require('./data');
const data = require('./data');

function animalsByIds(...ids) {
  return animals.filter((species, index) => species.id === ids[index]);
}

function animalsOlderThan(animal, age) {
  return animals.find(nome => nome.name === animal).residents.every(idade => idade.age >= age);
}

function employeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return data.employees.find(nome => nome.firstName === employeeName ||
    nome.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return Object.assign(personalInfo, associatedWith);
}

function isManager(id) {
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  data.employees.push(newEmployee);
}

function animalCount(species) {
  const lista = {};
  animals.forEach((value) => { lista[value.name] = value.residents.length; });
  if (!species) {
    return lista;
  }
  return lista[species];
}

function entryCalculator(entrants) {
  let totalPrices = 0;
  if (!entrants) {
    return 0;
  }
  Object.keys(entrants).forEach((value) => {
    totalPrices += (entrants[value] * data.prices[value]);
  });
  return totalPrices;
}

function animalMap(options) {

}

function schedule(dayName) {
  const cronograma = {};
  Object.keys(data.hours).forEach((dias) => {
    cronograma[dias] = `Open from ${data.hours[dias].open}am until ${data.hours[dias].close}pm`;
  });
  cronograma.Monday = 'CLOSED';
  if (!dayName) {
    return cronograma;
  }
  const dia = {};
  dia[dayName] = cronograma[dayName];
  return dia;
}

function oldestFromFirstSpecies(id) {
  let animalSenio = [];
  animals.find(elemento => elemento.id === id).residents
  .forEach(senio => {  animalSenio.push(senio.age) });
  animalSenio = Math.max(...animalSenio);
  animalSenio = animals.find(idd => idd.id === id).residents
  .find(senio => senio.age === animalSenio);
  return Object.values(animalSenio);
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
