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

const { animals, employees, prices, hours } = data;

function animalsByIds(...ids) {
  return ids.map((id) => animals.find(({ id: animalId }) => animalId === id));
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  return (animals.find(element => element.name === animal).residents)
  .every(element => element.age >= age);
}

function employeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) { return {}; }
  return employees.find(({ firstName, lastName }) => firstName === employeeName ||
  lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  const managersArray = [];
  employees.forEach(elementArray => managersArray.push(elementArray.managers));
  return managersArray.some(element => element.includes(id));
}

// function isManager(id) {
//   // seu código aqui
//   const managersStatus = [];
//   employees.forEach(element => {
//     for (let manager of element.managers) {
//       managersStatus.push(manager);
//     }
//   });
//   return managersStatus.some(managerId => managerId === id);
// }

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  return employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  const animalsCount = {};
  animals.forEach(({ name, residents }) => (animalsCount[name] = residents.length));
  return species ? animalsCount[species] : animalsCount;
}

const sumIfNotUndefined = (adult, child, senior) => {
  const adultSum = adult ? adult * prices.Adult : 0;
  const childSum = child ? child * prices.Child : 0;
  const seniorSum = senior ? senior * prices.Senior : 0;
  const sum = adultSum + childSum + seniorSum;
  return sum;
};

function entryCalculator(entrants) {
  // seu código aqui
  if (!entrants || (typeof entrants === 'object' && Object.keys(entrants).length === 0)) {
    return 0;
  }
  const { Adult: adult, Child: child, Senior: senior } = entrants;
  return sumIfNotUndefined(adult, child, senior);
}

// Popula o array animalLocation (Usar caso chamada sem parâmetro)
const withOutParameters = (locations, animalLocation) => {
  locations.forEach(function (location) {
    const animalTemp = animals.filter(animal => animal.location === location);
    animalTemp.forEach(({ name }) => animalLocation[location].push(name));
    // animalTemp.forEach(animal => animalLocation[location].push(animal.name));
  });
};

function includeNamesTrue(locations, animalLocation, options) {
  locations.forEach(function (location) {
    const animalTemp = animals.filter(animal => (animal.location === location));
    animalTemp.forEach(function (animal) {
      const animalArrayTemp = {};
      const animalsResidentTemp = [];
      animal.residents.forEach(function (resident) {
        if ((options.sex) && (resident.sex === options.sex)) {
          animalsResidentTemp.push(resident.name);
        } else if (!options.sex) {
          animalsResidentTemp.push(resident.name);
        }
      });
      if (options.sorted) {
        animalArrayTemp[animal.name] = animalsResidentTemp.sort();
      } else {
        animalArrayTemp[animal.name] = animalsResidentTemp;
      }
      animalLocation[location].push(animalArrayTemp);
    });
  });
}

function animalMap(options) {
  // seu código aqui
  const locations = [];
  const animalLocation = {};
  animals.forEach(function (animal) {
    if (!locations.includes(animal.location)) {
      locations.push(animal.location);
      animalLocation[animal.location] = [];
    }
  });

  if (!options || !options.includeNames) {
    withOutParameters(locations, animalLocation);
  }
  if (options && options.includeNames) {
    includeNamesTrue(locations, animalLocation, options);
  }
  return animalLocation;
}

function ifNotMonday(daysOpen, key) {
  daysOpen[key] = (`Open from ${hours[key].open}am until ${hours[key].close - 12}pm`);
}

function schedule(dayName) {
  // seu código aqui
  const daysOpen = {};
  if (!dayName) {
    Object.keys(hours).forEach((key) => {
      if (key === 'Monday') {
        daysOpen[key] = ('CLOSED');
      } else {
        ifNotMonday(daysOpen, key);
      }
    });
    return daysOpen;
  }
  if (dayName && dayName !== 'Monday') {
    ifNotMonday(daysOpen, dayName);
  } else {
    daysOpen[dayName] = ('CLOSED');
  }
  return daysOpen;
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
  const person = employees.find(employee => employee.id === id);
  const firstSpecieId = person.responsibleFor[0];
  const specie = animals.find(animal => animal.id === firstSpecieId);
  const specieResidents = specie.residents;
  console.log(specieResidents);
  let olderAge = 0;
  const older = {};
  specieResidents.forEach((resident) => {
    if (resident.age > olderAge) {
      olderAge = resident.age;
      Object.assign(older, resident);
    }
  });
  return [older.name, older.sex, older.age];
}

function increasePrices(percentage) {
  // seu código aqui
  Object.keys(prices).forEach((price) => {
    prices[price] = Math.round((prices[price] * ((percentage / 100) + 1)) * 100) / 100;
  });
}

function filterResponsibleFor(employee) {
  const responsibleForTemp = [];
  employee.responsibleFor.forEach((idAnimal) => {
    const animalTemp = animals.find(animal => animal.id === idAnimal);
    responsibleForTemp.push(animalTemp.name);
  });
  return responsibleForTemp;
}

function employeesAndAnimals() {
  const employeeNamesAndAnimals = {};
  employees.forEach((employee) => {
    const responsibleForTemp = filterResponsibleFor(employee);
    const fulllName = `${employee.firstName} ${employee.lastName}`;
    employeeNamesAndAnimals[fulllName] = responsibleForTemp;
  });
  return employeeNamesAndAnimals;
}

function filterByIdfirstNameOrLastName(idName) {
  const person = employees.find(employee =>
    employee.id === idName ||
    employee.firstName === idName ||
    employee.lastName === idName);
  const responsibleForTemp = filterResponsibleFor(person);
  const personFind = {};
  const fullName = `${person.firstName} ${person.lastName}`;
  personFind[fullName] = responsibleForTemp;
  return personFind;
}

function employeeCoverage(idOrName) {
  // seu código aqui
  if (!idOrName) {
    return employeesAndAnimals();
  }
  return filterByIdfirstNameOrLastName(idOrName);
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
