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
  return animals.filter(animal => ids.find(animalId => animal.id === animalId));
}

function animalsOlderThan(animal, age) {
  const animalSpecies = animals.find(currentAnimal => currentAnimal.name === animal);
  return animalSpecies.residents.every(resident => resident.age >= age);
}

function employeeByName(employeeName) {
  if (!employeeName) return {};
  return employees
    .find(({ firstName, lastName }) => firstName === employeeName || lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees
    .some(currentEmployee => currentEmployee.managers.some(managerId => managerId === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push({
    id,
    firstName,
    lastName,
    managers: [...managers],
    responsibleFor: [...responsibleFor],
  });
}

function animalCount(species) {
  if (!species) {
    return animals.reduce((acc, act) => {
      acc[act.name] = act.residents.length;
      return acc;
    }, {});
  }

  return animals.find(currentAnimal => currentAnimal.name === species).residents.length;
}

function entryCalculator(entrants = {}) {
  const paramLength = Object.keys(entrants).length;
  if (!entrants || paramLength === 0) return 0;

  const { Adult: qtaA = 0, Child: qtdC = 0, Senior: qtdS = 0 } = entrants;
  const { Adult, Child, Senior } = prices;
  return ((Adult * qtaA) + (Child * qtdC) + (Senior * qtdS));
}

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  const days = Object.keys(hours)
  const scheduleObject = {};

  days.forEach((day) => {
    const { open, close } = hours[day];

    if(day === 'Monday') {
      scheduleObject[day] = `CLOSED`;
    } else {
      scheduleObject[day] = `Open from ${open}am until ${close - 12}pm`;
    }
  });

  if (!dayName) return scheduleObject;

  return { [dayName]: scheduleObject[dayName] }
}

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
