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

function filterAnimalsByName(animalsByName) {
  const filteredAnimals = animalsByName.map((animal) => {
    const animalWithName = {};
    animalWithName[animal.name] = animal.residents.map(resident => resident.name);
    return animalWithName;
  });
  return filteredAnimals;
}

function filterAnimalsByNamesSorted(animalsByNameSorted) {
  const filteredAnimals = animalsByNameSorted.map((animal) => {
    const animalWithName = {};
    animalWithName[animal.name] = animal.residents.map(resident => resident.name).sort();
    return animalWithName;
  });
  return filteredAnimals;
}

function filterAnimalsByNameAndSex(animalsByNameAndSex, sex) {
  const filteredAnimals = animalsByNameAndSex.map((animal) => {
    const animalWithName = {};
    const residentsBySex = animal.residents.filter(item => item.sex === sex);
    animalWithName[animal.name] = residentsBySex.map(resident => resident.name);
    return animalWithName;
  });
  return filteredAnimals;
}

function filterAnimalsByNameAndSexSorted(animalsByNameAndSexSorted, sex) {
  const filteredAnimals = animalsByNameAndSexSorted.map((animal) => {
    const animalWithName = {};
    const residentsBySex = animal.residents.filter(item => item.sex === sex);
    animalWithName[animal.name] = residentsBySex.map(resident => resident.name).sort();
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
  animalLocation.NE = filterAnimalsByNamesSorted(northEastAnimals);
  animalLocation.NW = filterAnimalsByNamesSorted(northWestAnimals);
  animalLocation.SE = filterAnimalsByNamesSorted(southEastAnimals);
  animalLocation.SW = filterAnimalsByNamesSorted(southWestAnimals);
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
  animalLocation.NE = filterAnimalsByNameAndSexSorted(northEastAnimals, sex);
  animalLocation.NW = filterAnimalsByNameAndSexSorted(northWestAnimals, sex);
  animalLocation.SE = filterAnimalsByNameAndSexSorted(southEastAnimals, sex);
  animalLocation.SW = filterAnimalsByNameAndSexSorted(southWestAnimals, sex);
  return animalLocation;
}

function animalMap(options) {
  if (!options || !options.includeNames) {
    return animalsByLocation();
  }
  if (options && options.includeNames && options.sex && options.sorted) {
    return animalsByLocationWithNamesBySexSorted(options.sex);
  }
  if (options && options.includeNames && options.sex) {
    return animalsByLocationWithNamesBySex(options.sex);
  }
  if (options && options.includeNames && options.sorted) {
    return animalsByLocationWithNamesSorted();
  }
  if (options && options.includeNames) {
    return animalsByLocationWithNames();
  }
}
console.log(animalMap({ includeNames: true }));

function schedule(dayName) {
  // seu código aqui
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
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
