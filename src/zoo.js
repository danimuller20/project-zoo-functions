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

const { animals, employees } = require('./data');
const data = require('./data');

function animalsByIds(...ids) {
  const newArray = [];
  if (ids.length === 0) {
    return [];
  } else if (ids.length === 1) {
    newArray.push(animals.find(animal => animal.id === ids[0]));
    return newArray;
  }
  ids.forEach(id => animals.forEach((animal) => {
    if (animal.id === id) {
      newArray.push(animal);
    }
  }));
  return newArray;
}

function animalsOlderThan(animal, age) {
  let result = false;
  result = data.animals.find(animmal => animmal.name === animal)
  .residents.every(resident => resident.age >= age);
  return result;
}

function employeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  const fullName = employeeName.split(' ');
  const person = employees.find((employee) => {
    if (employee.firstName === fullName[0] || employee.lastName === fullName[fullName.length - 1]) {
      return employee;
    }
    return undefined;
  });
  return person;
}

function createEmployee(personalInfo, associatedWith) {
  const newObj = {};
  newObj.id = personalInfo.id;
  newObj.firstName = personalInfo.firstName;
  newObj.lastName = personalInfo.lastName;
  newObj.managers = associatedWith.managers;
  newObj.responsibleFor = associatedWith.responsibleFor;
  return newObj;
}

function isManager(id) {
  let result = false;
  employees.find((employee) => {
    const verify = (manager) => {
      if (manager === id) {
        result = true;
        return true;
      }
      return undefined;
    };
    employee.managers.forEach(verify);
    return undefined;
  });
  return result;
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // let employee = {
  //   id: id,
  //   firstName: firstName,
  //   lastName: lastName,
  //   managers: managers,
  //   responsibleFor: responsibleFor,
  // };
  // employees.push(employee);
}

function animalCount(species) {
  if (species === undefined) {
    const animalsObj = {};
    animals.forEach((animal) => {
      animalsObj[animal.name] = animal.residents.length;
      return undefined;
    });
    return animalsObj;
  }
  const specie = animals.find(animal => animal.name === species);
  return specie.residents.length;
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
