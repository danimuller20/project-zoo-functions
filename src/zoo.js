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
  return data.animals.filter(animal => ids.some(id => animal.id === id));
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const especie = data.animals.find(specie => specie.name === animal);
  return especie.residents.every(obj => obj.age > age);
}

function employeeByName(name) {
  // seu código aqui
  let employee = data.employees.find(e => e.firstName === name || e.lastName === name || e.id === name);
  if (!name) employee = {};
  return employee;
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;
  return { id, firstName, lastName, managers, responsibleFor };
}

function isManager(id) {
  // seu código aqui
  return data.employees.some(employ => employ.managers.some(idEmploy => idEmploy === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function createNumberAnimals() {
  return data.animals.reduce((acc, animal) => {
    acc[animal.name] = animal.residents.length;
    return acc;
  }, {});
}

function animalCount(species) {
  // seu código aqui
  const animalNumber = createNumberAnimals();
  if (!species) {
    return animalNumber;
  }
  return animalNumber[species];
}

function entryCalculator(entrants = {}) {
  // seu código aqui
  if (Object.keys(entrants).length < 1) return 0;
  return Object.keys(entrants).reduce((acc, age) => {
    acc += data.prices[age] * entrants[age];
    return acc;
  }, 0);
}

function filterLocals(local) {
  return data.animals.filter(animal => animal.location === local);
}

function filterAnimals(local) {
  return local.map(animal => animal.name);
}

function sexAnimals(specie, options = { sex: undefined }) {
  return specie.residents.reduce((acc, animal) => {
    if (animal.sex === options.sex) acc.push(animal.name);
    return acc;
  }, []);
}

function listAnimals(specie, options = { sex: undefined, sorted: false }) {
  let arr = [];
  arr = sexAnimals(specie, options);
  if (options.sex === undefined) {
    arr = specie.residents.map(animal => animal.name);
  }
  if (options.sorted === true) arr.sort();
  return arr;
}

function filterNames(local, options) {
  return local.reduce((acc, specie) => {
    acc.push({
      [specie.name]: listAnimals(specie, options),
    });
    return acc;
  }, []);
}

function animalMap(options = {}) {
  // seu código aqui
  const map = {
    NE: filterAnimals(filterLocals('NE')),
    NW: filterAnimals(filterLocals('NW')),
    SE: filterAnimals(filterLocals('SE')),
    SW: filterAnimals(filterLocals('SW')),
  };
  if (options.includeNames === true) {
    Object.keys(map).forEach(function (loc) {
      map[loc] = filterNames(filterLocals(loc, options), options);
    });
  }
  return map;
}

function schedule(dayName = false) {
  // seu código aqui
  let func = {};
  const days = Object.keys(data.hours);
  days.forEach(day => {
    func[day] = `Open from ${data.hours[day].open}am until ${data.hours[day].close - 12}pm`
  }, {});
  func[days[days.length - 1]] = 'CLOSED';
  if (dayName) {
    func = {
      [dayName]: func[dayName]
    };
  }
  return func;
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
  const employ = data.employees.find(employ => employ.id === id);
  const especie = data.animals.find(animal => animal.id === employ.responsibleFor[0]);
  const older = especie.residents.reduce((acc, animal) => acc.age > animal.age ? acc : animal);
  return Object.values(older);
}

function increasePrices(percentage) {
  // seu código aqui
  const newPrices = Object.keys(data.prices).reduce((acc, age) => {
    acc[age] = Math.round((data.prices[age] * (1 + percentage / 100)) * 100) / 100;
    return acc;
  }, {});
  data.prices = newPrices;
  return newPrices;
}

function listEmployees() {
  return data.employees.reduce((acc, employ) => {
    acc.push(employ.id);
    return acc;
  }, [])
}

function createObject(ids) {
  const obj = {};
  ids.reduce((acc, id) => {
    const employ = employeeByName(id);
    const listEmploy = employ.responsibleFor;
    const animals = listEmploy.reduce((acc, animal) => {
      acc.push(animalsByIds(animal)[0].name);
      return acc
    }, [])
    obj[`${employ.firstName} ${employ.lastName}`] = animals
    return acc
  }, {})
  return obj;
}

function employeeCoverage(idOrName = false) {
  // seu código aqui
  let ids = '';
  ids = listEmployees();
  let obj = createObject(ids);
  if (idOrName) {
    const employ = employeeByName(idOrName);
    const fullName = `${employ.firstName} ${employ.lastName}`;
    obj = {[fullName]: obj[fullName]};
  }
  return obj;
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
