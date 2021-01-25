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

const { animals } = data;
const { employees } = data;

function animalsByIds(...ids) {
  if (!ids) {
    return [];
  }
  const idAnimal = ids.map(id => animals.find(animal => id === animal.id));
  return idAnimal;
}

function animalsOlderThan(animalName, age) {
  const nameAnimal = animals.find(animal => animal.name === animalName);
  const result = nameAnimal.residents.every(species => species.age >= age);
  return result;
}

function employeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  const Name = employees.find((employee) => {
    if (employee.firstName === employeeName) {
      return employee;
    } else if (employee.lastName === employeeName) {
      return employee;
    }
  });
  return Name;
}

function createEmployee(personalInfo, associatedWith) {
  const newEmployee = {
    id: personalInfo.id,
    firstName: personalInfo.firstName,
    lastName: personalInfo.lastName,
    managers: associatedWith.managers,
    responsibleFor: associatedWith.responsibleFor
  };
  return newEmployee;
}

function isManager(id) {
  return employees.some(employee => employee.managers[0] === id);
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  if((!managers) || (!responsibleFor)) {
    managers = [];
    responsibleFor = []
  }
  const addedEmployee = {
    id: id,
    firstName: firstName,
    lastName: lastName,
    managers: managers,
    responsibleFor: responsibleFor,
  };
  employees.push(addedEmployee);
  return addedEmployee;
}

function animalCount(species) {
  // seu código aqui
}

function entryCalculator(entrants) {
  // seu código aqui
}

function animalMap(options) {
  // seu código aqui
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
