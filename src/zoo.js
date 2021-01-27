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

const { animals, employees, prices, hours } = data;

function animalsByIds(...ids) {
  return animals.filter(animal => ids.some(id => id === animal.id));
}

function animalsOlderThan(animal, age) {
  return animals
  .find(animalName => (animal) === animalName.name).residents
  .every(value => value.age >= age);
}

function employeeByName(employeeName) {
  if (!employeeName) return {};
  return employees
  .find(name => employeeName === name.firstName
  ||
  employeeName === name.lastName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(receivedId) {
  return employees
  .some(employeeMananger => employeeMananger.managers
    .find(id => id === receivedId));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  employees.push(newEmployee);
}

function animalCount(species) {
  const allAnimals = {};
  animals.forEach(animal => (allAnimals[animal.name] = animal.residents.length));
  if (!species) return allAnimals;
  return allAnimals[species];
}

function entryCalculator(entrants) {
  let total = 0;
  if (entrants) {
    Object.keys(prices).forEach((ageRange) => {
      if (entrants[ageRange]) {
        total += prices[ageRange] * entrants[ageRange];
      }
    });
  }
  return total;
}

function animalMap(options) {
  // skipped
}

const editedGmtSchedule = {
  Tuesday: 'Open from 8am until 6pm',
  Wednesday: 'Open from 8am until 6pm',
  Thursday: 'Open from 10am until 8pm',
  Friday: 'Open from 10am until 8pm',
  Saturday: 'Open from 8am until 10pm',
  Sunday: 'Open from 8am until 8pm',
  Monday: 'CLOSED',
};

function schedule(dayName) {
  if (dayName === 'Monday') return { Monday: 'CLOSED' };
  if (!dayName) return editedGmtSchedule;
  const { open, close } = hours[dayName];
  return { [dayName]: `Open from ${open}am until ${close - 12}pm` };
}

function getOlderAnimalFromSpecies(resident) {
  return resident
  .reduce((previousValue, currentValue) => 
  (currentValue.age >= previousValue.age ? currentValue : previousValue));
}

function oldestFromFirstSpecies(id) {
  const getEmployeeId = employees.find(value => value.id === id).responsibleFor[0];
  const animalResident = animals.find(value => value.id === getEmployeeId).residents;
  const olderSpecie = getOlderAnimalFromSpecies(animalResident);
  return Object.values(olderSpecie);
}

function increasePrices(percentage) {
  // seu código aqui
}

function getAnimalsFromEmployees(employee) {
  return employee.responsibleFor
  .map(animalID => animals.find(animal => animalID === animal.id).name);
}

function constructEmployeeFullName(employee) {
  return `${employee.firstName} ${employee.lastName}`;
}

function getAllEmployeesAndAnimals() {
  return employees.reduce((accumulator, employee) => {
    const animalList = getAnimalsFromEmployees(employee);
    accumulator[constructEmployeeFullName(employee)] = animalList;
    return (accumulator);
  }, {});
}

function getEmployeeByNameOrId(idOrName) {
  return employees
  .find(employee =>
    idOrName === employee.firstName ||
    idOrName === employee.lastName ||
    idOrName === employee.id);
}
function employeeCoverage(idOrName) {
  if (!idOrName) return getAllEmployeesAndAnimals();
  const targetEmployee = getEmployeeByNameOrId(idOrName);
  const animalList = getAnimalsFromEmployees(targetEmployee);
  return { [constructEmployeeFullName(targetEmployee)]: animalList };
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
