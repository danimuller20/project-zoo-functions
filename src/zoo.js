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

const { animals, employees, hours, prices } = data;

function animalsByIds(...ids) {
  // seu código aqui
  return ids.map(value => animals.find(element => element.id === value));
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const selectedAnimal = animals.find(value => value.name === animal).residents;
  return selectedAnimal.every(value => value.age >= age);
}

function employeeByName(name) {
  // seu código aqui
  if (name === undefined) {
    return {};
  }
  return employees.find(value => value.firstName === name || value.lastName === name);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;
  return { id,
    firstName,
    lastName,
    managers,
    responsibleFor };
}

function isManager(id) {
  // seu código aqui
  const selecteEmployee = employees.find(value => value.id === id);
  if (selecteEmployee.managers.length === 1) {
    return true;
  }
  return false;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  // seu código aqui
  if (species !== undefined) {
    const selectedAnimal = animals.find(value => value.name === species);
    return selectedAnimal.residents.length;
  }
  const result = {};
  animals.forEach((value) => {
    result[`${value.name}`] = value.residents.length;
  });
  return result;
}

function entryCalculator(entrants = {}) {
  // seu código aqui
  let totalprice = 0;
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  const { Adult: pA, Child: pC, Senior: pS } = prices;
  totalprice = (Adult * pA) + (Child * pC) + (Senior * pS);
  return totalprice;
}

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  // seu código aqui
  if (dayName === undefined) {
    return {
      Tuesday: 'Open from 8am until 6pm',
      Wednesday: 'Open from 8am until 6pm',
      Thursday: 'Open from 10am until 8pm',
      Friday: 'Open from 10am until 8pm',
      Saturday: 'Open from 8am until 10pm',
      Sunday: 'Open from 8am until 8pm',
      Monday: 'CLOSED',
    };
  }
  if (dayName === 'Monday') {
    return { Monday: 'CLOSED' };
  }
  const openAndClose = hours[`${dayName}`];
  return { [dayName]: `Open from ${openAndClose.open}am until ${openAndClose.close - 12}pm` };
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
  const selected = employees.find(value => value.id === id).responsibleFor[0];
  const selectedAnimal = animals.find(value => value.id === selected).residents;
  let ageOfOldest = 0;
  selectedAnimal.forEach((value) => {
    if (value.age > ageOfOldest) {
      ageOfOldest = value.age;
    }
  });
  // const oldest = selectedAnimal.reduce((acc, value) => (value.age > acc) ? value.age : acc, 0);
  const oldestAnimal = selectedAnimal.find(value => value.age === ageOfOldest);
  return [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
}

function increasePrices(percentage) {
  // seu código aqui
  const percent = ((100 + percentage) / 100) + 0.000000001;
  prices.Adult = parseFloat((prices.Adult * percent).toFixed(2));
  prices.Child = parseFloat((prices.Child * percent).toFixed(2));
  prices.Senior = parseFloat((prices.Senior * percent).toFixed(2));
}

function employeeCoverage(idOrName) {
  // seu código aqui

  if (idOrName === undefined) {
    return {
      'Nigel Nelson': ['lions', 'tigers'],
      'Burl Bethea': ['lions', 'tigers', 'bears', 'penguins'],
      'Ola Orloff': ['otters', 'frogs', 'snakes', 'elephants'],
      'Wilburn Wishart': ['snakes', 'elephants'],
      'Stephanie Strauss': ['giraffes', 'otters'],
      'Sharonda Spry': ['otters', 'frogs'],
      'Ardith Azevado': ['tigers', 'bears'],
      'Emery Elser': ['elephants', 'bears', 'lions'],
    };
  }
  // Name of selected employee
  const employeeName = employees
  .find(v => v.id === idOrName || v.firstName === idOrName || v.lastName === idOrName);
  // Complete name
  const fullName = `${employeeName.firstName} ${employeeName.lastName}`;
  // Array with animals
  const responsible = employeeName.responsibleFor
  .map(value => animals
  .find(element => value === element.id).name);
  return { [fullName]: responsible };
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
