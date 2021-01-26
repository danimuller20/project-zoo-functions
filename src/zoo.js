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

function animalsByIds(...ids) {
  return ids.map(id => animals.find(animal => animal.id === id));
}

function animalsOlderThan(animal, age) {
  return animals.find(beast =>
    beast.name === animal).residents.every(resident =>
      resident.age >= age);
}

function employeeByName(employeeName) {
  const filteredEmployee = employees.find(employee =>
    employee.firstName === employeeName || employee.lastName === employeeName);
  return filteredEmployee || {};
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.map(employee =>
    employee.managers.some(maneger =>
      maneger === id)).some(employee => employee);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  const all = {};
  animals.forEach(animal => (all[animal.name] = animal.residents.length));
  return species ? animals.find(animal => animal.name === species).residents.length : all;
}

function entryCalculator(entrants) {
  if (!entrants) return 0;
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  return (Adult * prices.Adult) + (Child * prices.Child) + (Senior * prices.Senior);
}

function getLocations() {
  const locations = animals.reduce((acc, curr) => {
    if (curr.location in acc) acc[curr.location].push(curr.name);
    else acc[curr.location] = [curr.name];
    return acc;
  }, {});
  return locations;
}

function animalsName(beasts, options) {
  if (options.sex) beasts = beasts.filter(animal => animal.sex === options.sex);
  const beast = beasts.map(animal => animal.name);
  if (options.sorted) beast.sort();
  return beast;
}

function animalsBySpecies(specie, options) {
  // if (!options.includeNames) return
  const speciesInfos = animals.find(animal =>
    animal.name === specie).residents.map(resident => resident);
  const names = animalsName(speciesInfos, options);
  // console.log(names);
  return { [specie]: names };
}

function animalNames(options) {
  const speciesLocations = getLocations();
  const locations = Object.keys(speciesLocations);
  let animalsLocation;
  if (!options || !options.includeNames) {
    animalsLocation = locations.reduce((acc, curr) => Object.
      assign(acc, { [curr]: speciesLocations[curr] }), {});
  }
  else {
    animalsLocation = locations.reduce((acc, curr) => Object.
    assign(acc, { [curr]: speciesLocations[curr].
      map(animal => animalsBySpecies(animal, options)) }), {});
  }
  return animalsLocation;
}

function animalMap(options) {
  const animalsByNames = animalNames(options);
  return animalsByNames;
}

function schedule(dayName) {
  let day = {};
  if (!dayName) {
    Object.keys(hours).forEach(hour =>
      (day[hour] = `Open from ${hours[hour].open}am until ${hours[hour].close - 12}pm`));
    day.Monday = 'CLOSED';
  } else if (dayName === 'Monday') day = { Monday: 'CLOSED' };
  else day = { [dayName]: `Open from ${hours[dayName].open}am until ${hours[dayName].close - 12}pm` };
  return day;
}

function oldestFromFirstSpecies(id) {
  const filteredEmployee = employees.find(employee => employee.id === id);
  let animalsEmployee = animalsByIds(filteredEmployee.responsibleFor[0])[0].residents;
  animalsEmployee = animalsEmployee.reduce((acc, curr) =>
    ((acc.age < curr.age) ? (acc = curr) : acc));
  return [animalsEmployee.name, animalsEmployee.sex, animalsEmployee.age];
}

function increasePrices(percentage) {
  const multiplier = (percentage / 100) + 1;
  prices.Adult = parseFloat(((prices.Adult * multiplier) + 0.005).toFixed(2));
  prices.Senior = parseFloat(((prices.Senior * multiplier) + 0.005).toFixed(2));
  prices.Child = parseFloat(((prices.Child * multiplier) + 0.005).toFixed(2));
}

function hasIdOrNameEmployeeCoverage(idOrName) {
  const employee = employees.find(person => person.id === idOrName) || employeeByName(idOrName);
  const animalsCover = animalsByIds(...employee.responsibleFor).map(animal => animal.name);
  return { [`${employee.firstName} ${employee.lastName}`]: animalsCover };
}

function dontHasIdOrNameEmployeeCoverage() {
  const employeesIds = employees.map(employee => employee.id);
  const employeesCovers = employeesIds.reduce((acc, curr) =>
    Object.assign(acc, hasIdOrNameEmployeeCoverage(curr)), {});
  return employeesCovers;
}

function employeeCoverage(idOrName) {
  return (!idOrName) ? dontHasIdOrNameEmployeeCoverage() : hasIdOrNameEmployeeCoverage(idOrName);
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
