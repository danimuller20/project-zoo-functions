/*
eslint no-unused-vars: [
  'error',
  {
    'args': 'none',
    'vars': 'local',
    'varsIgnorePattern': 'data'
  }
]
*/

const data = require('./data');

const { animals } = data;
const { employees } = data;
const { prices } = data;
const { hours } = data;

function animalsByIds(...ids) {
  // seu código aqui

  const foundAnimals = ids.map((idOfIds) => {
    const findById = animals.find(({ id }) => id === idOfIds);

    return findById;
  });

  return foundAnimals;
}

function animalsOlderThan(animal, age) {
  // seu código aqui

  const isEveryResidentOlder = data.animals
    .find(animalOfAnimals => animalOfAnimals.name === animal) // Find the animal
    .residents //  Vccess the residents
    .every(resident => resident.age >= age); // Verify if every resident has the minimum age

  return isEveryResidentOlder;
}

function findEmployeeByName(employeeName) {
  const foundEmployee = employees
  .find(employee => employee.firstName === employeeName || employee.lastName === employeeName);

  return foundEmployee;
}

function employeeByName(employeeName) {
  // seu código aqui
  if (typeof employeeName === 'undefined') {
    return {};
  }

  return findEmployeeByName(employeeName);
}

function createEmployee({ id, firstName, lastName }, { managers, responsibleFor }) {
  // seu código aqui

  return {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
}

function isManager(id) {
  // seu código aqui

  const listOfManagers = employees
    .map(({ managers }) => managers)
    .some(managerArray => managerArray.some(manager => manager === id));

  return listOfManagers;
}

function addEmployee(
  id,
  firstName,
  lastName,
  managers = [],
  responsibleFor = [],
) {
  // seu código aqui

  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };

  employees.push(newEmployee);
}

function showSpeciesNumberOfResidents() {
  const objectOfAnimals = {};

  animals.forEach((animal) => {
    objectOfAnimals[animal.name] = animal.residents.length;
  });

  return objectOfAnimals;
}

function animalCount(species) {
  // seu código aqui

  if (species === undefined) {
    return showSpeciesNumberOfResidents();
  }

  return animals.find(animal => animal.name === species).residents.length;
}

function entryCalculator(entrants) {
  // seu código aqui

  if (typeof entrants === 'undefined') {
    return 0;
  }

  const total = Object.keys(entrants).reduce(
    (acc, typeOfEntrant) =>
      acc + (entrants[typeOfEntrant] * prices[typeOfEntrant]),
    0,
  );

  return total;
}

function animalMap(options) {
  // seu código aqui
}

function scheduleList() {
  const scheduleObject = {};

  Object.keys(hours).forEach(day => (scheduleObject[day] = `Open from ${hours[day].open}am until ${hours[day].close - 12}pm`));

  scheduleObject.Monday = 'CLOSED';

  return scheduleObject;
}

function schedule(dayName) {
  // seu código aqui

  if (typeof dayName === 'undefined') {
    return scheduleList();
  }

  const daySchedule = {
    [dayName]: `Open from ${hours[dayName].open}am until ${hours[dayName].close - 12}pm`,
  };

  if (daySchedule.Monday) {
    daySchedule.Monday = 'CLOSED';
  }

  return daySchedule;
}

function returnAnimalId(employeeId) {
  const animalId = employees.find((employee) => employee.id === employeeId)
    .responsibleFor[0];

  return animalId;
}

function returnAnimalObject(animalId) {
  const animalInfoObject = animals
    .find((animal) => animal.id === animalId)
    .residents.reduce((acc, resident) =>
      resident.age > acc.age ? resident : acc
    );

  return animalInfoObject;
}

function oldestFromFirstSpecies(id) {
  // seu código aqui

  const animalId = returnAnimalId(id);
  const animalInfoObject = returnAnimalObject(animalId);

  return Object.values(animalInfoObject);
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
