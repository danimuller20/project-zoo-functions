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

// OK
function animalsByIds(...args) {
  if (args.length === 0) return [];

  const array = [];

  data.animals.map(item => item).forEach(item => args.forEach((cadaElemento) => {
    if (item.id === cadaElemento) {
      array.push(item);
    }
  }));

  return array;
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

// OK
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
    }
  });

  return animais;
}

function entryCalculator(...entrants) {
  // let qntAdulto = 0;
  // let qntSenior = 0;
  // let qntFilho = 0;
  // let prcAdulto = 0;
  // let prcSenior = 0;
  // let prcFilho;

  // if (entrants.length === 0 || entrants[0] === {}) return 0;

  // Object.entries(data.prices).forEach((elemento) => {
  //   if (elemento[0] === 'Adult') entrants.forEach(item => prcAdulto = elemento[1] * item.Adult);
  //   if (elemento[0] === 'Senior') entrants.forEach(item => prcSenior = elemento[1] * item.Senior);
  //   if (elemento[0] === 'Child') entrants.forEach(item => prcFilho = elemento[1] * item.Child);
  // });

  // console.log(prcSenior, prcAdulto, prcFilho)

  // if (prcAdulto === NaN) prcAdulto = 0;
  // if (prcSenior === NaN) prcSenior = 0;
  // if (prcFilho === NaN) prcFilho = 0;

  // let valorTotal = prcAdulto + prcFilho + prcSenior;

  // return valorTotal;
}

// entryCalculator({ 'Adult': 2, 'Child': 3, 'Senior': 1 })
// entryCalculator({ 'Adult': 1})

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  // seu código aqui
}

function oldestFromFirstSpecies(id) {
  const codigoAnimal = data.employees.find(employee => employee.id === id).responsibleFor[0];
  const animalMaisVelho = data.animals.find(animal => animal.id === codigoAnimal)
  .residents.sort((age1, age2) => age2.age - age1.age)[0];
  const { name, sex, age } = animalMaisVelho;
  return [name, sex, age];
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
