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

function animalsByIds(...ids) {
  // seu código aqui
  const answer = [];
  ids.forEach(id => answer.push(data.animals.find(animal => animal.id === id)));
  return answer;
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  return data.animals.find(creature => creature.name === animal)
    .residents.every(creature => creature.age > age);
}

function employeeByName(employeeName) {
  // seu código aqui
  const employee = data.employees
    .find(person => person.firstName === employeeName || person.lastName === employeeName);
  return Object.assign({}, employee);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return Object.assign({}, personalInfo, associatedWith);
}

function isManager(id) {
  // seu código aqui
  return data.employees.some(person => person.managers.find(tag => tag === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  // seu código aqui
  return species ?
    data.animals.find(creature => creature.name === species).residents.length :
    data.animals.reduce((acc, { name, residents }) =>
    Object.assign(acc, ({ [name]: residents.length })), {});
}

function entryCalculator(entrants) {
  // seu código aqui
  if (!entrants) return 0;
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  return (Adult * data.prices.Adult) + (Child * data.prices.Child) + (Senior * data.prices.Senior);
}

function animalsPerRegion (regions, answer) {
  let helper;
  regions.forEach((region) => {
    helper = data.animals.filter(creature => creature.location === region)
      .map(creature => creature.name);
    Object.assign(answer, ({ [region]: helper }));
  });
  return answer;
}

function animalMap(options) {
  // seu código aqui
  const regions = ['NE', 'NW', 'SE', 'SW'];
  const answer = {};
  let helper;
  let holder;
  let counter;
  let species;
  if (!options) return animalsPerRegion(regions, answer);
  const { includeNames = false, sorted = false, sex = false } = options;
  if (!includeNames) return animalsPerRegion(regions, answer);
  regions.forEach((region) => {
    counter = [];
    helper = data.animals.filter(creature => creature.location === region)
      .map(creature => creature.name);
    helper.forEach((animal) => {
    holder = {};
    species = data.animals.find(creature => creature.name === animal).residents;
    sex ? Object.assign(holder, { [ animal ] :
      species.filter(creature => creature.sex === sex).map(creature => creature.name) }) :
    Object.assign(holder, { [ animal ] :
      species.map(creature => creature.name) });
    if (sorted) holder[animal].sort();
    counter.push(holder);
    });
  Object.assign(answer, ({ [region]: counter }));
  });
  return answer;
}

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
