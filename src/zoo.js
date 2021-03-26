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

const animalsByIds = (...ids) => ids.map(id => animals.find(animal => id === animal.id));
  // verificacao de parametro vazio => if (!ids) { return [] }
  // compara se o parametro ids === (false||undefined||null) se sim retorna um array vazio[]
  // rest parameter ('...') trata numero indefinido de parametros
  // (cada parametro e convertido em elemento de arr)
  // o rest parameter ('...') retorna arr com os parametros declarados,
  // verificacao do arr ids desnecessaria
  // .map trata cada elemento do array ids[]
  // .find compara, e devolve o o objeto cuja propriedade id (animal.id)
  // seja igual ao parametro fornecido (id)
function animalsOlderThan(specie, age) {
  return animals.find(animal => animal.name === specie).residents
    .every(resident => resident.age >= age);
}

function employeeByName(employeeName) {
  if (employeeName === undefined) return {};
  return employees.find(({ firstName, lastName }) => (
    firstName === employeeName || lastName === employeeName
  )) || {};
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some(({ managers }) => managers.includes(id));
}

function addEmployee(id = '', firstName = '', lastName = '', managers = [], responsibleFor = []) {
  const personalInfo = { id, firstName, lastName };
  const associatedWith = { managers, responsibleFor };
  const employee = createEmployee(personalInfo, associatedWith);
  employees.push(employee);
}

function animalCount(species) {
  const openHours = animals.reduce((acc, { name, residents }) => {
    acc[name] = residents.length;
    return acc;
  }, {});
  if (species) return openHours[species];
  return openHours;
}

function entryCalculator(entrants) {
  const { Adult, Senior, Child } = prices;
  if (entrants === undefined || entrants.length === 0) {
    return 0;
  }
  const { Adult: adultEntrant = 0, Senior: seniorEntrant = 0, Child: childEntrant = 0 } = entrants;
  return (adultEntrant*Adult) + (seniorEntrant*Senior) + (childEntrant*Child)
}

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  const days = Object.keys(hours);
  const openHours = {};

  days.forEach((day) => {
    const { open, close } = hours[day];
    if (day === 'Monday') {
      openHours[day] = 'CLOSED';
    } else {
      openHours[day] = `Open from ${open}am until ${close - 12}pm`;
    }
  });
  return (!dayName) ? openHours : { [dayName]: openHours[dayName] };
}

function oldestFromFirstSpecies(id) {
  const oldestAnimal = animals
  .find(animal => animal.id === employees
    .find(employee => employee.id === id).responsibleFor[0]).residents
    .sort((a, b) => b.age - a.age);
  return Object.values(oldestAnimal[0]);
}

function increasePrices(percentage) {
  Object.keys(prices).forEach((key) => {
    prices[key] = Math.round((prices[key] * 100) * ((percentage / 100) + 1)) / 100;
  });
}

function employeeCoverage(idOrName) {
  const result = {};
  if (!idOrName) {
    const coveredAnimals = employees
      .map(employee => employee.responsibleFor
      .map(animalId => animals
      .find(animal => animal.id === animalId).name));
    employees
      .forEach(({ firstName, lastName }, index) => {
        result[`${firstName} ${lastName}`] = coveredAnimals[index];
      });
    return result;
  }

  const { firstName, lastName, responsibleFor } = employees
    .find(employee =>
      employee.firstName === idOrName ||
      employee.lastName === idOrName ||
      employee.id === idOrName);

  return { [`${firstName} ${lastName}`]: responsibleFor
    .map(animalId => animals
    .find(animal => animal.id === animalId).name) };
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
