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
// código jlfagundes

const { animals, employees, prices } = require('./data');
const data = require('./data');

function animalsByIds(...ids) {
  // seu código aqui
  return animals.filter(animal => ids.some(id => animal.id === id));
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const animalType = animals.find(animalOlder => animalOlder.name === animal);
  return animalType.residents.every(value1 => value1.age > age);
}

function employeeByName(employeeName) {
  // seu código aqui
  let employeeFind = employees
    .find(value1 => value1.firstName === employeeName || value1.lastName === employeeName);
  if (!employeeName) employeeFind = {};
  return employeeFind;
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;
  return { id, firstName, lastName, managers, responsibleFor };
}

function isManager(id) {
  // seu código aqui
  return employees.some(employee => employee.managers.some(idEmployee => idEmployee === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  // seu código aqui
  if (!species) {
    const objAnimal = {};
    animals.forEach(animal => (objAnimal[animal.name] = animal.residents.length));
    return objAnimal;
  }
  return animals.filter(animal => animal.name === species)[0].residents.length;
}

function entryCalculator(entrants) {
  // seu código aqui
  if (entrants === undefined) { return 0; }
  const { Adult = 0 } = entrants;
  const { Child = 0 } = entrants;
  const { Senior = 0 } = entrants;
  const totalPrice = (Adult * prices.Adult) + (Child * prices.Child) + (Senior * prices.Senior);
  return totalPrice;
}

function returnLocations() {
  const locations = [];
  animals.forEach((element) => {
    if (!locations.includes(element.location)) {
      locations.push(element.location);
    }
  });
  return locations;
}

function searchAnimalsByLocation(location) {
  const arrayOfAnimalsByLocation = animals
  .filter(animal => animal.location === location)
  .map(element => element.name);
  return arrayOfAnimalsByLocation;
}

function searchResidentsNamesByEspecie(especieName) {
  return animals.reduce((residents, animal) => {
    if (animal.name === especieName) {
      residents[especieName] = animal.residents.map(resident => resident.name);
    }
    return residents;
  }, {});
}

function sortNames(object) {
  Object.keys(object).forEach((location) => {
    object[location].forEach((especie) => {
      especie[Object.keys(especie)[0]].sort();
    });
  });
  return object;
}
function separateAnimalsBySex(animalName, sex) {
  const arrayAnimalBySex = animals.reduce((arrayAnimalBySexConstruction, element) => {
    if (element.name === animalName) {
      arrayAnimalBySexConstruction.push(element.residents
        .filter(resident => resident.sex === sex));
    }
    return arrayAnimalBySexConstruction;
  }, []);
  return arrayAnimalBySex[0].map(value => value.name);
}
const arrayOfLocations = returnLocations();
function createDefaultObject() {
  return arrayOfLocations.reduce((defaultObject, location) => {
    defaultObject[location] = searchAnimalsByLocation(location);
    return defaultObject;
  }, {});
}
function createObjectWithNames(optionSex = false) {
  const objectWithNames = arrayOfLocations.reduce((objectWithNamesByEspecie, location) => {
    const arrayWithNames = searchAnimalsByLocation(location).map(searchResidentsNamesByEspecie);
    objectWithNamesByEspecie[location] = arrayWithNames;
    return objectWithNamesByEspecie;
  }, {});
  if (optionSex) {
    Object.keys(objectWithNames).forEach((location) => {
      objectWithNames[location].forEach((animal) => {
        animal[Object.keys(animal)[0]] = separateAnimalsBySex(Object.keys(animal)[0], optionSex);
      });
    });
    return objectWithNames;
  }
  return objectWithNames;
}
function animalMap(options) {
  if (!options || !options.includeNames) {
    return createDefaultObject();
  }
  return (options.sorted ? sortNames(createObjectWithNames(options.sex))
  : createObjectWithNames(options.sex));
}

function schedule(dayName) {
  // seu código aqui
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
  const findId = data.employees.find(employee => employee.id === id).responsibleFor[0];
  const findAnimal = data.animals.find(animal => animal.id === findId).residents
    .sort((value1, value2) => value2.age - value1.age)[0];
  return [findAnimal.name, findAnimal.sex, findAnimal.age];
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
