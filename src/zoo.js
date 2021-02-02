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
const { prices, hours } = require('./data');
const data = require('./data');

const { animals, employees } = data;

function animalsByIds(...ids) {
  // seu código aqui
  if (ids === undefined) { return []; }
  const species = [];
  (ids.map(currentValue => species.push(
    animals.find(actualValue => actualValue.id === currentValue))));
  return species;
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const speciesNameAndAge = animals.find(specieNameAndAge => specieNameAndAge.name === animal);
  return speciesNameAndAge.residents.every(value2 => value2.age > age);
}

function employeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) {
    return {};
  }
  const employeeSearched = employees.find(currentEmployee =>
  currentEmployee.firstName === employeeName || currentEmployee.lastName === employeeName);
  return employeeSearched;
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  const actualManager = (employees.some(ifIsManager =>
    ifIsManager.managers.some(valuID => valuID === id)));
  return actualManager;
  // seu código aqui
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
    return animals.reduce((previouAnimal, currentAnimal) => {
      previouAnimal[currentAnimal.name] = currentAnimal.residents.length;
      return previouAnimal;
    }, {});
  }
  let speciesQuantity;
  animals.forEach((currentSpecies) => {
    if (currentSpecies.name === species) {
      speciesQuantity = (currentSpecies.residents.length);
    }
  });
  return speciesQuantity;
}
// Resolvido com o axilio de Cleber Texeira Turma-9
function entryCalculator(entrants) {
  // seu código aqui
  if (!entrants) {
    return 0;
  }
  const { Adult: adQuantity = 0, Child: chQuantity = 0, Senior: sQuantity = 0 } = entrants;
  const { Adult, Senior, Child } = data.prices;
  return (Adult * adQuantity) + (Child * chQuantity) + (Senior * sQuantity);
}

function animalMap(options) {
  // seu código aqui
}
// Resolvido com o axilio de Cleber Texeira Turma-9
function schedule(dayName) {
  // seu código aqui
  const eachDay = Object.keys(hours);
  const valSchedule = {};
  eachDay.forEach((day) => {
    const { open, close } = hours[day];
    if (day === 'Monday') {
      valSchedule[day] = 'CLOSED';
    } else {
      valSchedule[day] = `Open from ${open}AM until ${close % 12}PM`;
    }
  });
  if (!dayName) {
    return valSchedule;
  }
  return { [dayName]: valSchedule[dayName] };
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
  const oldest = Object.values(animals
    .find(currAnimalId => currAnimalId.id === employees
    .find(currEmployeesId => currEmployeesId.id === id).responsibleFor[0]).residents
    .reduce((acumulAge, curAge) => {
      if (acumulAge.age < curAge.age) return curAge;
      return acumulAge;
    }));
  return oldest;
}

// Auxilio de Cleber Texeira Turma-9
function increasePrices(percentage) {
  // seu código aqui
  const withPercent = {};
  Object.keys(prices).forEach((key) => {
    const eachPrice = prices[key];
    const percentageCalc = eachPrice + (eachPrice * (percentage / 100));
    prices[key] = parseFloat(Math.fround(percentageCalc).toFixed(2));
    withPercent[key] = prices[key];
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
