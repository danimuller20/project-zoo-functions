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

function animalsByIds(...args) {
  return animals.filter(element => args.includes(element.id));
}

function animalsOlderThan(animal, age) {
  return animals.every((animalElement) => {
    if (animal === animalElement.name) {
      return animalElement.residents.every(element => element.age > age);
    }
    return true;
  });
}

function employeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return employees.find((e) => {
    const r = e.firstName === employeeName || e.lastName === employeeName || e.id === employeeName;
    return r;
  });
}

function createEmployee(personalInfo, associatedWith) {
  return {
    id: personalInfo.id,
    firstName: personalInfo.firstName,
    lastName: personalInfo.lastName,
    managers: associatedWith.managers,
    responsibleFor: associatedWith.responsibleFor,
  };
}
function isManager(id) {
  return employees.some(element => element.managers[0] === id);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function animalCount(species) {
  if (species === undefined) {
    const objResult = {};

    animals.forEach((element) => {
      const { name, residents } = element;
      objResult[name] = residents.length;
    });
    return objResult;
  }
  return animals.find(element => element.name === species).residents.length;
}

function isEmptyObject(obj) {
  return Object.keys(obj).length === 0;
}

function entryCalculator(entrants = {}) {
  if (isEmptyObject(entrants)) {
    return 0;
  }
  const { Adult, Child, Senior } = prices;
  const { Adult: AdultE = 0, Child: ChildE = 0, Senior: SeniorE = 0 } = entrants;
  return (Adult * AdultE) + (Child * ChildE) + (Senior * SeniorE);
}

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  const objResult = {};
  const objEntries = Object.entries(hours);

  if (dayName === undefined) {

    for (const key in objEntries) {
      const objTarget = objEntries[key];
      if(objTarget[1].open - objTarget[1].close === 0){
        objResult[ objTarget[0] ] = 'CLOSED';
      } else {
        objResult[ objTarget[0] ] = `Open from ${objTarget[1].open}am until ${objTarget[1].close - 12}pm`;
      }
    }
    return objResult;
  }
  const dayTarget = objEntries.find((e) => e[0] === dayName);
  if(dayTarget[1].open - dayTarget[1].close === 0){
    objResult[ dayTarget[0] ] = 'CLOSED';
  } else {
    objResult[ dayTarget[0] ] = `Open from ${dayTarget[1].open}am until ${dayTarget[1].close - 12}pm`;
  }

  return objResult;
}
console.log(schedule('Monday'));

function oldestFromFirstSpecies(id) {
  const firtSpecieId = employees.find(e => e.id === id).responsibleFor[0];
  const speciesResidents = animals.find(e => e.id === firtSpecieId).residents;
  const elementTarget = speciesResidents.sort((a, b) => b.age - a.age)[0];
  return [elementTarget.name, elementTarget.sex, elementTarget.age];
}

function increasePrices(percentage) {
  prices.Adult = (((prices.Adult * (1 + (percentage / 100))) * 100).toPrecision(4)) / 100;
  prices.Child = (((prices.Child * (1 + (percentage / 100))) * 100).toPrecision(4)) / 100;
  prices.Senior = (((prices.Senior * (1 + (percentage / 100))) * 100).toPrecision(4)) / 100;
}

function employeeCoverage(idOrName = 'noParameter') {
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
