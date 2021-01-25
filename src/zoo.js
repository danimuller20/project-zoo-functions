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
const data = require('./data');

function animalsByIds(...ids) {
  return (ids.length === 0) ? ids : animals.filter(animal => ids.includes(animal.id));
}

function animalsOlderThan(animal, minAge) {
  const name = animals.find(specie => (animal === specie.name)).residents;
  return name.every(individual => individual.age >= minAge);
}

function employeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return employees.find(name => name.lastName === employeeName || name.firstName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some(({ managers }) => managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  const animalsObject = { };
  if (species === undefined) {
    animals.forEach(animal => (animalsObject[animal.name] = animal.residents.length));
    return animalsObject;
  }
  return animals.find(animal => species.includes(animal.name)).residents.length;
}

function entryCalculator(entrants) {
  let entryTotalFee = 0;
  if (!entrants) {
    return entryTotalFee;
  }
  Object.keys(prices).forEach((age) => {
    if (entrants[age]) {
      entryTotalFee += prices[age] * entrants[age];
    }
  });
  return entryTotalFee;
}

function animalMap(options) {
  /* const locationObject = { };
  if (options === undefined) {
    return {
    NE: animals.filter(animal => animal.location === 'NE').map(animal => animal.name),
    NW: animals.filter(animal => animal.location === 'NW').map(animal => animal.name),
    SE: animals.filter(animal => animal.location === 'SE').map(animal => animal.name),
    SW: animals.filter(animal => animal.location === 'SW').map(animal => animal.name),
    }
  } */
}

function schedule(dayName) {
  const zooSchedule = {
    Tuesday: 'Open from 8am until 6pm',
    Wednesday: 'Open from 8am until 6pm',
    Thursday: 'Open from 10am until 8pm',
    Friday: 'Open from 10am until 8pm',
   Saturday: 'Open from 8am until 10pm',
    Sunday: 'Open from 8am until 8pm',
   Monday: 'CLOSED',
  };

  if (dayName === undefined) {
    return zooSchedule;
  }
  const daySchedule = Object.entries(zooSchedule).filter(index => index[0] === dayName);
  const objectDaySchedule = Object.fromEntries(daySchedule);
  return objectDaySchedule;
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
