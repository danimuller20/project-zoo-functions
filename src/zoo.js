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

const {
  animals,
  employees,
  hours,
  prices,
} = data;

function animalsByIds(...ids) {
  const animalsIds = [...ids];
  return animals.filter(animal => animalsIds.includes(animal.id));
}

function animalsOlderThan(animal, age) {
  const animalObject = animals.find(species => species.name === animal);
  return animalObject.residents.every(resident => resident.age > age);
}

function employeeByName(employeeName) {
  if (employeeName === undefined) return {};
  return employees.find(employee =>
    (employeeName === employee.firstName || employeeName === employee.lastName));
}

function createEmployee(personalInfo, associatedWith) {
  const {
    id,
    firstName,
    lastName,
  } = personalInfo;
  const {
    managers,
    responsibleFor,
  } = associatedWith;
  return {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
}

function isManager(id) {
  const managersIds = employees.map(employee => employee.managers);
  return managersIds.some(array => array.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push(createEmployee({
    id,
    firstName,
    lastName,
  }, {
    managers,
    responsibleFor,
  }));
}

function animalCount(species) {
  if (species !== undefined) {
    const {
      residents,
    } = animals.find(animal => animal.name === species);
    return residents.length;
  }
  return animals.reduce((acc, currentValue) => {
    acc[currentValue.name] = currentValue.residents.length;
    return acc;
  }, {});
}

function entryCalculator(entrants = {}) {
  const {
    Adult = 0, Child = 0, Senior = 0,
  } = entrants;
  return ((Adult * prices.Adult) + (Child * prices.Child) + (Senior * prices.Senior));
}

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  if (dayName === 'Monday') {
    const day = {};
    day[dayName] = 'CLOSED';
    return day;
  }
  if (dayName !== undefined) {
    const day = {};
    day[dayName] = `Open from ${hours[dayName].open}am until ${hours[dayName].close - 12}pm`;
    return day;
  }

  const scheduleEntries = Object.entries(hours);
  return scheduleEntries.reduce((acc, currentValue) => {
    if (currentValue[0] === 'Monday') {
      acc[currentValue[0]] = 'CLOSED';
    } else {
      acc[currentValue[0]] = `Open from ${currentValue[1].open}am until ${currentValue[1].close - 12}pm`;
    }
    return acc;
  }, {});
}

function oldestFromFirstSpecies(id) {
  const employee = employees.find(element => element.id === id);
  const fisrtAnimalsResponsibleFor = animals.find(animal =>
    (employee.responsibleFor[0] === animal.id)).residents;
  const oldestAnimal = fisrtAnimalsResponsibleFor.reduce((oldest, currentAnimal) => {
    if (oldest.age < currentAnimal.age) {
      oldest = currentAnimal;
    }
    return oldest;
  });

  return Object.values(oldestAnimal);
}

function increasePrices(percentage) {
  // seu código aqui
}

const getAnimalResponsibleForNames = (employee) => {
  const animalNames = employee.responsibleFor.map(animalId =>
    animals.find(animal => animal.id === animalId).name);
  return animalNames;
};
const getFullListOfEmployeesResponsibles = () => {
  const fullList = employees.reduce((acc, currentEmployee) => {
    {
      const fullName = `${currentEmployee.firstName} ${currentEmployee.lastName}`;
      const animalsNames = getAnimalResponsibleForNames(currentEmployee);
      acc[fullName] = animalsNames;
      return acc;
    }
  }, {});
  return fullList;
};

function employeeCoverage(idOrName) {
  if (idOrName === undefined) {
    return getFullListOfEmployeesResponsibles();
  }
  const employee = employees.find(element => idOrName === element.id ||
    idOrName === element.firstName || idOrName === element.lastName);

  const animalsNames = getAnimalResponsibleForNames(employee);

  const employeeFullName = `${employee.firstName} ${employee.lastName}`;

  const objectToReturn = {};
  objectToReturn[employeeFullName] = animalsNames;
  return objectToReturn;
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
