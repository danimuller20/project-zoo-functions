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

function animalsByIds(ids) {
  // seu código aqui
return animals
.filter(animal => animal.id === ids )
//.map(animal => animal)
.map( animals => ({
 id : animals.id,
 name : animals.name,
 popularity: animals.popularity,
 location : animals.location,
 residents : ( {
  name : animals.residents.name,
  sex : animals.residents.sex,
  age : animals.residents.age
 })
}))

 }
console.log(animalsByIds('0938aa23-f153-4937-9f88-4858b24d6bce', 'e8481c1d-42ea-4610-8e11-1752cfc05a46'))
function animalsOlderThan(animal, age) {
  // seu código aqui
return animals.every((animal, age) => animal.residents.age >= age);
}
console.log(animalsOlderThan('penguins', 10));

function employeeByName(employeeName) {
  // seu código aqui

}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
}

function isManager(id) {
  // seu código aqui
  return employees.some(number => number.managers === id);
}
console.log(isManager('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
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
