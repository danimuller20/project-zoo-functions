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

const { animals, employees, prices } = require('./data');
const data = require('./data');

function animalsByIds() {
  // seu código aqui
}

function animalsOlderThan(animal, age) {
  const animalsGroup = animals.find(value => value.name === animal);
  return animalsGroup.residents.every(value => value.age >= age);
} // concluido

function employeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  const search = (name) => {
    const { firstName, lastName } = name;
    return (firstName === employeeName) || (lastName === employeeName);
  };
  return employees.find(search);
} // concluido

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
}

function isManager(id) {
  // seu código aqui
}

function addEmployee(...person) {
  const [id, firstName, lastName, managers = [], responsibleFor = []] = person;
  const employee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  employees.push(employee);
} // concluido

function speciesCount(species) {
  const animalGroup = animals.find(value => value.name === species);
  return animalGroup.residents.length;
}

function animalCount(species) {
  if (species === undefined) {
    const quantitiesObject = {};
    animals.forEach((animal) => {
      const amountOfAnimals = speciesCount(animal.name);
      quantitiesObject[animal.name] = amountOfAnimals;
    });
    return quantitiesObject;
  }
  return speciesCount(species);
} // concluido

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
  let species;
  employees.forEach((employee) => {
    if (employee.id === id) {
      species = employee.responsibleFor[0];
    }
  });
  const animalFound = animals.find((animal) => animal.id === species);
  const { residents } = animalFound;
  let olderAnimal = residents[0];
  residents.forEach((animal) => {
    if (animal.age > olderAnimal.age) {
      olderAnimal = animal;
    }
  });
  return Object.values(olderAnimal);
}

function calculatePercentage(number, percentage) {
  return (number * percentage) / 100 ;
}

function increasePrices(percentage) {
  // seu código aqui
  Object.keys(prices).forEach((item) => {
    // console.log(item + " = " + obj[item]);
    const percentageResult = calculatePercentage(prices[item], percentage);
    console.log(`Item: ${item}, percentageResult: ${percentageResult}`);
    const result = prices[item] + percentageResult;
    console.log(`Result: ${result}`);
    prices[item] = Math.round(result).toFixed(2);
  });
  // console.log(prices);
  return prices;
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
