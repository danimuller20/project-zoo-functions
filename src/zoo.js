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

// teste
const data = require('./data');

const { animals } = require('./data');

const { employees } = require('./data');

const { prices } = require('./data');

function animalsByIds(...ids) {
  // seu código aqui
  return animals.filter((species, index) => species.id === ids[index]);
}

function animalsOlderThan(animal, age) {
  // Seu código aqui
  return animals.find(nome => nome.name === animal).residents.every(idade => idade.age >= age);
}

function employeeByName(employeeName) {
  // seu código aqui
  // if (employeeName === undefined) {
  //   return {};
  // }
  if (!employeeName) { return {}; }
  return employees.find(name => name.firstName === employeeName || name.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const employeedId = ({ ...personalInfo, ...associatedWith });
  return employeedId;
}

function isManager(id) {
  // seu código aqui
  return employees.some(employee => employee.managers
    .some(managerId => managerId === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor };
  data.employees.push(newEmployee);
}

function animalCount(species) {
  // seu código aqui
  const animalZoo = {};
  animals.forEach(animal => (animalZoo[animal.name] = animal.residents.length));
  if (species) {
    return animalZoo[species];
  }
  return animalZoo;
}

function entryCalculator(entrants) {
  // seu código aqui
  if (!entrants) {
    return 0;
  }
  return Object.entries(entrants).reduce((accPrices,
    [ticketPersonKey, pricesVal]) => (
    accPrices + (prices[ticketPersonKey] * pricesVal)
  ), 0);
}

function animalMap(options) {
  // seu código aqui
}

function acreateKeyValue(sourceObject, newObject) {
  sourceObject.forEach((dayData) => {
    const dayName = dayData[0];
    const openHour = `${dayData[1].open}am`;
    const closedHour = `${dayData[1].close - 12}pm`;
    newObject[dayName] = dayName === 'Monday' ? 'CLOSED' : `Open from ${openHour} until ${closedHour}`;
  });
}

function schedule(dayName) {
  // seu código aqui
  const openingHoursDataSource = Object.entries(data.hours);
  const allOpeningHours = {};
  acreateKeyValue(openingHoursDataSource, allOpeningHours);
  const getSpecificDay = (day) => {
    const dayInfo = {};
    dayInfo[day] = allOpeningHours[day];
    return dayInfo;
  };
  return dayName ? getSpecificDay(dayName) : allOpeningHours;
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
  const employeesId = employees.find(employee => employee.id === id);
  const [animalFirstForEmployees] = employeesId.responsibleFor;
  const animalList = animals.find(currAnimal => currAnimal.id === animalFirstForEmployees);
  const animalOld = animalList.residents.reduce((accAge, curAge) => (
    curAge.age > accAge.age ? curAge : accAge
  ));
  return Object.values(animalOld);
}

function increasePrices(percentage) {
  // seu código aqui
  const pricesOptions = Object.keys(data.prices);
  const priceRateToChange = 1 + (percentage / 100);
  pricesOptions.forEach(priceOption =>
  (data.prices[priceOption] =
    (Math.round((data.prices[priceOption] * priceRateToChange) * 100)) / 100));
}
// Plantão com Murilo e Bernardo
function getAnimalListFromEmplyee(employee) {
  return employee.responsibleFor.map(
    animalId => animals.find(animal => animalId === animal.id).name);
}

function getEmployeeFullName(employee) {
  return `${employee.firstName} ${employee.lastName}`;
}

function getAllEmployeesAndAnimals() {
  return employees.reduce((accumulator, employee) => {
    const animalList = getAnimalListFromEmplyee(employee);
    accumulator[getEmployeeFullName(employee)] = animalList;
    return accumulator;
  }, {});
}

function getEmployeedByNameOrId(idOrName) {
  return employees.find(
    employee =>
      employee.id === idOrName ||
      employee.firstName === idOrName ||
      employee.lastName === idOrName);
}

function employeeCoverage(idOrName) {
  // seu código aqui
  if (!idOrName) {
    return getAllEmployeesAndAnimals();
  }
  const targetEmployee = getEmployeedByNameOrId(idOrName);
  const animalList = getAnimalListFromEmplyee(targetEmployee);
  const key = getEmployeeFullName(targetEmployee);
  return { [key]: animalList };
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
