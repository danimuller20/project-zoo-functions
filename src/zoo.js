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

const { animals, employees } = require('./data');
const data = require('./data');

function animalsByIds(...ids) {
  return animals.filter((species, index) => species.id === ids[index]);
}

function animalsOlderThan(animal, age) {
  return animals.find(nome => nome.name === animal).residents.every(idade => idade.age >= age);
}

function employeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return data.employees.find(nome => nome.firstName === employeeName ||
    nome.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return Object.assign(personalInfo, associatedWith);
}

function isManager(id) {
  const managers = [];
  employees.forEach((manager) => {
    if (manager.managers !== undefined) {
      managers.push(manager.managers);
    }
  });
  const managersconcat = managers.reduce((array, addarray) => array.concat(addarray));
  return managersconcat.some(managerId => managerId === id);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  data.employees.push(newEmployee);
}

function animalCount(species) {
  const lista = {};
  animals.forEach((value) => { lista[value.name] = value.residents.length; });
  if (!species) {
    return lista;
  }
  return lista[species];
}

function entryCalculator(entrants) {
  let totalPrices = 0;
  if (!entrants) {
    return 0;
  }
  Object.keys(entrants).forEach((value) => {
    totalPrices += (entrants[value] * data.prices[value]);
  });
  return totalPrices;
}

function animalMap(options) {

}

function schedule(dayName) {
  const cronograma = {};
  Object.keys(data.hours).forEach((dias) => {
    cronograma[dias] = `Open from ${data.hours[dias].open}am until ${data.hours[dias].close - 12}pm`;
  });
  cronograma.Monday = 'CLOSED';
  if (!dayName) {
    return cronograma;
  }
  if (dayName === 'Monday') { return { Monday: 'CLOSED' }; }
  return { [dayName]: cronograma[dayName] };
}

function oldestFromFirstSpecies(id) {
  let animalSenio = [];
  const idEmployee = employees.find(elemento => elemento.id === id);
  const animalId = animals.find(elementoId => elementoId.id === idEmployee.responsibleFor[0]);
  animalId.residents.forEach(addAge => animalSenio.push(addAge.age));
  animalSenio = Math.max(...animalSenio);
  animalSenio = animalId.residents.find(senio => senio.age === animalSenio);
  return Object.values(animalSenio);
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
