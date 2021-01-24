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

const { prices, hours } = require('./data');
const data = require('./data');

const { animals } = data;
const { employees } = data;

function animalsByIds(...ids) {
  if (ids.length === 0) return [];
  return animals.filter(({ id }, index) => id === ids[index]);
}

function animalsOlderThan(animal, age) {
  const animalsFiltred = animals.find(({ name }) => name === animal);
  return animalsFiltred.residents.every(resident => resident.age >= age);
}

function employeeByName(employeeName) {
  if (!employeeName) return {};
  return employees.find(
    ({ firstName, lastName }) =>
      firstName === employeeName || lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return Object.assign(personalInfo, associatedWith);
}

function isManager(idEmployee) {
  return employees.some(
    ({ managers }, index) => managers[index] === idEmployee);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  if (!species) {
    return animals.reduce((acc, current) => {
      acc[current.name] = current.residents.length;
      return acc;
    }, { });
  }
  return animals.find(({ name }) => name === species).residents.length;
}

function entryCalculator(entrants) {
  if (!entrants) return 0;
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  return (Adult * prices.Adult) + (Child * prices.Child) + (Senior * prices.Senior);
}

// auxiliary function of animalMap()
const getNamesAnimalsForLocation = (accumulator, currentValue) => {
  accumulator[currentValue.location] = animals
    .filter(({ location }) => location === currentValue.location)
    .map(animal => animal.name);
  return accumulator;
};

// auxiliary function of animalMap()
const sortedNames = arrayOfNames => arrayOfNames.sort();

// auxiliary function of animalMap()
const getAnimalForSex = (currentAnimal, sex, sorted) => {
  const animalForSex = currentAnimal.residents
    .filter(resident => resident.sex === sex)
    .map(resident => resident.name);
  if (!sorted) {
    return animalForSex;
  }
  return sortedNames(animalForSex);
};

// auxiliary function of animalMap()
const sortedNamesOrGetForSex = (accAnimal, currentAnimal, sex, sorted) => {
  const objAnimal = {};
  const namesOfResidents = currentAnimal.residents.map(resident => resident.name);
  if (sex !== '') {
    objAnimal[currentAnimal.name] = getAnimalForSex(currentAnimal, sex, sorted);
  } else if (sorted) {
    objAnimal[currentAnimal.name] = sortedNames(namesOfResidents);
  } else {
    objAnimal[currentAnimal.name] = namesOfResidents;
  }
  accAnimal.push(objAnimal);
  return accAnimal;
};

function animalMap(options) {
  if (!options) {
    return animals.reduce(getNamesAnimalsForLocation, {});
  }
  const { includeNames = false, sorted = false, sex = '' } = options;
  if (includeNames) {
    return animals.reduce((acc, current) => {
      acc[current.location] = animals
        .filter(({ location }) => location === current.location)
        .reduce(
          (accAnimal, currentAnimal) =>
            sortedNamesOrGetForSex(accAnimal, currentAnimal, sex, sorted),
          []);
      return acc;
    }, {});
  }
  return animals.reduce(getNamesAnimalsForLocation, {});
}

// auxiliary function of schedule()
const convertHoursFormatForPm = (hour) => {
  if (hour - 12 === 0) {
    return hour;
  }
  return hour - 12;
};

// auxiliary function of schedule()
const engineScheduleOfHuman = (accumulator, currentValue) => {
  if (hours[currentValue].open === 0 && hours[currentValue].close === 0) {
    accumulator[currentValue] = 'CLOSED';
  } else {
    accumulator[currentValue] = `Open from ${
      hours[currentValue].open
    }am until ${convertHoursFormatForPm(hours[currentValue].close)}pm`;
  }
  return accumulator;
};

function schedule(dayName) {
  const newScheduleHuman = Object.keys(hours);
  const scheduleOfDay = {};
  if (!dayName) {
    return newScheduleHuman.reduce(engineScheduleOfHuman, {});
  }
  return engineScheduleOfHuman(scheduleOfDay, dayName);
}

function oldestFromFirstSpecies(idEmployee) {
  const idAnimalResponsable = employees.find(({ id }) => id === idEmployee).responsibleFor[0];
  const specie = animals.find(({ id }) => id === idAnimalResponsable);
  const agesOfResidentsOfSpecieFind = specie.residents
    .map(animal => animal.age)
    .sort((a, b) => a - b);
  const animalOldFind = specie.residents.find(
    ({ age }) => age ===
      agesOfResidentsOfSpecieFind[agesOfResidentsOfSpecieFind.length - 1]);
  return Object.values(animalOldFind);
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
