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

const { animals } = require('./data');
const data = require('./data');

function animalsByIds(...ids) {
  const list = animals.filter(({ id }, index) =>id === ids[index]);
}

function animalsOlderThan(animal, age) {
  const selectAnimal = animals.find((thisAnimal) => {
   return animals.name === animal; 
  })
  const isAge = selectAnimal.residents.age
  for (index = 0; index < selectAnimal.residents.length; index += 1) {
    if (isAge < selectAnimal.residents[index]) {
      return false
    } else {
      return true
    }
  }
  console.log(isAge);
}
animalsOlderThan();

function employeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return employees.find(employee =>
    (employee.firstName === employeeName || employee.lastName === employeeName)
  );
}

function createEmployee(personalInfo, associatedWith) {
  return (Object.assign(personalInfo, associatedWith));
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
