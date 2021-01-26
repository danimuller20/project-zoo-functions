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
// LET'S DO THIS!

const { prices } = require('./data');
const data = require('./data');

const { animals } = data;
const { employees } = data;

const managersList = [];
employees.forEach(worker => worker.managers.forEach((id) => {
  managersList.push(id);
}));


function animalsByIds(...ids) {
  if (ids.length === 0) return [];
  const foundIds = [];
  ids.forEach((number) => {
    const checkId = number;
    const animalFound = data.animals.find(creature => creature.id === checkId);
    foundIds.push(animalFound);
  });
  return foundIds;
}

function animalsOlderThan(animal, age) {
  const animalsToCheckAge = animals.find(iteratedAnimal => (
    iteratedAnimal.name === animal));
  return animalsToCheckAge.residents.every(resident => resident.age > age);
}

function employeeByName(string) {
  if (!string) return {};

  return employees.find(person => (
    person.firstName === string || person.lastName === string
  ));
}

function createEmployee(personalInfo, associatedWith) {
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

function isManager(id) {
  const person = employees.find(number => number.id === id);
  return managersList.some(worker => worker === person.id);
}

function addEmployee(id = [], firstName = [], lastName = [], managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return employees.push(newEmployee);
}

function animalPopulation() {
  const allAnimals = {};
  animals.forEach((type) => {
    allAnimals[type.name] = type.residents.length;
  });
  return allAnimals;
}

function animalCount(species) {
  if (!species) {
    return animalPopulation();
  }
  const countSpecimens = animals.find(creature => creature.name === species);
  return countSpecimens.residents.length;
}

function entryCalculator(entrants = {}) {
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  if (entrants === {} || entrants === 0) {
    return 0;
  }
  const total = (prices.Adult * Adult) + (prices.Child * Child) + (prices.Senior * Senior);
  return total;
}

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName = 0) {
  const day = {};
  const openDays = {
    Tuesday: 'Open from 8am until 6pm',
    Wednesday: 'Open from 8am until 6pm',
    Thursday: 'Open from 10am until 8pm',
    Friday: 'Open from 10am until 8pm',
    Saturday: 'Open from 8am until 10pm',
    Sunday: 'Open from 8am until 8pm',
    Monday: 'CLOSED',
  };
  if (dayName === 0) {
    return openDays;
  }
  if (dayName in openDays) {
    day[dayName] = openDays[dayName];
  }
  return day;
}

function oldestFromFirstSpecies(id) {
  const person = employees.find(number => number.id === id).responsibleFor;
  const foundAnimal = animals.find(species => species.id === person[0]).residents;
  const foundAnimalCopy = foundAnimal.slice();
  const residentsFound = foundAnimalCopy.sort((a, b) => b.age - a.age)[0];
  const result = [];
  result.push(residentsFound.name, residentsFound.sex, residentsFound.age);
  return result;
}

function increasePrices(percentage) {
  prices.Adult = Math.ceil(prices.Adult * (100 + percentage)) / 100;
  prices.Senior = Math.ceil(prices.Senior * (100 + percentage)) / 100;
  prices.Child = Math.ceil(prices.Child * (100 + percentage)) / 100;
}

function employeesAndAnimals() {
  const workersTable = {};
  const worker = employees.forEach(person => {
    workersTable[`${person.firstName} ${person.lastName}`] = person.responsibleFor.map(iteratedId => {
      return animals.find(iteratedAnimal => iteratedAnimal.id === iteratedId).name;
    })
  })
  return workersTable;
}

function idEmployee(idOrName) {
  const worker = employees.find(person => {
    return person.firstName === idOrName ||
    person.lastName === idOrName ||
    person.id === idOrName
  });
  return worker
}

function idAnimal(id) {
  const caredAnimals = id.map(iteratedId => {
    return animals.find(iteratedAnimal => iteratedAnimal.id === iteratedId).name;
  })
  return caredAnimals;
}
function employeeCoverage(idOrName) {
  if(!idOrName) return employeesAndAnimals();

  const worker = idEmployee(idOrName);
  const workerInfo = `${worker.firstName} ${worker.lastName}`;
  
  const caredAnimals = idAnimal(worker.responsibleFor)
  console.log(caredAnimals)
  const result = {};
  result[workerInfo] = caredAnimals;
  return result;
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
