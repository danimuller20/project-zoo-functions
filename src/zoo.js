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
  return animals.filter((animal, index) => ids[index] === animal.id);
}

function animalsOlderThan(animal, age) { 
  //Verificar se é 'true' o retorno de um filtro realizado por espécie e idade mínima
  //1. Buscar o objeto contendo os animais; [CHECK]
  //2. Buscar nesse objeto a espécie indicada no parâmetro da função;
  //3. Acessar a idade de cada um dos animais da espécie
  //4. Verificar se essa idade é superior ao parâmetro passado
  //5. Retornar true se todos os animais atenderem aos critérios, senão retorna false

  const allAnimals = data.animals

  return allAnimals.find((animal) => animal === 'lions');
 
}

animalsOlderThan('lions', 4)

function employeeByName(employeeName) {
  // seu código aqui
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
}

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
