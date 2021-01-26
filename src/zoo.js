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
  return ids.map(id => data.animals.find(animal => animal.id === id));
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const { residents } = data.animals.find(species => species.name === animal);
  return residents.every(specimen => specimen.age > age);
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
  let helper;
  let holder;
  regions.forEach((region) => {
    holder = data.animals.filter(species => species.location === region);
    helper = holder.map(specimen => specimen.name);
    Object.assign(answer, ({ [region]: helper }));
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
      const { residents } = data.animals.find(creature => creature.name === animal);
      if (sex) {
        species = residents.filter(creature => creature.sex === sex)
          .map(creature => creature.name);
      } else species = residents.map(creature => creature.name);
      if (sorted) species.sort();
      Object.assign(holder, { [animal]: species });
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
  let workDay;
  if (dayName) workDay = { [dayName]: data.hours[dayName] };
  else workDay = data.hours;
  return Object.entries(workDay)
    .reduce((agenda, day) => Object.assign(agenda, { [day[0]]: (day[1].open !== 0) ?
      `Open from ${day[1].open}am until ${day[1].close - 12}pm` : 'CLOSED' }), {});
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
  const helper = data.employees.find(person => person.id === id).responsibleFor[0];
  const answer = data.animals.find(creature => creature.id === helper).residents
    .sort((creature1, creature2) => creature2.age - creature1.age)[0];
  return [answer.name, answer.sex, answer.age];
}

function increasePrices(percentage) {
  // seu código aqui
  Object.keys(data.prices).forEach((category) => {
    data.prices[category] *= (1 + (percentage / 100));
    data.prices[category] = Math.round(data.prices[category] * 100) / 100;
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
