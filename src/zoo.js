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

//  Todos os exercícios abaixo foram realizados com imensa ajuda dos Plantões gravados.

function animalsByIds(...ids) {
  if (!ids) return [];
  return data.animals.filter(animal => ids.includes(animal.id));
}
function animalsOlderThan(animal, age) {
  const animalBySpecie = data.animals.find(({ name }) => name === animal);
  return animalBySpecie.residents.every(value => value.age >= age);
}
function employeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return data.employees.find(function (value) {
    return value.firstName === employeeName || value.lastName === employeeName;
  });
}
function createEmployee(personalInfo, associatedWith) {
  return {
    ...personalInfo,
    ...associatedWith,
  };
}
function isManager(id) {
  const validation = data.employees.some(objValue => objValue.managers.find(value => value === id));
  return validation;
}
function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployye = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  const admittedEmployee = data.employees.push(newEmployye);
  return admittedEmployee;
}
function animalCount(species) {
  const allAnimals = data.animals.reduce((previousAnimal, currentAnimal) => {
    previousAnimal[currentAnimal.name] = currentAnimal.residents.length;
    return previousAnimal;
  }, {});
  return species ? allAnimals[species] : allAnimals;
}
function entryCalculator(entrants) {
  if (!entrants || Object.entries(entrants).length === 0) return 0;
  return Object.keys(entrants).reduce((ac, cur) => ac + (entrants[cur] * data.prices[cur]), 0);
}
function animalMap(options) {

}
function schedule(dayName) {
  const agenda = {
    Tuesday: 'Open from 8am until 6pm',
    Wednesday: 'Open from 8am until 6pm',
    Thursday: 'Open from 10am until 8pm',
    Friday: 'Open from 10am until 8pm',
    Saturday: 'Open from 8am until 10pm',
    Sunday: 'Open from 8am until 8pm',
    Monday: 'CLOSED',
  };
  if (dayName !== undefined) {
    return { [dayName]: agenda[dayName] };
  }
  return agenda;
}
function oldestFromFirstSpecies(id) {
  const firstAnimal = data.employees.find(emp => emp.id === id).responsibleFor[0];
  const animals = data.animals.find(animal => animal.id === firstAnimal).residents;
  const oldest = animals.reduce((acc, curr) => (acc.age > curr.age ? acc : curr), []);

  return Object.values(oldest);
}
function increasePrices(percentage) {
  const calculator = ((percentage / 100) + 1);
  const result = Object.entries(data.prices).reduce((acc, [curr]) => {
    data.prices[curr] = Math.round(data.prices[curr] * 100 * calculator) / 100;
    return data.prices;
  }, {});
  return result;
}
function employeeCoverage(idOrName) {
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
