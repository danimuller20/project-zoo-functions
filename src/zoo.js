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

function animalsByIds(...ids) {
  // Retorna um array de species cuja o ID dela exista no array de ids passado como parametro.
  const selectedAnimals = animals.filter(species => ids.some(id => id === species.id));

  return selectedAnimals;
}

function animalsOlderThan(animal, age) {
  const animalObjetc = animals.find(animalFromDB => animalFromDB.name === animal);
  const isAllAboveMinimalAge = animalObjetc.residents.every(resident => resident.age >= age);
  return isAllAboveMinimalAge;
}

function employeeByName(employeeName) {
  if (!employeeName) { return {}; }
  return employees.find(name => name.firstName === employeeName || name.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  const newEmployee = { ...personalInfo, ...associatedWith };
  return newEmployee;
}

function isManager(id) {
  function isManegerHere(employe, compareID) {
    return employe.managers.some(manegerId => manegerId === compareID);
  }
  return employees.some(employe => isManegerHere(employe, id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor };
  data.employees.push(newEmployee);
  console.log(newEmployee);
}

function getResidentNumber(animalName) {
  let numbersOfResidents = 0;
  const animalData = data.animals.find(animalDatas => animalName === animalDatas.name);
  numbersOfResidents = animalData.residents.length;
  console.log(numbersOfResidents);
  return numbersOfResidents;
}

function getNumbersOfEachAnimal() {
  const residentNumbersOfEachAnimal = {};
  data.animals.forEach((animalData) => {
    const numberOfResidents = animalData.residents.length;
    residentNumbersOfEachAnimal[animalData.name] = numberOfResidents;
  });
  console.log(residentNumbersOfEachAnimal);
  return residentNumbersOfEachAnimal;
}

function animalCount(species) {
  return species ? getResidentNumber(species) : getNumbersOfEachAnimal();
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
