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

const { animals, employees, prices, hours } = data;

function animalsByIds(...ids) {
  const foundAnimals = ids.map((actualId) => {
    const foundAnimal = animals.find(animal => actualId === animal.id);
    return foundAnimal;
  });
  return foundAnimals;
}


function animalsOlderThan(animal, age) {
  return animals.some(objAnimal => objAnimal.residents.every(
    residentAnimal => residentAnimal.age >= age && objAnimal.name === animal,
  ));
}


function employeeByName(employeeName) {
  if (!employeeName) return {};
  return employees.find(
    employee => employee.lastName === employeeName || employee.firstName === employeeName,
  );
}


function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}


function isManager(id) {
  return employees.some(employee => employee.managers.some(manager => manager === id));
}


function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({ id, firstName, lastName, managers, responsibleFor });
}


function animalCount(species) {
  if (!species) {
    return animals.reduce((acumulator, animal) => {
      acumulator[animal.name] = animal.residents.length;
      return acumulator;
    }, {});
  }
  return animals.find(animal => animal.name === species).residents.length;
}


function entryCalculator(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  return (Adult * prices.Adult) + (Child * prices.Child) + (Senior * prices.Senior);
}


function animalMap(options) {
  // const locations = getLocations();
  // if (!options) {return getAnimalByLocation(locations)}
  // const { includeNames = false, sex, sorted = false } = options;
  // if (includeNames) {
  //   return getAnimalsbyLocationWithNames(locations, sorted, sex);
  // }
}

function getAnimalsbyLocationWithNames(locations, sorted, sex) {
  const animalsByLocation = {};
  locations.forEach((location) => {
    const filteredAnimals = animals
      .filter(animal => animal.location === location)
      .map((animal) => {
        const nameKey = animal.name;
        const nameValue = animal.residents
          .filter(resident => resident.sex === sex)
          .map(resident => resident.name);
        if (sorted) nameValue.sort();
        return { [nameKey]: nameValue };
      });
    animalsByLocation[location] = filteredAnimals;
  });
  return animalsByLocation;
}

function getAnimalByLocation(locations) {
  const animalsByLocation = {};
  locations.forEach((location) => {
    const filteredAnimalsObj = animals.filter(animal => animal.location === location);
    const filteredAnimalsString = filteredAnimalsObj.map(animal => animal.name);
    animalsByLocation[location] = filteredAnimalsString;
  });
  return animalsByLocation;
}

function getLocations() {
  return ['NE', 'NW', 'SE', 'SW'];
}

function schedule(dayName) {
  const dayObj = {};
  Object.keys(hours).forEach((day) => {
    if (day !== 'Monday') {
      dayObj[day] = `Open from ${hours[day].open}am until ${(hours[day].close) - 12}pm`;
    } else {
      dayObj[day] = 'CLOSED';
    }
  });
  if (!dayName) {
    return dayObj;
  }
  return { [dayName]: dayObj[dayName] };
}


function oldestFromFirstSpecies(id) {
  const firstAnimalId = employees.find(employee => employee.id === id).responsibleFor[0];
  const residents = animals.find(animal => animal.id === firstAnimalId).residents;
  const oldestAnimal = residents.reduce(
    (older, resident) => (older.age < resident.age ? resident : older));
  return Object.values(oldestAnimal);
}


function increasePrices(percentage) {
  Object.keys(prices).forEach((type) => {
    const newPrice = Math.round(prices[type] * (1 + (percentage / 100)) * 100) / 100;
    prices[type] = newPrice;
  });
}

function whatIf(idOrName, text) {
  const selectedEmployee;
  const condition = employee =>
    employee.id === idOrName ||
    employee.firstName === idOrName ||
    employee.lastName === idOrName;
  selectedEmployee = employees.filter(condition);
  selectedEmployee.forEach((emp1) => {
    const responsible = emp1.responsibleFor.map(
      (id) => animals.find((animal) => animal.id === id).name
    );
    text = { [`${emp1.firstName} ${emp1.lastName}`] : responsible };
  });
  return text;
}

function whatElse(text) {
  employees.forEach((emp2) => {
    const responsible2 = emp2.responsibleFor.map(
      (id) => animals.find((animal) => animal.id === id).name
    );
    text[`${emp2.firstName} ${emp2.lastName}`] = responsible2;
  });
}

function employeeCoverage(idOrName) {
  let text = {};
  if (idOrName) {
    text = whatIf(idOrName, text);
  } else {
    whatElse(text);
  }
  return text;
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
