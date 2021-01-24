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
  // seu código aqui
  if (!ids) {
    return [];
  }
  const requestedAnimals = [];
  ids.forEach(id => requestedAnimals.push(animals.find(animal => animal.id === id)));
  return requestedAnimals;
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  return animals.find(specie => specie.name === animal)
  .residents.every(resident => resident.age >= age);
}

function employeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) {
    return {};
  }
  return employees.find(
    employee => employee.firstName === employeeName || employee.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const { managers, responsibleFor } = associatedWith;
  const newEmployee = personalInfo;
  newEmployee.managers = managers;
  newEmployee.responsibleFor = responsibleFor;
  return newEmployee;
}

function isManager(id) {
  // seu código aqui
  return employees.some(employee => employee.managers.find(manager => manager === id));
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
  const personalInfo = { id, firstName, lastName };
  const associatedWith = { managers, responsibleFor };
  if (!managers) {
    associatedWith.managers = [];
  }
  if (!responsibleFor) {
    associatedWith.responsibleFor = [];
  }
  const newEmployee = createEmployee(personalInfo, associatedWith);
  employees.push(newEmployee);
}

function animalCount(specie) {
  // seu código aqui
  const animalMob = {};
  if (!specie) {
    animals.forEach((animal) => {
      animalMob[animal.name] = animal.residents.length;
    });
    return animalMob;
  }
  return animals.find(animal => animal.name === specie).residents.length;
}

function entryCalculator(entrants) {
  // seu código aqui
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  if (entrants.Child === undefined) {
    entrants.Child = 0;
  }
  if (entrants.Adult === undefined) {
    entrants.Adult = 0;
  }
  if (entrants.Senior === undefined) {
    entrants.Senior = 0;
  }
  const childEntryPrice = entrants.Child * prices.Child;
  const adultEntryPrice = entrants.Adult * prices.Adult;
  const seniorEntryPrice = entrants.Senior * prices.Senior;
  const totalEntryPrice = childEntryPrice + adultEntryPrice + seniorEntryPrice;
  return totalEntryPrice;
}

function getLocations() {
  const locations = [];
  animals.forEach((animal) => {
    if (!locations || !locations.some(location => location === animal.location)) {
      locations.push(animal.location);
    }
  });
  return locations;
}

function getAnimalsByLocation(locations) {
  const animalsLocation = {};
  locations.forEach((location) => {
    const names = [];
    animals.forEach((animal) => {
      if (animal.location === location) {
        names.push(animal.name);
      }
    });
    animalsLocation[location] = names;
  });
  return animalsLocation;
}

function getAnimalsLocationPlusResidentsNames(animalsLocations) {
  const objectKeys = Object.keys(animalsLocations);
  const animalsLocationsWithResidents = {};
  objectKeys.forEach((key) => {
    animalsLocationsWithResidents[key] = [];
    const animalsLocated = animals.filter(animal => animal.location === key);
    animalsLocated.forEach((animalLocated) => {
      const animal = {};
      const animalResidentsNames = [];
      animalLocated.residents.forEach(resident => animalResidentsNames.push(resident.name));
      animal[animalLocated.name] = animalResidentsNames;
      animalsLocationsWithResidents[key].push(animal);
    });
  });
  return animalsLocationsWithResidents;
}

function sortResidentNames(animalsList) {
  Object.values(animalsList)
  .forEach(species => species.forEach(specie => Object.values(specie)
  .forEach(residents => residents.sort())));
}

function getAnimalsLocationBySex(sex, locations) {
  const animalsResidentsBySex = {};
  locations.forEach((location) => {
    animalsResidentsBySex[location] = [];
    const animalsAtThisLocation = animals.filter(animal => animal.location === location);
    animalsAtThisLocation.forEach((animal) => {
      const newAnimal = {};
      const residentsBySex = [];
      animal.residents.filter(resident => resident.sex === sex)
      .forEach(residnt => residentsBySex.push(residnt.name));
      newAnimal[animal.name] = residentsBySex;
      animalsResidentsBySex[location].push(newAnimal);
    });
  });
  return animalsResidentsBySex;
}

function animalMap(options) {
  // seu código
  const locations = getLocations();
  const animalsAtEachLocation = getAnimalsByLocation(locations);
  let animalsWithResidentNames = getAnimalsLocationPlusResidentsNames(animalsAtEachLocation);

  switch (true) {
    case (!options || !options.includeNames):
      return animalsAtEachLocation;
    case (options.includeNames && Object.keys(options).length === 1):
      return animalsWithResidentNames;
    case (options.sex === 'female' || options.sex === 'male'):
      animalsWithResidentNames = getAnimalsLocationBySex(options.sex, locations);
      break;
    default:
      break;
  }
  if (options.sorted === true) {
    sortResidentNames(animalsWithResidentNames);
  }
  return animalsWithResidentNames;
}

function schedule(dayName) {
  // seu código aqui
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
  const specieId = employees.find(employee => employee.id === id).responsibleFor[0];
  const specie = animals.find(animal => animal.id === specieId);
  let oldestAge = 0;
  let oldestResident = [];
  specie.residents.forEach((resident) => {
    if (resident.age > oldestAge) {
      oldestAge = resident.age;
      oldestResident = [resident.name, resident.sex, resident.age];
    }
  })
  return oldestResident;
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
