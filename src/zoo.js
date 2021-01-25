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

function animalsByIds(...ids) {
  // seu código aqui
  return animals.filter(element =>
  ids.some(elementParameter => element.id === elementParameter));
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  return animals.some(currentAnimal =>
    currentAnimal.name === animal &&
    currentAnimal.residents.every(currentResident => currentResident.age >= age));
}

function employeeByName(employeeName) {
  // seu código aqui
  if (employeeName !== undefined) {
    return employees.find(currentEmployee =>
    employeeName === currentEmployee.firstName || employeeName === currentEmployee.lastName);
  }
  return { };
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const { id } = personalInfo;
  const { firstName } = personalInfo;
  const { lastName } = personalInfo;
  const { managers } = associatedWith;
  const { responsibleFor } = associatedWith;
  return {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
}

function isManager(id) {
  // seu código aqui
  const searchManagers = employees.reduce((acc, value) =>
  acc.concat(value.managers), []);
  return searchManagers.some((value => value === id));
}

function addEmployee(...employeeInfo) {
  // seu código aqui
  const [id, firstName, lastName, managers = [], responsibleFor = []] = employeeInfo;
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  employees.push(newEmployee);
}

function animalCount(species) {
  // seu código aqui
  const eachAnimal = animals.map(currentName => currentName.name);
  const quantities = animals.map(currentQuantity => currentQuantity.residents.length);
  const defaultObject = {};
  eachAnimal.forEach((value, index) => {
    defaultObject[`${value}`] = quantities[index];
  });
  if (species === undefined) { return defaultObject; }
  return defaultObject[species];
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

function animalMap(options) {
  // seu código aqui
  const returnLocation = () => {
    const typesOfLocation = [];
    animals.forEach((element) => {
      if (!typesOfLocation.includes(element.location)) {
        typesOfLocation.push(element.location);
      }
    });
    return typesOfLocation;
  };
  const searchAnimalsByLocation = (location) => {
    return animals
    .filter(animal => animal.location === location)
    .map(element => element.name);
  };
  const createDefaultObject = () => {
    const arrayOfLocation = returnLocation();
    return arrayOfLocation.reduce((defaultObject, location) => {
      defaultObject[location] = searchAnimalsByLocation(location);
      return defaultObject;
    }, {});
  };
  const searchAnimalsNames = (animal) => {
    return animals
    .reduce((objectAnimalName, element) => {
      if (element.name === animal) {
        objectAnimalName[animal] = element.residents.map(resident => resident.name);
      }
      return objectAnimalName;
    }, {});
  };
  const includeNames = () => {
    const arrayOfLocation = returnLocation();
    const objectWithNames = arrayOfLocation.reduce((objectWithNames, location) => {
      const arrayWithNames = searchAnimalsByLocation(location).map(searchAnimalsNames);
      objectWithNames[location] = arrayWithNames;
      return objectWithNames;
    }, {});
    return objectWithNames;
  };
  const sortNames = () => {
    const objectWithNames = includeNames();
    Object.keys(objectWithNames).forEach((location) => {
      objectWithNames[location].forEach((especie) => {
        especie[Object.keys(especie)[0]].sort();
      });
    });
    return objectWithNames;
  };
  if (!options) {
    return createDefaultObject();
  }
  else if (options.sorted === true) { 
    return sortNames();
  }
  else if (options.includeNames === true) {
    return includeNames();
  }
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
