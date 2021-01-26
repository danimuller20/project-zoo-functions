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
  return (ids.length === 0) ? ids : animals.filter(animal => ids.includes(animal.id));
}

function animalsOlderThan(animal, minAge) {
  const name = animals.find(species => (animal === species.name)).residents;
  return name.every(individual => individual.age >= minAge);
}

function employeeByName(employeeName) {
  if (!employeeName) return {};
  return employees.find(({ firstName, lastName }) => lastName === employeeName || firstName === employeeName);
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
  const zooSchedule = { };
  Object.keys(hours).forEach(day => {
    if (day === 'Monday') return zooSchedule[`${day}`] = 'CLOSED';
    return (zooSchedule[`${day}`] = `Open from ${hours[day].open}am until ${hours[day].close}pm`);
  });

  if (!dayName) {
    return zooSchedule;
  }
  const daySchedule = Object.entries(zooSchedule).filter(index => index[0] === dayName);
  const objectDaySchedule = Object.fromEntries(daySchedule);
  return objectDaySchedule;
}

function oldestFromFirstSpecies(employeeId) {
  const employeeFirstSpeciesId = employees.find(({ id }) => id.includes(employeeId)).responsibleFor[0];
  const employeeFirstSpeciesResidents = animals.find(({ id }) => id.includes(employeeFirstSpeciesId)).residents;
  let oldestAge = 0;
  const findOldestAnimal = employeeFirstSpeciesResidents.forEach(animal => {
    if (animal.age > oldestAge) {
      oldestAge = animal.age;
    }
  });
  return Object.values(employeeFirstSpeciesResidents.find(animal => animal.age === oldestAge));
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
