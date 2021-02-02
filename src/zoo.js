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
  return animals.filter(animal => ids.find(returnIds => animal.id === returnIds));
}

function animalsOlderThan(animal, age) {
  const specimen = animals.find(queryResult => queryResult.name === animal);
  return specimen.residents.every(result => result.age >= age);
}

function employeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return employees
  .find(({ firstName, lastName }) => firstName === employeeName || lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  const newEmployee = ({ ...personalInfo, ...associatedWith });
  return newEmployee;
}


function isManager(id) {
  return employees.some(({ managers }) => managers.find(manager => (manager === id)));
}

function addEmployee(id = [], firstName = [], lastName = [], managers = [], responsibleFor = []) {
  const addEmployees = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return employees.push(addEmployees);
}

function animalCount(species) {
  if (!species) {
    return animals.reduce(function (accumulator, currentValue) {
      accumulator[currentValue.name] = currentValue.residents.length;
      return accumulator;
    }, {});
  }
  let amount;
  data.animals.forEach((element) => {
    if (element.name === species) amount = (element.residents.length);
  });
  return amount;
}

function entryCalculator(entrants) {
  if (!entrants || Object.entries(entrants).length === 0) {
    return 0;
  }
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  return (Adult * prices.Adult) + (Child * prices.Child) + (Senior * prices.Senior);
}

function animalMap(options) {
}

function schedule(dayName) {
  const hours = data.hours;
  const allDays = Object.keys(hours);
  const schedule1 = {};
  function changeHour(hour) {
    const formattedHour = hour - 12;
    return formattedHour < 0 ? hour : formattedHour;
  }
  allDays.forEach((day) => {
    const { open, close } = hours[day];
    if (day === 'Monday') {
      schedule1[day] = 'CLOSED';
    } else {
      schedule1[day] = `Open from ${open}am until ${changeHour(close)}pm`;
    }
  });
  if (dayName === undefined) {
    return schedule1;
  }
  return { [dayName]: schedule1[dayName] };
}

function oldestFromFirstSpecies(id) {
  const animal = employees
  .find(ids => ids.id === id).responsibleFor[0];
  const residents = animals
  .find(value => value.id === animal).residents;
  return Object.values(residents.reduce((accumulator, currentValue) => {
    if (currentValue.age > accumulator.age) {
      accumulator = currentValue;
    }
    return accumulator;
  }));
}

function increasePrices(percentage) {
  return Object.keys(prices).forEach((value) => {
    prices[value] = Math.round((prices[value] * percentage) + (prices[value] * 100)) / 100;
  });
}

function employeeCoverage(idOrName) {

}
// source reduce https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
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
