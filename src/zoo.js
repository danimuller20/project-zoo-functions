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

function animalsByIds(id, ...rest) {
  const ids = [];
  if (id === undefined || id.length <= 0) {
    return ids;
  }
  ids.push(id, ...rest);
  const animalsList = [];
  ids.forEach((elementId) => {
    const animal = animals.find(element => element.id === elementId);
    if (animal !== undefined) {
      animalsList.push(animal);
    }
  });
  return animalsList;
}

function animalsOlderThan(animalSpecies, age) {
  const animalFound = animals.find(animal => animal.name === animalSpecies);
  const everyoneIsOfMinimumAge = animalFound.residents.every(resident => resident.age >= age);
  return everyoneIsOfMinimumAge;
}

function employeeByName(name) {
  if (name === undefined) {
    return {};
  }
  const isEmployee = employee => employee.firstName === name || employee.lastName === name;
  const employeeFound = employees.find(isEmployee);
  return employeeFound;
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some(employee => employee.managers.some(manager => manager === id));
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  const employee = {
    id,
    firstName,
    lastName,
    managers: managers || [],
    responsibleFor: responsibleFor || [],
  };
  employees.push(employee);
}

function animalCount(species) {
  if (species) {
    const animalFound = animals.find(animalElement => animalElement.name === species);
    return animalFound.residents.length;
  }
  const amountOfAnimals = {};
  animals.forEach((animal) => { amountOfAnimals[animal.name] = animal.residents.length; });
  return amountOfAnimals;
}

function entryCalculator(entrants) {
  let amount = 0;
  if (entrants) {
    Object.keys(entrants).forEach((key) => {
      amount += entrants[key] * prices[key];
    });
    return amount;
  }
  return amount;
}

function filterAnimalsByName(animalsByName, sort = false) {
  const filteredAnimals = animalsByName.map((animal) => {
    const animalWithName = {};
    animalWithName[animal.name] = animal.residents.map(resident => resident.name);
    if (sort) animalWithName[animal.name].sort();
    return animalWithName;
  });
  return filteredAnimals;
}

function filterAnimalsByNameAndSex(animalsByNameAndSex, sex, sort = false) {
  const filteredAnimals = animalsByNameAndSex.map((animal) => {
    const animalWithName = {};
    const residentsBySex = animal.residents.filter(item => item.sex === sex);
    animalWithName[animal.name] = residentsBySex.map(resident => resident.name);
    if (sort) animalWithName[animal.name].sort();
    return animalWithName;
  });
  return filteredAnimals;
}

function filterAnimalsLocation(initials) {
  return animals.filter(animal => animal.location === initials);
}

function animalsByLocation() {
  const northEastAnimals = filterAnimalsLocation('NE');
  const northWestAnimals = filterAnimalsLocation('NW');
  const southEastAnimals = filterAnimalsLocation('SE');
  const southWestAnimals = filterAnimalsLocation('SW');
  const animalLocation = { NE: [], NW: [], SE: [], SW: [] };
  northEastAnimals.forEach(northEastAnimal => animalLocation.NE.push(northEastAnimal.name));
  northWestAnimals.forEach(northWesttAnimal => animalLocation.NW.push(northWesttAnimal.name));
  southEastAnimals.forEach(southEasttAnimal => animalLocation.SE.push(southEasttAnimal.name));
  southWestAnimals.forEach(southWestAnimal => animalLocation.SW.push(southWestAnimal.name));
  return animalLocation;
}

function animalsByLocationWithNames() {
  const northEastAnimals = filterAnimalsLocation('NE');
  const northWestAnimals = filterAnimalsLocation('NW');
  const southEastAnimals = filterAnimalsLocation('SE');
  const southWestAnimals = filterAnimalsLocation('SW');
  const animalLocation = {};
  animalLocation.NE = filterAnimalsByName(northEastAnimals);
  animalLocation.NW = filterAnimalsByName(northWestAnimals);
  animalLocation.SE = filterAnimalsByName(southEastAnimals);
  animalLocation.SW = filterAnimalsByName(southWestAnimals);
  return animalLocation;
}

function animalsByLocationWithNamesSorted() {
  const northEastAnimals = filterAnimalsLocation('NE');
  const northWestAnimals = filterAnimalsLocation('NW');
  const southEastAnimals = filterAnimalsLocation('SE');
  const southWestAnimals = filterAnimalsLocation('SW');
  const animalLocation = {};
  animalLocation.NE = filterAnimalsByName(northEastAnimals, true);
  animalLocation.NW = filterAnimalsByName(northWestAnimals, true);
  animalLocation.SE = filterAnimalsByName(southEastAnimals, true);
  animalLocation.SW = filterAnimalsByName(southWestAnimals, true);
  return animalLocation;
}

function animalsByLocationWithNamesBySex(sex) {
  const northEastAnimals = filterAnimalsLocation('NE');
  const northWestAnimals = filterAnimalsLocation('NW');
  const southEastAnimals = filterAnimalsLocation('SE');
  const southWestAnimals = filterAnimalsLocation('SW');
  const animalLocation = {};
  animalLocation.NE = filterAnimalsByNameAndSex(northEastAnimals, sex);
  animalLocation.NW = filterAnimalsByNameAndSex(northWestAnimals, sex);
  animalLocation.SE = filterAnimalsByNameAndSex(southEastAnimals, sex);
  animalLocation.SW = filterAnimalsByNameAndSex(southWestAnimals, sex);
  return animalLocation;
}

function animalsByLocationWithNamesBySexSorted(sex) {
  const northEastAnimals = filterAnimalsLocation('NE');
  const northWestAnimals = filterAnimalsLocation('NW');
  const southEastAnimals = filterAnimalsLocation('SE');
  const southWestAnimals = filterAnimalsLocation('SW');
  const animalLocation = {};
  animalLocation.NE = filterAnimalsByNameAndSex(northEastAnimals, sex, true);
  animalLocation.NW = filterAnimalsByNameAndSex(northWestAnimals, sex, true);
  animalLocation.SE = filterAnimalsByNameAndSex(southEastAnimals, sex, true);
  animalLocation.SW = filterAnimalsByNameAndSex(southWestAnimals, sex, true);
  return animalLocation;
}

function animalMap(options) {
  let objeto = animalsByLocation();
  if (options && options.includeNames) {
    objeto = animalsByLocationWithNames();
  }
  if (options && options.includeNames && options.sorted) {
    objeto = animalsByLocationWithNamesSorted();
  }
  if (options && options.includeNames && options.sex) {
    objeto = animalsByLocationWithNamesBySex(options.sex);
  }
  if (options && options.includeNames && options.sex && options.sorted) {
    objeto = animalsByLocationWithNamesBySexSorted(options.sex);
  }
  return objeto;
}

function convertFormatHours(hourFormat) {
  let convertedSchedule = 0;
  if (hourFormat > 12) convertedSchedule = (hourFormat - 12);
  else if (hourFormat === 12) convertedSchedule = 12;
  else convertedSchedule = hourFormat;
  return convertedSchedule;
}

function convertHours(open, close) {
  const convertedHours = [];
  convertedHours.push(convertFormatHours(open));
  convertedHours.push(convertFormatHours(close));
  console.log(convertedHours);
  return convertedHours;
}

function schedule(dayName) {
  const day = {};
  if (!dayName) {
    Object.keys(hours).forEach((key) => {
      const convertedHours = convertHours(hours[key].open, hours[key].close);
      if (key !== 'Monday') {
        day[key] = `Open from ${convertedHours[0]}am until ${convertedHours[1]}pm`;
      } else {
        day[key] = 'CLOSED';
      }
    });
  }
  if (dayName && dayName !== 'Monday') {
    const convertedHours = convertHours(hours[dayName].open, hours[dayName].close);
    day[dayName] = `Open from ${convertedHours[0]}am until ${convertedHours[1]}pm`;
  }
  if (dayName && dayName === 'Monday') {
    day[dayName] = 'CLOSED';
  }
  return day;
}

function oldestFromFirstSpecies(id) {
  const employeeFound = employees.find(employee => employee.id === id);
  const firstAnimalId = employeeFound.responsibleFor[0];
  const animalFound = animals.find(animal => animal.id === firstAnimalId);
  let olderAge = 0;
  let currentIndex = 0;
  animalFound.residents.forEach((resident, index) => {
    if (resident.age >= olderAge) {
      olderAge = resident.age;
      currentIndex = index;
    }
  });
  const { name, sex, age } = animalFound.residents[currentIndex];
  const olderAnimal = [name, sex, age];
  return olderAnimal;
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
