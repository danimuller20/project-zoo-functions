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
  return animals.filter(animal => ids.some(id => id === animal.id));
}
// console.log(animalsByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));

function animalsOlderThan(name, age) {
  return animals
  .some(animal => animal.residents
    .every(resident => animal.name === name && resident.age > age));
}
// console.log(animalsOlderThan('otters', 7));
// console.log(animalsOlderThan('penguins', 10));

function employeeByName(employeeName) {
  if (!employeeName) return {};
  return employees
  .find(employee => employee.firstName === employeeName || employee.lastName === employeeName);
}
// console.log(employeeByName('Emery'));
// console.log(employeeByName('Wishart'));

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some(employee => employee.managers.includes(id));
}
// console.log(isManager('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
// console.log(isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83'));

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function animalCount(species) {
  const allAnimals = {};
  animals.forEach((animal) => { allAnimals[animal.name] = animal.residents.length; });
  if (!species) return allAnimals;
  return allAnimals[species];
}
// console.log(animalCount());
// console.log(animalCount('lions'));
// console.log(animalCount('snakes'));

function entryCalculator(entrants) {
  if (!entrants) return 0;
  let total = 0;
  Object.keys(prices).forEach((person) => {
    if (entrants[person]) {
      total += entrants[person] * prices[person];
    }
  });
  return total;
}
// console.log(entryCalculator());
// console.log(entryCalculator({}));

function animalMap(options) {
}

function schedule(dayName) {
// Ao chamar a função sem parâmetros: retorna um objeto com o cronograma inteiro
// Ao chamar a função com 1 parâmetro: retorna um objeto com o cronograma apenas do dia

// Formato do objeto de retorno (cronograma):
// chave === dia da semana
// valor === legível para humanos
// cronograma legível para humanos === 'Open from X until Y'
// cronograma legível para humanos quando o zoo não abre === 'CLOSED'

// 1. Buscar onde estão as infos de funcionamento do zoo (objeto hours)
// 2. Passar por cada entrada do objeto e buscar as infos do dia
// 3. Pegar as informações do zoo
// 4. Montar o cronograma
// 5. Retorna o cronograma

  const days = Object.keys(hours);
  const schedule = {};

  days.forEach((day) => {
    const { open, close } = hours[day];
    if (day === 'Monday') {
      schedule[day] = 'CLOSED';
    } else {
      schedule[day] = `Open from ${open}am until ${close - 12}pm`;
    }
    /* (day === 'Monday') ? (schedule[day] = 'CLOSED') : (schedule[day] = `Open from ${open}am until ${close - 12}pm`); */
  });

  if (!dayName) {
    return schedule;
  } else {
    return { [dayName] : schedule[dayName] };
  }
}
console.log(schedule());
console.log(schedule('Monday'));
console.log(schedule('Tuesday'));

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
