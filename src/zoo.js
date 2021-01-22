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

function animalsByIds(...ids) {
  const animal = data.animals.filter(bicho => ids.includes(bicho.id));
  return animal;
}

function animalsOlderThan(especie, idade) {
  const animaisFiltrados = data.animals.find(bicho => bicho.name === especie);
  if (animaisFiltrados.residents.every(animal => animal.age > idade)) {
    return true;
  }
  return false;
}

function employeeByName(employeeName) {
  // algumas correcoes baseadas no codigo da Amanda Souza, turma 8.
  if (!employeeName) {
    return {};
  }
  const funcionarios = data.employees.find((employee) => {
    const primeiroNome = employee.firstName;
    const ultimoNome = employee.lastName;
    return primeiroNome === employeeName || ultimoNome === employeeName;
  });
  return funcionarios;
}
console.log(employeeByName());

function createEmployee(personalInfo, associatedWith) {
  const novoFuncionario = { ...personalInfo, ...associatedWith };
  return novoFuncionario;
}

function isManager(id) {
  const gerente = employees.some(elemento => elemento.managers.includes(id));
  return gerente;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  if (!species) {
    return animals.reduce((acc, value) => {
      acc[value.name] = value.residents.length;
      return acc;
    }, {});
  }
  return animals.find(animal => animal.name === species).residents.length;
}
console.log(animalCount('lions'));

function entryCalculator(entrants) {
  if (typeof (entrants) !== 'object') { return 0; }
  const { Child = 0, Adult = 0, Senior = 0 } = entrants;
  const valor = (prices.Adult * Adult) + (prices.Child * Child) + (prices.Senior * Senior);
  return valor;
}

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  // seu código aqui
}

function oldestFromFirstSpecies(id) {
  const findFunc = data.employees.find(funcionario => (funcionario.id === id));
  const findAnimal = data.animals.find(animal => animal.id === findFunc.responsibleFor[0]);
  const sortAnimal = findAnimal.residents.sort((a, b) => b.age - a.age);
  const { name, sex, age } = sortAnimal[0];
  return [name, sex, age];
}

function increasePrices(percentage) {
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
