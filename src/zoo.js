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
const { animals, employees, prices, hours } = require('./data');

function animalsByIds(...ids) {
  return animals.filter(({ id }) => ids.includes(id));
}

function animalsOlderThan(animal, age) {
  const matchingAnimals = animals.find(element => element.name === animal);
  return matchingAnimals.residents.every(element => element.age > age);
}

function employeeByName(employeeName) {
  let result = { };
  employees.forEach((theEmployee, positionEmployee, list) => {
    if (theEmployee.firstName === employeeName || theEmployee.lastName === employeeName) {
      result = list[positionEmployee];
    }
  });
  return result;
}

function createEmployee(personalInfo, associatedWith) {
  return Object.assign(personalInfo, associatedWith);
}

function listManagers() {
  return data.employees
    .map(employee => employee.managers)
    .reduce((acc, val) => acc.concat(val), []);
}

function isManager(id) {
  const managersList = listManagers();
  return managersList.some(idManager => idManager === id);
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  if (!managers) { managers = []; }
  if (!responsibleFor) { responsibleFor = []; }
  employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  const animaisListaCont = { };
  animals.forEach((animal) => { animaisListaCont[animal.name] = animal.residents.length; });
  if (species) {
    return animaisListaCont[species];
  }
  return animaisListaCont;
}

function entryCalculator(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  let adultPrice = 0;
  let childPrice = 0;
  let seniorPrice = 0;
  adultPrice = entrants.Adult * prices.Adult;
  childPrice = entrants.Child * prices.Child;
  seniorPrice = entrants.Senior * prices.Senior;
  if (Number.isNaN(childPrice)) childPrice = 0;
  if (Number.isNaN(seniorPrice)) seniorPrice = 0;
  if (Number.isNaN(adultPrice)) adultPrice = 0;
  return (adultPrice + childPrice + seniorPrice);
}

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  const displaySchedule = {};
  Object.keys(hours).forEach(day => ((hours[day].open !== hours[day].close) ?
    (displaySchedule[day] = `Open from ${hours[day].open}am until ${hours[day].close - 12}pm`) :
    (displaySchedule[day] = 'CLOSED')));
  return dayName ? { [dayName]: displaySchedule[dayName] } : displaySchedule;
}
function oldestFromFirstSpecies(id) {
  const requestEmployee = employees.find(employee => employee.id === id);
  const firstIdAnimal = requestEmployee.responsibleFor[0];
  const speciesList = animals.find(animal => animal.id === firstIdAnimal);
  const arrayResidents = speciesList.residents;
  let maxAge = 0;
  for (let index = 0; index < Object.keys(arrayResidents).length; index += 1) {
    if (arrayResidents[index].age > maxAge) {
      maxAge = arrayResidents[index].age;
    }
  }
  const founderAnimal = animals.find(element => element.name === speciesList.name).residents;
  const fim = founderAnimal.find(creature => creature.age === maxAge);
  return [fim.name, fim.sex, fim.age];
}

function increasePrices(percentage) {
  prices.Adult = (Math.round((((percentage / 100) + 1) * prices.Adult) * 100)) / 100;
  prices.Child = (Math.round((((percentage / 100) + 1) * prices.Child) * 100)) / 100;
  prices.Senior = (Math.round((((percentage / 100) + 1) * prices.Senior) * 100)) / 100;
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
