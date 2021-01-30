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
  // 1- Caso receba nenhum parâmetro, necessário retornar um array vazio:
  const idsListMap = data.animals.map((element) => element.id);

  if (ids.length === 0) {
    return [];
  }

  // 2- Se o parâmetro é um único id, retorna um array com a espécie referente à esse id:
  else if (ids.length === 1) {
    const findIdOnMap = idsListMap.find((element) => element === ids[0]);
    const idsOnObj = data.animals.find((element) => element.id === findIdOnMap);
    return [idsOnObj];
  }

  // 3- Ao receber mais de um id, retorna um array com as espécies referentes aos ids:
  else {
    const arrayAux = [];
    for (let index = 0; index < ids.length; index += 1) {
      const teste = data.animals.find((element) => element.id === ids[index]);
      arrayAux.push(teste);
    }
    return arrayAux;
  }
}
animalsByIds(
  '0938aa23-f153-4937-9f88-4858b24d6bce',
  'baa6e93a-f295-44e7-8f70-2bcdc6f6948d'
);

function animalsOlderThan(animal, age) {
  // seu código aqui
}

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
