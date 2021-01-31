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

// FALHA
function animalsByIds(args) {
  // if (args.length === 0) return [];

  // const array = [];

  // args.forEach((cadaElemento) => {
  //   return animals.map((item) => {
  //     if (item.id === cadaElemento) {
  //       array.push(item);
  //     }
  //   })});

  // return array;
}

// OK
function animalsOlderThan(especie, age) {
  const bixo = data.animals.find(animal => animal.name === especie);
  const idade = bixo.residents.map(item => item.age >= age);
  const resultado = idade.find(item => item === false);

  if (resultado === undefined) {
    return true;
  } return resultado;
}

// OK
function employeeByName(...args) {
  const objetoVazio = {};
  let empregado = data.employees.find(funcionario => funcionario.firstName === args[0]);

  if (args.length === 0) return objetoVazio;
  if (empregado === undefined) {
    empregado = data.employees.find(funcionario => funcionario.lastName === args[0]);
  }

  return empregado;
}

// OK
function createEmployee(personalInfo, associatedWith) {
  let usuarioCompleto = {};

  usuarioCompleto = Object.assign(usuarioCompleto, personalInfo, associatedWith);
  return usuarioCompleto;
}

// OK
function isManager(id) {
  return data.employees.some(item => item.managers.some(gerente => gerente === id));
}

// OK
function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

// DESENVOLVIMENTO
function animalCount(...species) {
  const populacao = {};
  let animais = 0;

  if (species.length === 0) {
      data.animals.map(value => value).forEach((value) => {
      populacao[value.name] = value.residents.length;
    });

    return populacao;
  }

  data.animals.map(value => value).forEach((value) => {
    if (value.name === species[0]) {
      animais = value.residents.length;	
    };
  }
 );

  return animais;
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
