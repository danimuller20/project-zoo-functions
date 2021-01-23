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

// Utilizando Object destructuring para mexer no data. Lembrar que é tudo array.
const { animals, employees, hours, prices } = data;

function animalsByIds(...ids) {
  const animalList = [];

  ids.forEach((item) => {
    const mySpecies = animals
      .find(species => species.id === item);
    animalList.push(mySpecies);
  });

  return animalList;
}

function animalsOlderThan(animal, age) {
  return animals
    .find(species => species.name === animal).residents
    .every(individual => individual.age >= age);
}

function employeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  return employees
    .find(employee => employee.firstName === employeeName
      || employee.lastName === employeeName
      || employee.id === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees
    .some(employee => employee.managers
    .includes(id));
}

function addEmployee(id = '', firstName = '', lastName = '', managers = [], responsibleFor = []) {
  employees.push({
    id, firstName, lastName, managers, responsibleFor,
  });
}

function animalCount(species) {
  if (species) {
    return animals.find(mySpecies => mySpecies.name === species).residents.length;
  }
  const answer = {};
  animals.forEach(animal => (answer[animal.name] = animal
    .residents
    .length));
  return answer;
}

function entryCalculator(...entrants) {
  if (entrants.length === 0) {
    return 0;
  }
  let income = 0;
  const myKeys = Object.keys(entrants[0]);
  const myValues = Object.values(entrants[0]);
  myKeys.forEach((key, index) => {
    income += prices[key] * myValues[index];
  });


  return income;
}

function animalMap(options) {
  // seu código aqui
}

const weeklySchedule = {
  Tuesday: 'Open from 8am until 6pm',
  Wednesday: 'Open from 8am until 6pm',
  Thursday: 'Open from 10am until 8pm',
  Friday: 'Open from 10am until 8pm',
  Saturday: 'Open from 8am until 10pm',
  Sunday: 'Open from 8am until 8pm',
  Monday: 'CLOSED',
};
function schedule(dayName) {
  if (!dayName) {
    return weeklySchedule;
  } else if (dayName === 'Monday') {
    return { [dayName]: 'CLOSED' };
  }
  return {
    [dayName]: `Open from ${hours[dayName].open}am until ${hours[dayName].close - 12}pm`,
  };
}

function oldestFromFirstSpecies(id) {
  const myAnimals = animals
  .find(animal => animal.id === employees
    .find(employee => employee.id === id).responsibleFor[0]).residents
    .sort((a, b) => b.age - a.age);

  const oldest = Object.values(myAnimals[0]);
  return oldest;
}

function increasePrices(percentage) {
// seu código aqui
}

function employeeCoverage(idOrName) {
  if (!idOrName) {
    return {};
  }

  const myEmployee = employeeByName(idOrName);

  return myEmployee;
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
