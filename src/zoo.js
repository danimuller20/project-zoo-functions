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

const { employees } = require('./data');
const data = require('./data');

const { animals } = data;

function animalsByIds(...ids) {
  // seu código aqui
  return animals.filter((animal, index) => animal.id === ids[index]);
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const animalOld = animals.find(animalName => animalName.name === animal);
  const compareResult = animalOld.residents.every(animalGroup => animalGroup.age > age);
  return compareResult;
}

function employeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) return {};
  return employees.find(name =>
    name.firstName === employeeName || name.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  return employees.some(maneger => maneger.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const employeesAdd = { id, firstName, lastName, managers, responsibleFor };
  data.employees.push(employeesAdd);
}

function animalCount(species) {
  // seu código aqui
  if (!species) {
    return animals.reduce((value, curr) => {
      value[curr.name] = curr.residents.length;
      return value;
    }, {});
  }
  return animals.find(animal => animal.name === species).residents.length;
}

function entryCalculator(entrants) {
  // seu código aqui
  if (!entrants || Object.values(entrants).length === 0) {
    return 0;
  }
  return Object.keys(entrants)
    .reduce((value, curr) => value + (entrants[curr] * data.prices[curr]), 0);
}

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  // seu código aqui
  const days = Object.keys(data.hours);
  const workDay = {};

  days.forEach((day) => {
    if (day === 'Monday') {
      workDay[day] = 'CLOSED';
    } else {
      const openHours = data.hours[day].open;
      const closeHours = data.hours[day].close - 12;
      workDay[day] = `Open from ${openHours}am until ${closeHours}pm`;
    }
  });
  if (dayName === undefined) return workDay;
  return { [dayName]: workDay[dayName] };
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
  const employee = data.employees.find(function (person) {
    return person.id === id;
  });
  const idTreatedAnimal = employee.responsibleFor[0];
  const treatedAnimal = data.animals.find(function (it) {
    return it.id === idTreatedAnimal;
  });
  const residentsTreated =
  treatedAnimal.residents.sort(function (itA, itB) {
    return itA.age - itB.age;
  });
  const olderAnimal = residentsTreated[residentsTreated.length - 1];
  const olderInformation = [olderAnimal.name, olderAnimal.sex, olderAnimal.age];
  return olderInformation;
}

function increasePrices(percentage) {
  // seu código aqui
  const percent = number => Math.round((number + (number * percentage * 0.01)) * 100) / 100;
  Object.keys(data.prices).forEach((element) => {
    data.prices[element] = percent(data.prices[element]);
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
