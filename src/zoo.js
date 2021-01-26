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

function animalsPerRegion(regions, answer) {
  let holder;
  regions.forEach((region) => {
    holder = data.animals.filter(creature => creature.location === region)
      .map(creature => creature.name);
    Object.assign(answer, ({ [region]: holder }));
  });
  return answer;
}

function animalsPerRegionWithNames(regions, answer, options) {
  let helper;
  let holder;
  let counter;
  let species;
  const { sorted = false, sex = false } = options;
  regions.forEach((region) => {
    counter = [];
    helper = data.animals.filter(creature => creature.location === region)
      .map(creature => creature.name);
    helper.forEach((animal) => {
      holder = {};
      sex ? species = data.animals.find(creature => creature.name === animal).residents
        .filter(creature => creature.sex === sex).map(creature => creature.name) : 
        species = data.animals.find(creature => creature.name === animal).residents
        .map(creature => creature.name);
      if (sorted) species.sort();
      Object.assign(holder, { [animal] : species });
      counter.push(holder);
    });
    Object.assign(answer, ({ [region]: counter }));
  });
  return answer;
}

function animalMap(options) {
  // seu código aqui
  const regions = ['NE', 'NW', 'SE', 'SW'];
  const answer = {};
  if (!options) return animalsPerRegion(regions, answer);
  if (!options.includeNames) return animalsPerRegion(regions, answer);
  return animalsPerRegionWithNames(regions, answer, options);
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
