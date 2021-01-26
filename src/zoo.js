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
      return animalsAndQuantity[animal] = quantity[index]
    });
    return animalsAndQuantity;
  }
  const spicieRequested = animals.find(animal => animal.name === species);
  return spicieRequested.residents.length;
}

function entryCalculator(entrants) {
  // seu código aqui
  if (entrants === undefined) { return 0 };

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
