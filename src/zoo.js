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

function animalsByLocation(animalLocation) {
  const northEastAnimals = animals.filter(animal => animal.location === 'NE');
  const northWesttAnimals = animals.filter(animal => animal.location === 'NW');
  const southEasttAnimals = animals.filter(animal => animal.location === 'SE');
  const southWestAnimals = animals.filter(animal => animal.location === 'SW');
  northEastAnimals.forEach(northEastAnimal => animalLocation.NE.push(northEastAnimal.name));
  northWesttAnimals.forEach(northWesttAnimal => animalLocation.NW.push(northWesttAnimal.name));
  southEasttAnimals.forEach(southEasttAnimal => animalLocation.SE.push(southEasttAnimal.name));
  southWestAnimals.forEach(southWestAnimal => animalLocation.SW.push(southWestAnimal.name));
  return animalLocation;
}

function animalsByLocationWithNames(animalLocation) {
  const northEastAnimals = animals.filter(animal => animal.location === 'NE');
  const northWestAnimals = animals.filter(animal => animal.location === 'NW');
  const southEastAnimals = animals.filter(animal => animal.location === 'SE');
  const southWestAnimals = animals.filter(animal => animal.location === 'SW');
  northEastAnimals.forEach((northEastAnimal) => {
    const animalWithName = {};
    animalWithName[northEastAnimal.name] = northEastAnimal.residents.map(resident => resident.name);
    animalLocation.NE.push(animalWithName);
  });
  northWestAnimals.forEach((northWestAnimal) => {
    const animalWithName = {};
    animalWithName[northWestAnimal.name] = northWestAnimal.residents.map(resident => resident.name);
    animalLocation.NW.push(animalWithName);
  });
  southEastAnimals.forEach((southEastAnimal) => {
    const animalWithName = {};
    animalWithName[southEastAnimal.name] = southEastAnimal.residents.map(resident => resident.name);
    animalLocation.SE.push(animalWithName);
  });
  southWestAnimals.forEach((southWestAnimal) => {
    const animalWithName = {};
    animalWithName[southWestAnimal.name] = southWestAnimal.residents.map(resident => resident.name);
    animalLocation.SW.push(animalWithName);
  });
  return animalLocation;
}

function animalsByLocationWithNamesSorted(animalLocation) {
  const northEastAnimals = animals.filter(animal => animal.location === 'NE');
  const northWestAnimals = animals.filter(animal => animal.location === 'NW');
  const southEastAnimals = animals.filter(animal => animal.location === 'SE');
  const southWestAnimals = animals.filter(animal => animal.location === 'SW');
  northEastAnimals.forEach((northEastAnimal) => {
    const animalWithName = {};
    animalWithName[northEastAnimal.name] = northEastAnimal.residents.map(resident => resident.name).sort();
    animalLocation.NE.push(animalWithName);
  });
  northWestAnimals.forEach((northWestAnimal) => {
    const animalWithName = {};
    animalWithName[northWestAnimal.name] = northWestAnimal.residents.map(resident => resident.name).sort();
    animalLocation.NW.push(animalWithName);
  });
  southEastAnimals.forEach((southEastAnimal) => {
    const animalWithName = {};
    animalWithName[southEastAnimal.name] = southEastAnimal.residents.map(resident => resident.name).sort();
    animalLocation.SE.push(animalWithName);
  });
  southWestAnimals.forEach((southWestAnimal) => {
    const animalWithName = {};
    animalWithName[southWestAnimal.name] = southWestAnimal.residents.map(resident => resident.name).sort();
    animalLocation.SW.push(animalWithName);
  });
  return animalLocation;
}

function animalsByLocationWithNamesBySex(animalLocation, sex) {
  const northEastAnimals = animals.filter(animal => animal.location === 'NE');
  const northWestAnimals = animals.filter(animal => animal.location === 'NW');
  const southEastAnimals = animals.filter(animal => animal.location === 'SE');
  const southWestAnimals = animals.filter(animal => animal.location === 'SW');
  northEastAnimals.forEach((northEastAnimal) => {
    const animalWithName = {};
    const residentsBySex = northEastAnimal.residents.filter(item => item.sex === sex)
    animalWithName[northEastAnimal.name] = residentsBySex.map(resident => resident.name);
    animalLocation.NE.push(animalWithName);
    console.log(animalLocation.NE);
  });
  northWestAnimals.forEach((northWestAnimal) => {
    const animalWithName = {};
    const animalBySex = northWestAnimal.residents.filter(item => item.sex === sex)
    animalWithName[northWestAnimal.name] = animalBySex.map(resident => resident.name);
    animalLocation.NW.push(animalWithName);
  });
  southEastAnimals.forEach((southEastAnimal) => {
    const animalWithName = {};
    const animalBySex = southEastAnimal.residents.filter(item => item.sex === sex)
    animalWithName[southEastAnimal.name] = animalBySex.map(resident => resident.name);
    animalLocation.SE.push(animalWithName);
  });
  southWestAnimals.forEach((southWestAnimal) => {
    const animalWithName = {};
    const animalBySex = southWestAnimal.residents.filter(item => item.sex === sex)
    animalWithName[southWestAnimal.name] = animalBySex.map(resident => resident.name);
    animalLocation.SW.push(animalWithName);
  });
  return animalLocation;
}

function animalsByLocationWithNamesBySexSorted(animalLocation, sex) {
  const northEastAnimals = animals.filter(animal => animal.location === 'NE');
  const northWestAnimals = animals.filter(animal => animal.location === 'NW');
  const southEastAnimals = animals.filter(animal => animal.location === 'SE');
  const southWestAnimals = animals.filter(animal => animal.location === 'SW');
  northEastAnimals.forEach((northEastAnimal) => {
    const animalWithName = {};
    const residentsBySex = northEastAnimal.residents.filter(item => item.sex === sex)
    animalWithName[northEastAnimal.name] = residentsBySex.map(resident => resident.name).sort();
    animalLocation.NE.push(animalWithName);
  });
  northWestAnimals.forEach((northWestAnimal) => {
    const animalWithName = {};
    const animalBySex = northWestAnimal.residents.filter(item => item.sex === sex)
    animalWithName[northWestAnimal.name] = animalBySex.map(resident => resident.name).sort();
    animalLocation.NW.push(animalWithName);
  });
  southEastAnimals.forEach((southEastAnimal) => {
    const animalWithName = {};
    const animalBySex = southEastAnimal.residents.filter(item => item.sex === sex)
    animalWithName[southEastAnimal.name] = animalBySex.map(resident => resident.name).sort();
    animalLocation.SE.push(animalWithName);
  });
  southWestAnimals.forEach((southWestAnimal) => {
    const animalWithName = {};
    const animalBySex = southWestAnimal.residents.filter(item => item.sex === sex)
    animalWithName[southWestAnimal.name] = animalBySex.map(resident => resident.name).sort();
    animalLocation.SW.push(animalWithName);
  });
  return animalLocation;
}

function animalMap(options) {
  const animalLocation = { NE: [], NW: [], SE: [], SW: [], };
  if (options && options.includeNames && options.sex && options.sorted) {
    return animalsByLocationWithNamesBySexSorted(animalLocation, options.sex);
  }
  if (options && options.includeNames && options.sex) {
    return animalsByLocationWithNamesBySex(animalLocation, options.sex);
  }
  if (options && options.includeNames && options.sorted) {
    return animalsByLocationWithNamesSorted(animalLocation);
  }
  if (options && options.includeNames) {
    return animalsByLocationWithNames(animalLocation);
  }
  return animalsByLocation(animalLocation);
}
console.log(animalMap({ includeNames: true, sex: 'female', sorted: true }));

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
