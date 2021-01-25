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

const { animals, employees, prices, hours } = require('./data');
const data = require('./data');

function animalsByIds(...ids) {
  if (ids.length === 0) {
    return [];
  }
  return ids.map(arrayIds => animals.find(arrayAnimals => arrayAnimals.id === arrayIds));
}

function animalsOlderThan(animal, age) {
  return animals.find(animalFind => animalFind.name === animal)
  .residents.every(arrayResidents => arrayResidents.age >= age);
}

function employeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return employees.find(employee =>
  employee.firstName === employeeName || employee.lastName === employeeName);
}

function createEmployee({ id, firstName, lastName }, { managers, responsibleFor }) {
  return { id, firstName, lastName, managers, responsibleFor };
}

function isManager(id) {
  let returValue = false;
  employees.forEach((arrayEmployees) => {
    if (arrayEmployees.managers.some(manager => (manager === id))) {
      returValue = true;
    }
  });
  return returValue;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push(createEmployee({ id, firstName, lastName }, { managers, responsibleFor }));
}

function animalCount(species) {
  if (species === undefined) {
    const objectAnimals = {};
    animals.forEach(animal => (objectAnimals[animal.name] = animal.residents.length));
    return objectAnimals;
  }
  return animals.find(animal => animal.name === species).residents.length;
}

function entryCalculator(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  let accumulator = 0;
  Object.keys(entrants).forEach((index) => {
    accumulator += (prices[index] * entrants[index]);
  });
  return accumulator;
}

function animalMap(options) {
  // seu código aqui
}

function makeTextSchedule(open, close) {
  if (open === 0 && close === 0) {
    return 'CLOSED';
  }
  if (close > 11) {
    close -= 12;
  }
  return `Open from ${open}am until ${close}pm`;
}

function schedule(dayName) {
  const objectSchedule = {};
  if (dayName === undefined) {
    Object.keys(hours).forEach((day) => {
      (objectSchedule[day] = makeTextSchedule(hours[day].open, hours[day].close));
    });
    return objectSchedule;
  }
  objectSchedule[dayName] = makeTextSchedule(hours[dayName].open, hours[dayName].close);
  return objectSchedule;
}

function oldestFromFirstSpecies(id) {
  const animalSelected = employees.find(employee => employee.id === id).responsibleFor[0];
  const arraySort = animals.find(objectAnimal => objectAnimal.id === animalSelected).residents;
  return Object.values(arraySort.sort((value1, value2) => value2.age - value1.age)[0]);
}

function percentualAdjust(value, percentageValue) {
  return parseFloat((Math.round(value * percentageValue) / 100) + value).toFixed(2);
}

function increasePrices(percentage) {
  prices.Adult = parseFloat(percentualAdjust(prices.Adult, percentage));
  prices.Senior = parseFloat(percentualAdjust(prices.Senior, percentage));
  prices.Child = parseFloat(percentualAdjust(prices.Child, percentage));
}

function selectEmployee(employeeSelected) {
  return employees.find(valueEmployee => valueEmployee.id === employeeSelected ||
  valueEmployee.firstName === employeeSelected || valueEmployee.lastName === employeeSelected);
}

function listAnimals(arrayList) {
  const arrayAnimals = [];
  arrayList.forEach(animal => arrayAnimals.push(animals.find(id => animal === id.id).name));
  return arrayAnimals;
}

function employeeCoverage(idOrName) {
  const objectReturn = {};
  if (idOrName === undefined) {
    employees.forEach(employee =>
      objectReturn[`${employee.firstName} ${employee.lastName}`] = listAnimals(employee.responsibleFor));
    return objectReturn;
  }
  const employee = selectEmployee(idOrName);
  objectReturn[`${employee.firstName} ${employee.lastName}`] = listAnimals(employee.responsibleFor);
  return objectReturn;
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
