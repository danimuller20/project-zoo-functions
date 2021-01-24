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

function schedule(dayName) {
  if (!dayName) {
    // return weeklySchedule;
    const fullSchedule = {};
    Object.keys(hours).forEach((key) => {
      if (key === 'Monday') {
        fullSchedule[key] = 'CLOSED';
      } else {
        fullSchedule[key] = `Open from ${hours[key].open}am until ${hours[key].close - 12}pm`;
      }
    });
    return fullSchedule;
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
  const people = Object.keys(prices);
  const cost = Object.values(prices);

  people.forEach((person, index) => {
    cost[index] = Math.round((cost[index] * (1 + (percentage / 100))) * 100) / 100;
  });

  people.forEach((person, index) => {
    prices[person] = cost[index];
  });

  return prices;
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
