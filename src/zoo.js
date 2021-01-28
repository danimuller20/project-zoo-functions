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
  // seu código aquia
  // nenhum parametro? retornar array vazio
  // um unico parametro? retornar o objeto do animal referente ao ID apresentado
  // mais de um parametro? retornar array com todas as especies referentes aos IDs
  const result = ids.map(actualId => data.animals.find(animal => actualId === animal.id));
  return result;
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const findAnimal = data.animals.find(actualAnimal => actualAnimal.name === animal);
  return findAnimal.residents.every(residents => residents.age > age);
}

function employeeByName(employeeName) {
  // seu código aqui
  const Employee = data.employees.find(aEmployeeName => aEmployeeName.firstName === employeeName
    ||
    aEmployeeName.lastName === employeeName);
  if (Employee === undefined) {
    return {};
  }
  return Employee;
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const newEmployee = { ...personalInfo, ...associatedWith };
  return newEmployee;
}

function isManager(id) {
  // seu código aqui
  const manager = data.employees.find(employeeId =>
    employeeId.managers.find(currentValue => currentValue === id) === id);
  if (manager === undefined) {
    return false;
  }
  return true;
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers: [],
    responsibleFor: [],
  };
  if (managers !== undefined) { newEmployee.managers = managers; }
  if (responsibleFor !== undefined) { newEmployee.responsibleFor = responsibleFor; }
  data.employees.push(newEmployee);
}

function animalCount(species = undefined) {
  // seu código aqui
  const list = {};
  if (species === undefined) {
    data.animals.forEach(currentValue => list[currentValue.name] = currentValue.residents.length);
    return list;
  }
  return data.animals.find(currentValue => currentValue.name === species).residents.length;
}

function entryCalculator(entrants) {
  // seu código aqui
  let fullPrice = 0;
  if (entrants === undefined) {
    return 0;
  }
  Object.keys(entrants).forEach((key) => { fullPrice += data.prices[key] * entrants[key] });
  return fullPrice;
}

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName = undefined) {
  // seu código aqui
  const list = {};
  const { hours } = data;
  const objectSize = Object.keys(hours).length - 1;
  const lastDay = Object.keys(hours)[objectSize];
  if (dayName === undefined) {
    for (let index = 0; index < (Object.keys(hours).length - 1); index += 1) {
      const day = Object.keys(hours)[index];
      const inicialHour = Object.values(Object.values(hours)[index])[0];
      const finalHour = Object.values(Object.values(hours)[index])[1];
      list[day] = (`open from ${inicialHour}am until ${finalHour}pm`);
    }
    list[lastDay] = ('CLOSED');
    return list;
  }
  return 'ainda nao acabei';
}
//console.log(schedule());
function oldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
  const { prices } = data;
  const finalPrice = prices.Adult * ((percentage / 100) + 1);
  return finalPrice;
}
console.log(increasePrices(30))
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
