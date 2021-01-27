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

function employeeByName(name) {
  if (!name) return {};
  return employees.find(({ firstName, lastName }) => lastName === name || firstName === name);
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
  const allDays = Object.keys(hours);
  function formatHourFrom24(close) {
    if (close > 12) {
      return close - 12;
    }
    return close;
  }
  allDays.forEach((day) => {
    const { open, close } = hours[day];
    if (day === 'Monday') {
      zooSchedule[day] = 'CLOSED';
    } else {
      zooSchedule[day] = `Open from ${open}am until ${formatHourFrom24(close)}pm`;
    }
  });
  if (!dayName) return zooSchedule;
  return { [dayName]: zooSchedule[dayName] };
}

function oldestFromFirstSpecies(employeeId) {
  const firstSpeciesId = employees.find(({ id }) => id.includes(employeeId)).responsibleFor[0];
  const firstSpeciesResidents = animals.find(({ id }) => id.includes(firstSpeciesId)).residents;
  let oldestAge = 0;
  firstSpeciesResidents.forEach((animal) => {
    if (animal.age > oldestAge) {
      oldestAge = animal.age;
    }
  });
  return Object.values(firstSpeciesResidents.find(animal => animal.age === oldestAge));
}

function increasePrices(percentage) {
  Object.keys(prices).forEach((key) =>{
    prices[key] = Math.ceil((prices[key] * (percentage + 100))) / 100;
  });
  return prices;
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
