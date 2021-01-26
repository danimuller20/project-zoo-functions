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

const { animals, employees, hours, prices } = data;

function animalsByIds(...ids) {
  return animals.filter(animal => ids.some(id => id === animal.id));
}

function animalsOlderThan(species, age) {
  return animals
    .find(animal => animal.name === species)
    .residents.every(resident => resident.age >= age);
}

function employeeByName(employeeName) {
  if (!employeeName) return {};
  return employees.find(
    employee => employee.firstName === employeeName || employee.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some(employee => employee.managers.some(manager => manager === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
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
  const animalsList = {};
  animals.forEach((animal) => { animalsList[animal.name] = animal.residents.length; });
  if (!species) {
    return animalsList;
  }
  return animalsList[species];
}

function entryCalculator(entrants) {
  let entryTotal = 0;
  if (entrants) {
    Object.keys(prices).forEach((age) => {
      if (entrants[age]) {
        entryTotal += prices[age] * entrants[age];
      }
    });
  }
  return entryTotal;
}

function getResidentsBySpecies(animal, sex = false) {
  return animal.residents.reduce((namesBySpeacies, animalName) => {
    if (sex) {
      if (animalName.sex === sex) {
        namesBySpeacies[animal.name].push(animalName.name);
      }
    } else {
      namesBySpeacies[animal.name].push(animalName.name);
    }
    return namesBySpeacies;
  }, { [animal.name]: [] });
}

function animalMap(options = {}) {
  return animals.reduce((myAnimalMap, animal) => {
    if (!myAnimalMap[animal.location]) {
      myAnimalMap[animal.location] = [];
    }
    if (options.includeNames) {
      const animalResidents = getResidentsBySpecies(animal, options.sex);
      if (options.sorted) animalResidents[animal.name].sort();
      myAnimalMap[animal.location].push(animalResidents);
    } else {
      myAnimalMap[animal.location].push(animal.name);
    }
    return myAnimalMap;
  }, {});
}

function getSchedule(day) {
  const { open, close } = hours[day];
  if (open === 0) {
    return 'CLOSED';
  }
  return `Open from ${open}am until ${close - 12}pm`;
}

function schedule(dayName) {
  if (!dayName) {
    return Object.keys(hours).reduce((result, day) => {
      result[day] = getSchedule(day);
      return result;
    }, {});
  }
  return { [dayName]: getSchedule(dayName) };
}

function oldestFromFirstSpecies(id) {
  const firstSpecies = employees.find(employee => employee.id === id).responsibleFor[0];
  return Object.values(
    animals
      .find(animal => animal.id === firstSpecies)
      .residents.reduce(function (oldest, resident) {
        return resident.age > oldest.age ? resident : oldest;
      }),
  );
}

function increasePrices(percentage) {
  Object.keys(prices).forEach((agePrice) => {
    prices[agePrice] =
      (Math.round(prices[agePrice] * percentage) + (prices[agePrice] * 100)) / 100;
  });
}

function employeeCoverage(idOrName) {
  if (!idOrName) {
    const coverageList = employees.reduce(
      (employeeList, { firstName, lastName, responsibleFor }) => {
        employeeList[`${firstName} ${lastName}`] = responsibleFor.map(
          animalId => animals.find(({ id }) => animalId === id).name,
        );
        return employeeList;
      },
      {},
    );
    return coverageList;
  }

  const { firstName, lastName, responsibleFor } = employees.find(
    employee =>
      employee.firstName === idOrName ||
      employee.lastName === idOrName ||
      employee.id === idOrName,
  );
  return {
    [`${firstName} ${lastName}`]: responsibleFor.map(
      animalId => animals.find(({ id }) => animalId === id).name,
    ),
  };
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
