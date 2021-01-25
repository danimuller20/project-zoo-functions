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
  if(!employeeName) {
    return {}
  }
  const Name = employees.find((employee) => {
    if (employee.firstName === employeeName) {
      return employee;
    } else if (employee.lastName === employeeName) {
      return employee;
    } else {return false} 
    
  });
  return Name;
}
console.log(employeeByName('Wilburn'))

function createEmployee(personalInfo, associatedWith) {

}

function isManager(id) {
  // seu código aqui
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
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
