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

function entryCalculator(entrants) {
  let soma = 0;
  if (entrants === undefined || entrants === {}) {
    return 0;
  }
  Object.keys(entrants).forEach((index) => { soma += entrants[index] * data.prices[index]; });
  return soma;
}

// entryCalculator({ 'Adult': 2, 'Child': 3, 'Senior': 1 })
// entryCalculator({ 'Adult': 1})

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  const legibleSchedule = {};
  Object.keys(hours).forEach((day) => {
    const { open, close } = hours[day];
    if (day === 'Monday') {
      legibleSchedule[day] = 'CLOSED';
    } else {
      legibleSchedule[day] = `Open from ${open}am until ${close - 12}pm`;
    }
  });
  if (!dayName) {
    return legibleSchedule;
  }
  return { [dayName]: legibleSchedule[dayName] };
}

function oldestFromFirstSpecies(id) {
  const codigoAnimal = data.employees.find(employee => employee.id === id).responsibleFor[0];
  const animalMaisVelho = data.animals.find(animal => animal.id === codigoAnimal)
  .residents.sort((age1, age2) => age2.age - age1.age)[0];
  const { name, sex, age } = animalMaisVelho;
  return [name, sex, age];
}

function increasePrices(percentage) {
  const percent = 1 + (percentage / 100);
  data.prices.Adult = parseFloat(((data.prices.Adult * percent) + 0.001).toFixed(2));
  data.prices.Senior = parseFloat(((data.prices.Senior * percent) + 0.001).toFixed(2));
  data.prices.Child = parseFloat(((data.prices.Child * percent) + 0.001).toFixed(2));
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
