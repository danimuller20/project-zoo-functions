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
  return data.animals.filter(element =>
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
  return animals
  .reduce((residents, animal) => {
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
  const arrayAnimalBySex =
  animals.reduce((arrayAnimalBySexConstruction, element) => {
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
  if (!dayName) {
    return Object.keys(hours).reduce((defaultObject, current) => {
      if (hours[current].open === 0) {
        defaultObject[current] = 'CLOSED';
      } else {
        defaultObject[current] = `Open from ${hours[current].open}am until ${hours[current].close - 12}pm`;
      }
      return defaultObject;
    }, {});
  }
  const daySchedule = {};
  daySchedule[dayName] = `Open from ${hours[dayName].open}am until ${hours[dayName].close - 12}pm`;
  return (dayName === 'Monday' ? { Monday: 'CLOSED' } : daySchedule);
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
  const findFirstSpecies = (employeeId) => {
    const findEmployee = employees
    .find(employee => employee.id === employeeId);
    return findEmployee.responsibleFor[0];
  };
  const findOldest = (animalId) => {
    const findAnimal = animals
    .find(animal => animal.id === animalId);
    return findAnimal.residents.reduce((oldest, current) => {
      if (current.age > oldest.age) { oldest = current; }
      return oldest;
    });
  };

  return Object.values(findOldest(findFirstSpecies(id)));
}

function increasePrices(percentage) {
  // seu código aqui
  Object.keys(prices).forEach((ageRange) => {
    prices[ageRange] = (Math.round(prices[ageRange] * percentage) + (prices[ageRange] * 100)) / 100;
  });
}

function searchEmployee(employeeInfo) {
  if (employeeInfo.length === 36) {
    const searchEmployeeByID = employees
    .find(currentEmployee => currentEmployee.id === employeeInfo);
    return searchEmployeeByID;
  }
  const searchEmployeeByName = employees.find(currentEmployee =>
      employeeInfo === currentEmployee.firstName || employeeInfo === currentEmployee.lastName);
  return searchEmployeeByName;
}

function searchEmployeeResponsabilities(employeeElement) {
  return employeeElement.responsibleFor.map((animalId) => {
    const animalName = animals.find(currentAnimal => currentAnimal.id === animalId);
    return animalName.name;
  });
}

function employeeCoverage(idOrName) {
  // seu código aqui
  const employeeFullName = (employeeInfo) => {
    const employeeElement = searchEmployee(employeeInfo);
    return `${employeeElement.firstName} ${employeeElement.lastName}`;
  };
  if (!idOrName) {
    const defaultObject = employees.reduce((object, currentEmployee) => {
      object[employeeFullName(currentEmployee.firstName)] =
      searchEmployeeResponsabilities(searchEmployee(currentEmployee.firstName));
      return object;
    }, {});
    return defaultObject;
  }
  const returnObject = {};
  returnObject[employeeFullName(idOrName)] =
  searchEmployeeResponsabilities(searchEmployee(idOrName));
  return returnObject;
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
