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

const {
  animals,
  employees,
  prices,
  hours,
} = data;

function animalsByIds(...ids) {
  const newArr = [];
  ids.forEach((id) => {
    const animalsIds = animals.find(animal => id === animal.id);
    newArr.push(animalsIds);
  });
  return newArr;
}

function animalsOlderThan(animal, age) {
  const animalObj = animals.find(value => animal === value.name);
  return animalObj.residents.every(specie => specie.age >= age);
}

function employeeByName(employeeName) {
  const searchEmployee = employees.find(employee => employee.firstName === employeeName ||
    employee.lastName === employeeName);

  if (!searchEmployee) return {};
  return searchEmployee;
}

function createEmployee(personalInfo, associatedWith) {
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

function isManager(id) {
  const findManager = employees.find(employee => employee.managers.find(manager => manager === id));
  if (findManager) return true;
  return false;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function animalCount(species) {
  if (species) {
    const objAnimal = animals.find(specie => specie.name === species);
    return objAnimal.residents.length;
  }

  const newObj = {};
  animals.forEach(animal => (newObj[animal.name] = animal.residents.length));
  return newObj;
}

function entryCalculator(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;

  // baseado na resolução do Thiago Carreira Vallim
  return Object.keys(entrants).reduce((acumulator, people) => acumulator +
    (entrants[people] * prices[people]), 0);
}

function animalLocation() {
  const newObj = {};
  animals.forEach((animal) => {
    if (!newObj[animal.location]) {
      newObj[animal.location] = [];
      newObj[animal.location].push(animal.name);
    } else {
      newObj[animal.location].push(animal.name);
    }
  });
  return newObj;
}
// console.log(animalLocation());

function includeAnimalNames() {
  // const animalNamesObj = {};

  const newArr = [];
  animals.forEach(animal => newArr.push(animal.name));
  return newArr;
}
// console.log(includeAnimalNames());

function animalMap(options) {
  /* if (!options) return animalLocation();
  if (options = { includeNames }) return includeAnimalNames();
  if (options = { sorted }) return includeAnimalNames(); */
}
// console.log(animalMap({ includeNames: true }))

function schedule(dayName) {
  // baseado na resolução do Gabriel Oliva
  const daysOfWeek = Object.keys(hours);
  const newObj = {};

  daysOfWeek.forEach((day) => {
    const { open, close } = hours[day];
    if (day === 'Monday') {
      newObj[day] = 'CLOSED';
    } else {
      newObj[day] = `Open from ${open}am until ${close - 12}pm`;
    }
  });
  if (!dayName) return newObj;

  return { [dayName]: newObj[dayName] };
}

function olderAnimal(specie) {
  return specie.residents.reduce(function (acum, valuePass) {
    return valuePass.age > acum.age ? valuePass : acum;
  });
}

function oldestFromFirstSpecies(id) {
  const idFirstSpecie = employees.find(employee => employee.id === id).responsibleFor[0];
  const specieSearch = animals.find(animal => animal.id === idFirstSpecie);
  const older = olderAnimal(specieSearch);
  return Object.values(older);
}

function newPrices(percent) {
  const oldPrices = Object.values(prices);
  return oldPrices.map((price) => {
    const increase = ((price * ((percent / 100) + 1)));
    const roundNum = ((Math.round(increase * 100)) / 100);
    return roundNum;
  });
}

function increasePrices(percentage) {
  const updated = newPrices(percentage);
  Object.keys(prices).forEach((value, i) => (prices[value] = updated[i]));

  return prices;
}

function employeesFullNamesWhithAnimalsNames() {
   // pegar o nome e o sobrenome do funcionário
  // descobrir o id do animal no array de responsible for
  const newObj = {};
  employees.forEach(employee => {
    newObj[`${employee.firstName} ${employee.lastName}`] = employee.responsibleFor
      .map(id => animals.find(animal => id === animal.id).name)});
  return newObj  
}

function findNamesOfEmployeeAndResponsiveAnimal(idOrName) {
  const newObj = {};
  const findEmployee = employees.find(employee => (idOrName === employee.id ||
    idOrName === employee.firstName || idOrName === employee.lastName));

  newObj[`${findEmployee.firstName} ${findEmployee.lastName}`] = findEmployee.responsibleFor
    .map(id => animals.find(animal => id === animal.id).name);

  return newObj;
}

function employeeCoverage(idOrName) {
  // retornar uma LISTA de funcionarios e animais por qual eles são responsaveis
  // funcionários: [animal, animal];

  if(!idOrName) {
    return employeesFullNamesWhithAnimalsNames();
  }
  return findNamesOfEmployeeAndResponsiveAnimal(idOrName);
}
console.log(employeeCoverage('4b40a139-d4dc-4f09-822d-ec25e819a5ad'))

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
