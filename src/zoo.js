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
  hours,
  prices,
} = data;

function animalsByIds(...ids) {
  const animalsIds = [...ids];
  return animals.filter(animal => animalsIds.includes(animal.id));
}

function animalsOlderThan(animal, age) {
  const animalObject = animals.find(species => species.name === animal);
  return animalObject.residents.every(resident => resident.age > age);
}

function employeeByName(employeeName) {
  if (employeeName === undefined) return {};
  return employees.find(employee =>
    (employeeName === employee.firstName || employeeName === employee.lastName));
}

function createEmployee(personalInfo, associatedWith) {
  const {
    id,
    firstName,
    lastName,
  } = personalInfo;
  const {
    managers,
    responsibleFor,
  } = associatedWith;
  return {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
}

function isManager(id) {
  const managersIds = employees.map(employee => employee.managers);
  return managersIds.some(array => array.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push(createEmployee({
    id,
    firstName,
    lastName,
  }, {
    managers,
    responsibleFor,
  }));
}

function animalCount(species) {
  if (species !== undefined) {
    const {
      residents,
    } = animals.find(animal => animal.name === species);
    return residents.length;
  }
  return animals.reduce((acc, currentValue) => {
    acc[currentValue.name] = currentValue.residents.length;
    return acc;
  }, {});
}

function entryCalculator(entrants = {}) {
  const {
    Adult = 0, Child = 0, Senior = 0,
  } = entrants;
  return ((Adult * prices.Adult) + (Child * prices.Child) + (Senior * prices.Senior));
}

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  if (dayName === 'Monday') {
    const day = {};
    day[dayName] = 'CLOSED';
    return day;
  }
  if (dayName !== undefined) {
    const day = {};
    day[dayName] = `Open from ${hours[dayName].open}am until ${hours[dayName].close - 12}pm`;
    return day;
  }

  const scheduleEntries = Object.entries(hours);
  return scheduleEntries.reduce((acc, currentValue) => {
    if (currentValue[0] === 'Monday') {
      acc[currentValue[0]] = 'CLOSED';
    } else {
      acc[currentValue[0]] = `Open from ${currentValue[1].open}am until ${currentValue[1].close - 12}pm`;
    }
    return acc;
  }, {});
}

function oldestFromFirstSpecies(id) {
  employee = employees.find((employee) => employee.id === id);
  fisrtAnimalsResponsibleFor = animals.find((animal) => employee.responsibleFor[0] === animal.id).residents;
  oldestAnimal = fisrtAnimalsResponsibleFor.reduce((oldest, currentAnimal) =>{
    if(oldest.age < currentAnimal.age){
      oldest = currentAnimal;
    }
    return oldest;
  });

  return Object.values(oldestAnimal);
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
