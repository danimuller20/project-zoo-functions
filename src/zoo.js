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

const { prices, employees, animals } = require('./data');
const data = require('./data');

function animalsByIds(...ids) {
  // seu código aqui
  const trackAnimals = ids.map((theId) => {
    const chosenAnimal = data.animals.find(creature => theId === creature.id);
    return chosenAnimal;
  });
  return trackAnimals;
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const listAnimal = data.animals.find(({ name }) => name === animal);
  return listAnimal.residents.every(animalAge => animalAge.age >= age);
}

function employeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) { return {}; }
  let choice = data.employees.find(helper => helper.firstName === employeeName);
  if (choice === undefined) {
    choice = data.employees.find(helper => helper.lastName === employeeName);
  }
  return choice;
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const newEmployee = {};
  Object.assign(newEmployee, personalInfo, associatedWith);
  return newEmployee;
}

function isManager(id) {
  // seu código aqui
  return data.employees.some(employ => employ.managers.some(manager => manager === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  // seu código aqui
  if (!species) {
    return data.animals.reduce(function (count, actualAnimal) {
      count[actualAnimal.name] = actualAnimal.residents.length;
      return count;
    }, {});
  }
  let vol;
  data.animals.forEach((eachAnimal) => {
    if (eachAnimal.name === species) vol = (eachAnimal.residents.length);
  });
  return vol;
}

function entryCalculator(entrants) {
  // seu código aqui
  if (!entrants || Object.entries(entrants).length === 0) {
    return 0;
  }
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  return (Adult * prices.Adult) + (Child * prices.Child) + (Senior * prices.Senior);
}

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  // seu código aqui
  let openDay;
  if (dayName) openDay = { [dayName]: data.hours[dayName] };
  else openDay = data.hours;
  return Object.entries(openDay).reduce((note, day) => Object.assign(note, { [day[0]]:
  (day[1].open !== 0) ?
  `Open from ${day[1].open}am until ${day[1].close - 12}pm` : 'CLOSED' }), {});
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
  const helpGuy = employees.find(ids => ids.id === id).responsibleFor[0];
  const residentsAnimals = animals.find(value => value.id === helpGuy).residents;
  return Object.values(residentsAnimals.reduce((counter, actualCount) => {
    if (actualCount.age > counter.age) {
      counter = actualCount;
    }
    return counter;
  }));
}

function increasePrices(percentage) {
  // seu código aqui
  return Object.keys(prices).forEach((value) => {
    prices[value] = Math.round((prices[value] * percentage) + (prices[value] * 100)) / 100;
  });
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
