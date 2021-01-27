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
/*{
  id: '0938aa23-f153-4937-9f88-4858b24d6bce',
  name: 'lions',
  popularity: 4,
  location: 'NE',
  residents: [
    {
      name: 'Zena',
      sex: 'female',
      age: 12
    },
    {
      name: 'Maxwell',
      sex: 'male',
      age: 15
    },
    {
      name: 'Faustino',
      sex: 'male',
      age: 7
    },
    {
      name: 'Dee',
      sex: 'female',
      age: 14
    }
  ]
},*/

const { animals } = require('./data');
const data = require('./data');

function animalsByIds(...ids) {
  if (ids.length === 0) {
    return [];
  }
  return animals.filter((animal, index) => animal.id === ids[index]);

}

function animalsOlderThan(animal, age) {
  animals.some((animalIndex) => animalIndex.residents.every((animalAtual) => animalAtual.name === animal && animalAtual.age > age));
}

console.log(animalsOlderThan('lions', 7));

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
