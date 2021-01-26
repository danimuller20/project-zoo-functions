/* /
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

const { animals, employees } = data;

function animalsByIds(...ids) {
  // seu código aqui
  if (ids.length === 0) {
    return [];
  }
  const arrayOfIDs = [];
  animals.filter((animal) => {
    ids.forEach((id) => {
      if (id === animal.id) {
        arrayOfIDs.push(animal);
      }
    });
    return 0;
  });
  return arrayOfIDs;
}
// exercício 2

function animalsOlderThan(animal, age) {
  // seu código aqui
  const specieAnimals = animals.find(animalZoo => animalZoo.name === animal);
  const specieAnimalsOlderThanAge = specieAnimals.residents.every(animalS => animalS.age > age);
  return specieAnimalsOlderThanAge;
}

function employeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) {
    return {};
  }
  const employeeObject = employees.find((employee) => {
    const firstName = employee.firstName;
    const lastName = employee.lastName;
    if (firstName === employeeName || lastName === employeeName) {
      return employee;
    }
    return 0;
  });

  return employeeObject;
}
// exercício 4
function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const newEmployee = {
    ...personalInfo,
    ...associatedWith,
  };
  return newEmployee;
}

function isManager(id) {
  // seu código aqui
  let idManagers = employees.map(employee => employee.managers);
  idManagers = idManagers.reduce((previous, current) => previous.concat(current), []);
  return idManagers.some(ids => ids === id);
}
function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const newEmployee = { id, firstName, lastName, managers, responsibleFor };
  return data.employees.push(newEmployee);
}

function animalCount(species) {
  // seu código aqui
  if (species === undefined) {
    const name = animals.map(animal => animal.name);
    const quantity = animals.map(animal => animal.residents.length);
    const animalsAndQuantity = {};
    name.forEach(function (animal, index) {
      animalsAndQuantity[animal] = quantity[index];
      return animalsAndQuantity;
    });
    return animalsAndQuantity;
  }
  const spicieRequested = animals.find(animal => animal.name === species);
  return spicieRequested.residents.length;
}
function isEmptyObject(obj) {
  return JSON.stringify(obj) === '{}';
}

function entryCalculator(entrants) {
  // seu código aqui
  if (entrants === undefined || isEmptyObject(entrants)) { return 0; }
  const keysOfObject = Object.keys(entrants);
  let prices = [];
  keysOfObject.forEach((key) => {
    if (key === 'Adult') {
      let priceAdult = entrants.Adult * 49.99;
      prices.push(priceAdult);
    }
    if (key === 'Child') {
      let priceChild = entrants.Child * 20.99;
      prices.push(priceChild);
    }
    if (key === 'Senior') {
      let priceSenior = entrants.Senior * 24.99;
      prices.push(priceSenior);
    }
    return 0;
  });
  const totalPrice = prices.reduce((previous,current) => previous + current);
  return totalPrice;
}

// function animalMap(options) {
//   // seu código aqui
// }

// function schedule(dayName) {
//   // seu código aqui
// }

// function oldestFromFirstSpecies(id) {
//   // seu código aqui
// }

// function increasePrices(percentage) {
//   // seu código aqui
// }

// function employeeCoverage(idOrName) {
//   // seu código aqui
// }

module.exports = {
  entryCalculator,
  // schedule,
  animalCount,
  // animalMap,
  animalsByIds,
  employeeByName,
  // employeeCoverage,
  addEmployee,
  isManager,
  animalsOlderThan,
  // oldestFromFirstSpecies,
  // increasePrices,
  createEmployee,
};
