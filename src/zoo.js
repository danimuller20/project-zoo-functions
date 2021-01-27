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
      animalsAndQuantity[animal] = quantity[index];
      return animalsAndQuantity;
    });
    return animalsAndQuantity;
  }
  const spicieRequested = animals.find(animal => animal.name === species);
  return spicieRequested.residents.length;
}
function isEmptyObject(obj) {
  return JSON.stringify(obj) === '{}';
}

function entryCalculator(entrants) {
  // seu código aqui
  if (entrants === undefined || isEmptyObject(entrants)) { return 0; }
  const keysOfObject = Object.keys(entrants);
  const prices = [];
  keysOfObject.forEach((key) => {
    if (key === 'Adult') {
      const priceAdult = entrants.Adult * 49.99;
      prices.push(priceAdult);
    }
    if (key === 'Child') {
      const priceChild = entrants.Child * 20.99;
      prices.push(priceChild);
    }
    if (key === 'Senior') {
      const priceSenior = entrants.Senior * 24.99;
      prices.push(priceSenior);
    }
    return 0;
  });
  const totalPrice = prices.reduce((previous, current) => previous + current);
  return totalPrice;
}

// function animalMap(options) {
//   // seu código aqui
// }

function schedule(dayName) {
  // seu código aqui
  const scheduleObj = {};
  const allDays = data.hours;
  if (dayName === undefined) {
    const readableSchedule = {};
    const hours = Object.keys(data.hours);
    hours.forEach((hour) => {
      readableSchedule[hour] = `Open from ${allDays[hour].open}am until ${(allDays[hour].close) - 12}pm`;
      if (allDays[hour].open === 0) {
        const closed = 'CLOSED';
        readableSchedule[hour] = closed;
      }
    });
    return readableSchedule;
  }
  if (allDays[dayName].open === 0) {
    const closed = 'CLOSED';
    const mondaySchedule = {};
    mondaySchedule[dayName] = closed;
    return mondaySchedule;
  }
  scheduleObj[dayName] = `Open from ${allDays[dayName].open}am until ${(allDays[dayName].close) - 12}pm`;

  return scheduleObj;
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
  const employeeThatIsResponsible = employees.find(employee => employee.id === id);
  const idManagedAnimal = employeeThatIsResponsible.responsibleFor[0];
  const managedAnimal = animals.find(animal => animal.id === idManagedAnimal);
  // ordena em ordem do maior para o menor
  managedAnimal.residents.sort((a, b) => b.age - a.age);
  const valuesOfOldestAnimal = Object.values(managedAnimal.residents[0]);
  return valuesOfOldestAnimal;
}
function roundToTwo(num) {    
  return Math.round((num + Number.EPSILON) * 100) / 100;
}
function increasePrices(percentage) {
  // seu código aqui
  const increase = (percentage/100) + 1;
  for (const key in data.prices) {
    data.prices[key] *= increase;
    data.prices[key] = roundToTwo(data.prices[key]);
  }
  return 0;
}


// function employeeCoverage(idOrName) {
//   // seu código aqui
// }

module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  // animalMap,
  animalsByIds,
  employeeByName,
  // employeeCoverage,
  addEmployee,
  isManager,
  animalsOlderThan,
  oldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
