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

const { animals, employees, hours, prices } = require('./data');
const data = require('./data');

function animalsByIds(...ids) {
  // seu código aqui
  if (!ids) { return []; }
  const animalSpecies = [];
  (ids.forEach(value => animalSpecies.push(animals
    .find(element => element.id === value))));
  return animalSpecies;
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const result = (animals.find(element => element.name === animal)
  .residents.every(value => value.age >= age));
  return result;
}

function employeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) { return {}; }
  return (employees.find(element => element
    .firstName === employeeName || element.lastName === employeeName));
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  const result = (employees.some(element => element
    .managers.some(value => value === id)));
  return result;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function animalCount(species) {
  // seu código aqui
  if (!species) {
    return animals.reduce(function (newObject, element) {
      newObject[element.name] = element.residents.length;
      return newObject;
    }, {});
  }
  let amount;
  animals.forEach((element) => {
    if (element.name === species) amount = (element.residents.length);
  });
  return amount;
}

function entryCalculator(entrants) {
  // seu código aqui
  if (!entrants) { return 0; }
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  const result = (Adult * 49.99) + (Child * 20.99) + (Senior * 24.99);
  if (!result) { return 0; }
  return result;
}

// Funções auxiliares: animalMap()
function returnLocations() {
  return ['NE', 'NW', 'SE', 'SW'];
}

function animalsByLocation(locations) {
  const result = {};
  locations.forEach((location) => {
    const animalsSpecies = animals
      .filter(animal => animal.location === location)
      .map(animal => animal.name);
    result[location] = animalsSpecies;
  });
  return result;
}

function animalsName(locations, options) {
  const result = {};
  locations.forEach((location) => {
    const animalValue = data.animals
      .filter(animal => animal.location === location)
      .map((animal) => {
        const animalSpecie = animal.name;
        const animalName = animal.residents
          .map(resident => resident.name);
        const animalFilter = animal.residents
          .filter(valueFilter => valueFilter.sex === options.sex)
          .map(value => value.name);
        if (options.sex && options.sorted) {
          return { [animalSpecie]: animalFilter.sort() };
        } else if (options.sex) {
          return { [animalSpecie]: animalFilter };
        } else if (options.sorted) {
          return { [animalSpecie]: animalName.sort() };
        } return { [animalSpecie]: animalName };
      });
    result[location] = animalValue;
  });
  return result;
}
/* ----------------------------------------------------------------------- */

function animalMap(options) {
  // seu código aqui
  const locations = returnLocations();
  if (!options || !options.includeNames) return animalsByLocation(locations);
  return animalsName(locations, options);
}

function schedule(dayName) {
  // seu código aqui
  const allDays = Object.keys(hours);
  const scheduleValue = {};
  allDays.forEach((day) => {
    const { open, close } = hours[day];
    if (day === 'Monday') {
      scheduleValue[day] = 'CLOSED';
    } else {
      scheduleValue[day] = `Open from ${open}am until ${close % 12}pm`;
    }
  });
  if (!dayName) return scheduleValue;
  return { [dayName]: scheduleValue[dayName] };
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
  const result = Object.values(animals
    .find(animalId => animalId.id === employees
    .find(employeeId => employeeId.id === id).responsibleFor[0]).residents
    .reduce((accAge, currAge) => {
      if (accAge.age < currAge.age) return currAge;
      return accAge;
    }));
  return result;
}

function increasePrices(percentage) {
  // seu código aqui
  const result = {};
  return Object.keys(prices).forEach((key) => {
    const valueKey = prices[key];
    const calc = valueKey + (valueKey * (percentage / 100));
    prices[key] = parseFloat(Math.fround(calc).toFixed(2));
    result[key] = prices[key];
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
