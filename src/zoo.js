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
const { animals } = require('./data');
const { employees } = require('./data');
const { prices } = require('./data');
const { hours } = require('./data');

function animalsByIds(...ids) {
  return ids.map(id => animals.find(animal => id === animal.id));
}

function animalsOlderThan(animal, age) {
  const findEspecie = animals.find(especie => (especie.name === animal));
  return findEspecie.residents.every(idade => (idade.age > age));
}

function employeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  const findEmployees = employees
    .find(func => func.firstName === employeeName || func.lastName === employeeName);
  return findEmployees;
}

function createEmployee(personalInfo, associatedWith) {
  const newEmployee = { ...personalInfo, ...associatedWith };
  return newEmployee;
}

function isManager(id) {
  return employees.some(employeer =>
    employeer.managers.some(employeerId => employeerId === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  if (!species) {
    return animals.reduce((acc, animal) => {
      acc[animal.name] = animal.residents.length;
      return acc;
    }, {});
  } return animals.find(({ name }) => name === species).residents.length;
}

function entryCalculator(entrants) {
  if (!entrants) {
    return 0;
  }
  return Object.keys(entrants).reduce((sum, people) => {
    sum += entrants[people] * prices[people];
    return sum;
  }, 0);
}

function animalMap(options) {
  /* const { includeNames = false, sex, sorted = false } = options;
  if (includeNames) {
    return retrieveAnimalPerLocationWithName();
  }
} */
 /* function retrieveAnimalPerLocationWithName(locations) {
  return retrieveAnimalPerLocation(locations);
  } */
 
 /* function retrieveAnimalPerLocation(locations) {
  const animalsPerLocation = { };
  locations.forEach((location) => {
    const filteredAnimals = animals
    .filter((animal) => animal.location === location)
    .map((animal) => {
      const nameKey = animal.name;
      const names = animal.residents.map((resident) => resident.name);
      return {[nameKey]: names };
    });
    const location = retrieveAvailableLocations();
      animalsPerLocation[location] = filteredAnimals;
        return animalsPerLocation;
    });
  } */
 /* function retrieveAvailableLocations() {
    return ['NE', 'NW', 'SE', 'SW'];
    */
};
function schedule(dayName) {
  const newObject = {};
  const objectValue = Object.keys(hours);
  objectValue.forEach((calendar) => {
    const { open, close } = hours[calendar];
   if(calendar === 'Monday') {
     return newObject[calendar] = 'CLOSED';
    } return newObject[calendar] = `Open from ${open}am until ${close -12}pm`;
  });
  if (!dayName) {
    return newObject;
  } return { [dayName]: newObject[dayName] };
  };

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
