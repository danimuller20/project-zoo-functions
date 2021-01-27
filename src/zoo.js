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

const { animals, employees, prices } = require('./data');
const data = require('./data');

function animalsByIds(...params) {
  return params.map(id => animals.find(item => item.id === id));
}

function animalsOlderThan(animal, age) {
  const animalsGroup = animals.find(value => value.name === animal);
  return animalsGroup.residents.every(value => value.age >= age);
} // concluido

function employeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  const search = (name) => {
    const { firstName, lastName } = name;
    return (firstName === employeeName) || (lastName === employeeName);
  };
  return employees.find(search);
} // concluido

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
}

function isManager(id) {
  // seu código aqui
}

function addEmployee(...person) {
  const [id, firstName, lastName, managers = [], responsibleFor = []] = person;
  const employee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  employees.push(employee);
} // concluido

function speciesCount(species) {
  const animalGroup = animals.find(value => value.name === species);
  return animalGroup.residents.length;
}

function animalCount(species) {
  if (species === undefined) {
    const quantitiesObject = {};
    animals.forEach((animal) => {
      const amountOfAnimals = speciesCount(animal.name);
      quantitiesObject[animal.name] = amountOfAnimals;
    });
    return quantitiesObject;
  }
  return speciesCount(species);
} // concluido

function entryCalculator(entrants) {
  // seu código aqui
}

function animalMap(options) {
  // retorna um objeto
  // recebe o objeto como parametro
  // esse obj possui as seguintes entradas
  // chave: string, sendo ela a localizacao
  // valor sem parametros: array de string com as especies
  // valor com parametro includeNames: true, o valor do objeto e um array de objetos
}

function schedule(dayName) {
  // seu código aqui
}

function oldestFromFirstSpecies(id) {
  let species;
  employees.forEach((employee) => {
    if (employee.id === id) {
      species = employee.responsibleFor[0];
    }
  });
  const animalFound = animals.find(animal => animal.id === species);
  const { residents } = animalFound;
  let olderAnimal = residents[0];
  residents.forEach((animal) => {
    if (animal.age > olderAnimal.age) {
      olderAnimal = animal;
    }
  });
  return Object.values(olderAnimal);
} // concluido

function increasePrices(percentage) {
  Object.keys(prices).forEach((item) => {
    const result = Math.ceil(prices[item] * (percentage + 100)) / 100;
    prices[item] = result;
  });
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
