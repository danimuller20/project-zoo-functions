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
const data = require('./data');

function animalsByIds(...ids) {
  const receivedIds = [...ids];
  const animalsArray = [];
  receivedIds.forEach((id) => {
    animals.forEach((specie) => {
      if (id === specie.id) {
        animalsArray.push(specie);
      }
    });
  });
  return animalsArray;
}

function animalsOlderThan(animal, age) {
  const specieName = animals.find(specie => specie.name === animal);
  const animalsValidadeAge = specieName.residents.every(item => item.age >= age);
  return animalsValidadeAge;
}

function employeeByName(name = {}) {
  const search = employees.find(employee =>
  employee.firstName === name || employee.lastName === name);
  return search === undefined ? {} : search;
}

function createEmployee(personalInfo, associatedWith) {
  const newEmployee = Object.assign({}, personalInfo, associatedWith);
  return newEmployee;
}

function isManager(id) {
  return employees.some(employee => employee.managers
    .some(managerId => managerId === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return employees.push(newEmployee);
}

function animalCount(specie) {
  const objCount = animals.reduce((previousValue, currentValue) => {
    previousValue[currentValue.name] = currentValue.residents.length;
    return previousValue;
  }, {});
  const search = animals.find(animal => animal.name === specie);
  return search === undefined ? objCount : search.residents.length;
}

function entryCalculator(entrants = 0) {
  let result = 0;
  const getPrices = Object.entries(prices);
  const getEntrances = Object.entries(entrants);
  getEntrances.forEach((typeEntry) => {
    getPrices.forEach((price) => {
      if (typeEntry[0] === price[0]) {
        result += (typeEntry[1] * price[1]);
      }
    });
  });
  return result;
}

// 9
const locations = ['NE', 'NW', 'SE', 'SW'];

function returnAnimalsByLocation() {
  const object = {};
  locations.forEach((item) => {
    object[item] = [];
    Object.keys(object).forEach((key) => {
      object[key] = animals
      .filter(element => element.location === key)
      .map(specie => specie.name);
    });
  });
  return object;
}

function filterAnimalsBySpecie(name) {
  const findAnimal = animals.find(animal => animal.name === name).residents;
  const getResidentNames = findAnimal.map(element => element.name);
  return getResidentNames;
}

function filterAnimalBySex(name, sex) {
  const findAnimal = animals.find(animal => animal.name === name).residents;
  const filterAnimals = findAnimal.filter(element =>
    element.sex === sex);
  const getResidentNames = filterAnimals.map(item => item.name);
  return getResidentNames;
}

function filterAnimal(name, sex) {
  if (!sex) {
    return filterAnimalsBySpecie(name);
  }
  return filterAnimalBySex(name, sex);
}

function createMapOfAnimal() {
  const object = {};
  locations.forEach((location) => {
    const array = [];
    object[location] = array;
    animals.forEach((animal) => {
      if (animal.location === location) {
        array.push(animal.name);
      }
    });
  });
  return object;
}

function createMapOfAnimalsWithName(sorted, sex) {
  const object = {};
  locations.forEach((location) => {
    object[location] = [];
    animals.forEach((animal) => {
      if (animal.location === location) {
        const obj = {};
        obj[animal.name] = (!sorted) ?
        filterAnimal(animal.name, sex) :
        filterAnimal(animal.name, sex).sort();
        object[location].push(obj);
      }
    });
  });
  return object;
}

function verifyIncludeNames(includeNames, sorted, sex) {
  if (!includeNames) {
    return createMapOfAnimal();
  }
  return createMapOfAnimalsWithName(sorted, sex);
}

function animalMap(options = '') {
  const { includeNames, sorted, sex } = options;
  return (options === '') ? returnAnimalsByLocation() : verifyIncludeNames(includeNames, sorted, sex);
}

// 10
function newSchedule() {
  const object = {};
  const getHoursEntries = Object.entries(hours);
  getHoursEntries.forEach((day) => {
    if (day[1].open === 0) {
      object[day[0]] = 'CLOSED';
    } else {
      object[day[0]] = `Open from ${day[1].open}am until ${day[1].close - 12}pm`;
    }
  });
  return object;
}

function scheduleOfDay(day, object) {
  const newObject = {};
  const getScheduleEntries = Object.entries(object);
  const verify = getScheduleEntries.find(entry => entry[0] === day);
  newObject[verify[0]] = verify[1];
  return newObject;
}

function schedule(dayName) {
  return (dayName === undefined) ? newSchedule() : scheduleOfDay(dayName, newSchedule());
}

// 11

function findEmployee(receivedId) {
  const filteredEmployee = employees.find(employee => employee.id === receivedId);
  return filteredEmployee;
}

function findSpecie(employee) {
  const specie = employee.responsibleFor
  .map(idResp => animals
  .find(animal => animal.id === idResp));
  return specie;
}

function oldestFromFirstSpecies(id) {
  const receivedSpecie = findSpecie(findEmployee(id));
  const getOlder = receivedSpecie[0].residents
  .reduce((older, current) => (older.age > current.age ? older : current));
  return Object.values(getOlder);
}

// 12
// Esse tipo de arredondamento de casa decimal usado na linha 156 foi encontrado no stackoverflow, no link 'https://stackoverflow.com/questions/11832914/round-to-at-most-2-decimal-places-only-if-necessary'

function increasePrices(percentage) {
  const convertPercentage = 1 + (percentage / 100);
  const result = Object.keys(prices).forEach((item) => {
    prices[item] = (Math.round((prices[item] * convertPercentage) * 100)) / 100;
  });
  return result;
}

// 13
// Recebe id ou firsName ou lastName do employee como parametro
// Retorna um objeto { nomeDoColaborador: ['specie1', 'specie2',...]}
// Sem parâmetros, retorna uma lista de funcionários e os animais pelos quais eles são responsáveis.

function getAnimalListFromEmployee(employee) {
  const list = employee.responsibleFor
    .map(animalId => animals.find(animal => animalId === animal.id).name);
  return list;
}

function getEmployeeFullName(employee) {
  const name = `${employee.firstName} ${employee.lastName}`;
  return name;
}

function getEmployeeByNameOrId(idOrName) {
  return employees
    .find(employee => employee.id === idOrName
      || employee.firstName === idOrName || employee.lastName === idOrName);
}

function returnListAllEmployeesAndAnimals() {
  return employees.reduce((object, employee) => {
    const animalList = getAnimalListFromEmployee(employee);
    object[getEmployeeFullName(employee)] = animalList;
    return object;
  }, {});
}

function employeeCoverage(idOrName) {
  if (!idOrName) {
    return returnListAllEmployeesAndAnimals();
  }
  const targetEmployee = getEmployeeByNameOrId(idOrName);
  const animalList = getAnimalListFromEmployee(targetEmployee);
  const key = getEmployeeFullName(targetEmployee);
  return { [key]: animalList };
}

//

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
