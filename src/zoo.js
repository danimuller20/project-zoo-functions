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
  return animals.filter(animal => ids.some(currentId => currentId === animal.id));
}

function animalsOlderThan(animal, age) {
  return animals.some(currentAnimal => currentAnimal.name === animal
    && currentAnimal.residents.every(currentResident => currentResident.age > age));
}

function employeeByName(employeeName) {
  return employeeName !== undefined ? employees.find(
    targetEmployee => targetEmployee.firstName === employeeName
      || targetEmployee.lastName === employeeName) : {};
}

function createEmployee(personalInfo, associatedWith) {
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;
  return { id, firstName, lastName, managers, responsibleFor };
}

function isManager(id) {
  return employees.some(currentEmployee =>
    currentEmployee.managers.some(currentManagerId => currentManagerId === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  /*   return species !== undefined ? animals.residents.length
      : animals.map(animalsList => ({ [animalsList.name]: animalsList.residents.length })); */
}

function entryCalculator(entrants) {
  return entrants === undefined || Object.keys(entrants).length === 0 ? 0 :
    Object.keys(entrants).reduce((totalEntry, currentPerson) => {
      totalEntry += prices[currentPerson] * entrants[currentPerson];
      return totalEntry;
    }, 0);
}

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  const fullSchedule = Object.keys(hours);
  const output = {};
  if (!dayName) {
    fullSchedule.forEach((day) => {
      if (day === 'Monday') {
        output[`${day}`] = 'CLOSED';
      } else {
        output[`${day}`] = `Open from ${hours[day].open}am until ${hours[day].close - 12}pm`;
      }
    });

    return output;
  }

  return dayName === 'Monday' ? { [dayName]: 'CLOSED' } : { [dayName]: `Open from ${hours[dayName].open}am until ${hours[dayName].close - 12}pm` };
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
