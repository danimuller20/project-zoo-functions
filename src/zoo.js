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

const { animals, employees, hours, prices } = data;

function animalsByIds(...ids) {
  return animals.filter((value, index) => value.id === ids[index]);
}
function animalsOlderThan(animal, age) {
  return animals.find(value => value.name === animal).residents.every(idade => idade.age > age);
}

function employeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  return employees
  .find(value => value.firstName === employeeName || value.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some((value, index) => value.managers[index] === id);
}


function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  const obj = {};
  animals.forEach(({ name, residents }) => {
    obj[name] = residents.length;
  });
  return species ? obj[species] : obj;
}

// A partir da quantidade de visitantes e a faixa etária de cada um, esta função é responsável por retornar o preço total a ser cobrado
// 1. Buscar a quantidade a ser cobrada no ingresso por cada faixa etária
// 2. Conferir a quantidade de pessoas e somar os valores referente ao preço dos ingressos.
// 3. Parâmetro deve receber um objeto
// {
//  Adult: quantidade de pessoas
//  Child: quantidade de pessoas
//  Senior: quantidade de pessoas
// }
// 4. Retorna 0 se nenhum argumento for passado
// 5. Retorna 0 se um objeto vazio for passado
// 6. Retorna o preço total a ser cobrado dado o número de adultos, crianças e idosos

function entryCalculator(entrants) {
  if (!entrants) {
    return 0
  }
  let result = 0;
  const value = Object.values(entrants);
  const persons = Object.keys(entrants);
  persons.forEach((person, index) => {
   result += prices[person] * value[index]
  })
  return result
}
console.log(entryCalculator());
function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {

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
