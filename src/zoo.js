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
const { animals, employees, prices, hours } = require('./data');


function animalsByIds(...ids) {
  return animals.filter(element => ids.includes(element.id));
}

function animalsOlderThan(animal, age) {
  const filteredAnimals = animals.filter(animalFiltered => animalFiltered.name === animal);
  const [filteredSpecie] = filteredAnimals;
  return filteredSpecie.residents.every(filteredAnimal => filteredAnimal.age >= age);
}

function employeeByName(employeeName) {
  if (!employeeName) return {};
  const filteredEmployee = employees.filter(employee =>
    (employee.firstName === employeeName || employee.lastName === employeeName));
  const [employeeFound] = filteredEmployee;
  return employeeFound;
}

function createEmployee({ id, firstName, lastName }, { managers, responsibleFor }) {
  return { id, firstName, lastName, managers, responsibleFor };
}

function isManager(id) {
  return employees.some(employee => employee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  if (!species) {
    const allSpeciesQuantity = {};
    animals.map(specie => (allSpeciesQuantity[specie.name] = (specie.residents.length)));
    return allSpeciesQuantity;
  }
  const searchedAnimal = animals.filter(specie => specie.name === species);
  return searchedAnimal[0].residents.length;
}

function entryCalculator(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const totalBoxOfficeQuantities = Object.entries(entrants);
  return totalBoxOfficeQuantities.reduce((prev, currentValue) =>
    (prev + (prices[currentValue[0]] * currentValue[1])), 0);
}

function populateAnimalNames(array) {
  animals.forEach(animal =>
    array[animal.location].push(({ [animal.name]:
      animal.residents.map(resident => resident.name) })));
  return array;
}

function populateSortedAnimalNames(array) {
  animals.forEach(animal =>
    array[animal.location].push(({ [animal.name]:
      animal.residents.map(resident => resident.name).sort() })));
  return array;
}

function populateAnimalFilterNotSorted(array, sex) {
  animals.forEach(animal =>
    array[animal.location].push(({ [animal.name]:
      animal.residents.filter(element => element.sex === sex).map(resident => resident.name) })));
  return array;
}


function populateSortedAnimalFilterSorted(array, sex) {
  animals.forEach(animal =>
    array[animal.location].push(({ [animal.name]:
      animal.residents.filter(element => element.sex === sex)
      .map(resident => resident.name).sort() })));
  return array;
}

function animalMap(options = { includeNames: false, sorted: false, sex: false }) {
  const mapOfLocations = { NE: [], NW: [], SE: [], SW: [] };
  let mapOfAnimals;
  if (!options.includeNames && !options.sex && !options.sorted) {
    animals.forEach(element => mapOfLocations[element.location].push(element.name));
    mapOfAnimals = mapOfLocations;
  } else if (options.includeNames && !options.sorted && !options.sex) {
    mapOfAnimals = populateAnimalNames(mapOfLocations);
  } else if (options.includeNames && options.sorted && !options.sex) {
    mapOfAnimals = populateSortedAnimalNames(mapOfLocations);
  } else if (options.includeNames && options.sex && !options.sorted) { // not sort
    mapOfAnimals = populateAnimalFilterNotSorted(mapOfLocations, options.sex);
  } else if (options.includeNames && options.sex && options.sorted) { // sort
    mapOfAnimals = populateSortedAnimalFilterSorted(mapOfLocations, options.sex);
  } else if (!options.includeNames && (options.sex || options.sorted)) {
    animals.forEach(element => mapOfLocations[element.location].push(element.name));
    return mapOfLocations;
  }
  return mapOfAnimals;
}

function schedule(dayName) {
  let formattedSchedule = Object.entries(hours);
  formattedSchedule = formattedSchedule.map(day =>
    [`${day[0]}`, `Open from ${day[1].open}am until ${day[1].close - 12}pm`]);
  formattedSchedule[6][1] = 'CLOSED';
  if (!dayName) {
    return Object.fromEntries(formattedSchedule);
  }
  return Object.fromEntries(formattedSchedule.filter(day => day[0] === dayName));
}

function oldestFromFirstSpecies(id) {
  const firsAnimal = employees.filter(employeeId => employeeId.id === id)[0].responsibleFor[0];
  const filteredAnimal = animals.filter(animal => animal.id === firsAnimal)[0].residents
    .sort((animalA, animalB) => animalB.age - animalA.age);
  const oldestAnimal = [filteredAnimal[0].name, filteredAnimal[0].sex, filteredAnimal[0].age];
  return oldestAnimal;
}

function increasePrices(percentage) {
  const pricesArr = Object.entries(prices);
  pricesArr.forEach(price =>
    (prices[price[0]] = Math.ceil(price[1] * (percentage + 100)).toFixed(2) / 100));
}

function populateAndCleanEmployeesObject(array) {
  const allEmployees = array.map(employee => [`${employee.firstName} ${employee.lastName}`,
    employee.responsibleFor]);
  allEmployees.forEach(employee => employee.push(employee[1].map(animalId =>
    animals.filter(id => id.id === animalId)[0].name)));

  allEmployees.forEach(employee => employee.splice(1, 1));
  return Object.fromEntries(allEmployees);
}

function employeeCoverage(idOrName) {
  const filteredEmployee = employees.filter((({ id, firstName, lastName }) =>
  id === idOrName || firstName === idOrName || lastName === idOrName));
  return idOrName ? populateAndCleanEmployeesObject(filteredEmployee) :
    populateAndCleanEmployeesObject(employees);
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
