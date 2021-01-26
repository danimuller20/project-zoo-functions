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

const { animals, employees } = require('./data');
const data = require('./data');

const checkVar = varChecked => {
  if(!varChecked) {
		return undefined;
	}
}

const checkObj = objectChecked => {
  if (!objectChecked) {
    return {};
  }
}

const checkTwoVar = (varChecked1, varChecked2) => {
  if(varChecked1) {
    return varChecked1;
  }
  return varChecked2
}

function animalsByIds(...ids) {
  checkVar(ids);
  return data.animals.filter(animal => ids.find(id => animal.id == id));
}

function animalsOlderThan(animal, age) {
  return data
    .animals.find(typeName => typeName.name === animal)
    .residents.every(oltherThan => oltherThan.age >= age);

  // base de modelagem
  // const animalFilter = data.animals.find(typeName => typeName.name === animal);
  // const ageAnimalFilter = animalFilter.residents.every(oltherThan => oltherThan.age >= age);
  // return ageAnimalFilter;
}

console.table(animalsOlderThan('lions', 7));

function employeeByName(employeeName) {
  let findEmployeeName = {};
  if (!employeeName){
    return findEmployeeName;
  }
  findEmployeeName = data.employees.find(employee => employee.firstName === employeeName || employee.lastName === employeeName);
  return findEmployeeName;
  // seu código aqui
}

console.log(employeeByName('Wilburn'));

function createEmployee(personalInfo, associatedWith) {
  const newObject = {};
  Object.assign(newObject, personalInfo, associatedWith);
  return newObject;
}

function isManager(id) {
  // const idFilter = data.employees.filter( haveId => haveId.id === id);
  // const managerFilter = idFilter.manager.find(haveManager => haveManager.managers === []);
  // return managerFilter;
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
