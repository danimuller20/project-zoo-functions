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

const { employees, prices, hours } = require('./data');

const data = require('./data');

const { animals } = data;

function animalsByIds(...ids) {
  return animals.filter(animal => ids.some(id => id === animal.id));
}

function animalsOlderThan(animal, minAge) {
  return animals
    .find(({ name }) => name === animal).residents
    .every(({ age }) => age >= minAge);
}

function employeeByName(employeeName) {
  if (employeeName) {
    return employees
      .find(({ firstName, lastName }) => employeeName === firstName || employeeName === lastName);
  }
  return {};
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some(({ managers }) => managers.some(managerId => managerId === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const createANewEmploye = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  employees.push(createANewEmploye);
}

function animalCount(species) {
  const allAnimals = animals.reduce((previousAnimalObject, currentAnimals) => {
    previousAnimalObject[currentAnimals.name] = currentAnimals.residents.length;
    return previousAnimalObject;
  }, {});
  if (species) {
    return allAnimals[species];
  }
  return allAnimals;
}

function entryCalculator(entrants) {
  if (entrants) {
    return Object.keys(entrants).reduce((soma, key) => (soma += prices[key] * entrants[key]), 0);
  }
  return 0;
}

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  const allDays = Object.keys(hours);
  const schedules = { };

  allDays.forEach((day) => {
    const { open, close } = hours[day];

    if (day === 'Monday') {
      schedules[day] = 'CLOSED';
    } else {
      schedules[day] = `Open from ${open}am until ${close - 12}pm`;
    }
  });

  if (dayName === undefined) {
    return schedules;
  }
  return {[dayName] : schedules[dayName]};
}


function oldestFromFirstSpecies(id) {
  const firstAnimal = employees.find(elemento => elemento.id === id).responsibleFor[0];
  const animalsArray = animalsByIds(firstAnimal)[0].residents;
  const pickOlderAnimal = animalsArray.reduce((initialValue, currentValue) => {
    if (initialValue.age < currentValue.age) {
      initialValue = currentValue;
    }
    return initialValue;
  });
  return Object.values(pickOlderAnimal);
}

function increasePrices(percentage) {
  Object.keys(prices)
    .forEach(key => (prices[key] = Math.ceil(prices[key] * (100 + percentage)) / 100));
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
