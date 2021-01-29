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

const { animals, employees, prices } = require('./data');

function animalsByIds(...ids) {
  const result = [];
  ids.forEach((id) => {
    animals.filter(animal => (animal.id === id ? result.push(animal) : undefined));
  });
  return result;
}

function animalsOlderThan(animal, age) {
  const findanimal = animals.find(animalElement => animalElement.name === animal);

  const hasMinAge = findanimal.residents.every(ageElement => ageElement.age >= age);

  return hasMinAge;
}

function employeeByName(employeeName) {
  if (!employeeName) return {};
  const findedEmployer = employees.find(e => e.firstName === employeeName
    || e.lastName === employeeName);
  return findedEmployer;
}

function createEmployee(personalInfo, associatedWith) {
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

function isManager(id) {
  const result = employees.some(manager => manager.managers
    .some(findmanager => findmanager === id));
  return result;
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  if (!managers) managers = [];
  if (!responsibleFor) responsibleFor = [];

  const newEmployer = { id, firstName, lastName, managers, responsibleFor };

  return employees.push(newEmployer);
}

function animalCount(species) {
  const animal = animals.find(findAnimal => findAnimal.name === species);

  return animal.residents.length;
}

function entryCalculator(entrants) {
  if (!entrants) return 0;
  if (entrants.length === 0) return 0;

  return (prices.Adult * (entrants.Adult ? entrants.Adult : 0)) +
    (prices.Child * (entrants.Child ? entrants.Child : 0)) +
    (prices.Senior * (entrants.Senior ? entrants.Senior : 0));
}

function animalMap(...options) {

}

function schedule(dayName) {
  switch (dayName) {
    case 'Tuesday':
      return { 'Tuesday': 'Open from 8am until 6pm' };
    case 'Wednesday':
      return { 'Wednesday': 'Open from 8am until 6pm' };
    case 'Thursday':
      return { 'Thursday': 'Open from 10am until 8pm' };
    case 'Friday':
      return { 'Friday': 'Open from 10am until 8pm' };
    case 'Saturday':
      return { 'Saturday': 'Open from 8am until 10pm' };
    case 'Sunday':
      return { 'Sunday': 'Open from 8am until 8pm' };
    case 'Monday':
      return { 'Monday': 'CLOSED' };
    default:
      return {
        'Tuesday': 'Open from 8am until 6pm',
        'Wednesday': 'Open from 8am until 6pm',
        'Thursday': 'Open from 10am until 8pm',
        'Friday': 'Open from 10am until 8pm',
        'Saturday': 'Open from 8am until 10pm',
        'Sunday': 'Open from 8am until 8pm',
        'Monday': 'CLOSED'
      };
  }
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
