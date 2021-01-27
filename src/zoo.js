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
  return animals.filter(animal => ids.find(id => id === animal.id));
}

function animalsOlderThan(animal, age) {
  return animals.some(({ name, residents }) =>
    name === animal && residents.every(({ age: animalAge }) => animalAge >= age));
}

function employeeByName(employeeName) {
  if (employeeName === undefined) return {};
  return employees.find(({ firstName, lastName }) =>
    employeeName === firstName || employeeName === lastName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some(({ managers }) => managers.find(managerId => managerId === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  if (species === undefined) {
    return animals.reduce(((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      return acc;
    }), {});
  }
  const animal = animals.find(({ name }) => name === species);
  return animal.residents.length;
}

function entryCalculator(entrants) {
  if ((entrants === undefined) || (Object.keys(entrants).length === 0)) {
    return 0;
  }
  const entrantsArray = Object.entries(entrants);
  let entryPrice = 0;
  entrantsArray.forEach((element) => {
    if (element[0] === 'Adult') {
      entryPrice += prices.Adult * element[1];
    } else if (element[0] === 'Child') {
      entryPrice += prices.Child * element[1];
    } else if (element[0] === 'Senior') {
      entryPrice += prices.Senior * element[1];
    }
  });
  return entryPrice;
}

const getZooLocation = (acc, curr) => {
  acc[curr.location] = animals.filter(({ location }) =>
    location === curr.location).map(({ name }) => name);
  return acc;
};

const getZooAnimals = (zooLocations, zooMap) => {
  zooLocations.forEach((key) => {
    zooMap[key].forEach((animal, index) => {
      zooMap[key][index] = {
        [animal]: animals.find(({ name }) =>
        name === animal).residents.map(({ name }) => name),
      };
    });
  });
  return zooMap;
};

const getZooAnimalsSex = (zooLocations, zooMap, options) => {
  zooLocations.forEach((key) => {
    zooMap[key].forEach((animal, index) => {
      zooMap[key][index] = {
        [animal]: animals.find(({ name }) =>
        name === animal).residents.filter(({ sex }) =>
        sex === options.sex).map(({ name }) => name),
      };
    });
  });
  return zooMap;
};

function animalMap(options) {
  let zooMap = animals.reduce(getZooLocation, {});
  const zooLocations = Object.keys(zooMap);
  if (options === undefined) return zooMap;
  if ((options.includeNames) && (options.sex === undefined)) {
    zooMap = getZooAnimals(zooLocations, zooMap);
  }
  if ((options.includeNames) && (options.sex)) {
    zooMap = getZooAnimalsSex(zooLocations, zooMap, options);
  }
  if ((options.includeNames) && (options.sorted)) {
    zooLocations.forEach((key) => {
      zooMap[key].forEach((animal) => {
        Object.keys(animal).forEach((key2) => { animal[key2].sort(); });
      });
    });
  }
  return zooMap;
}

function schedule(dayName) {
  if (dayName === undefined) {
    return Object.keys(hours).reduce((acc, curr) => {
      if (curr === 'Monday') acc[curr] = 'CLOSED';
      else acc[curr] = `Open from ${hours[curr].open}am until ${(hours[curr].close) - 12}pm`;
      return acc;
    }, {});
  }
  if (dayName === 'Monday') {
    return { [dayName]: 'CLOSED' };
  }
  return { [dayName]: `Open from ${hours[dayName].open}am until ${(hours[dayName].close) - 12}pm` };
}

function oldestFromFirstSpecies(id) {
  const responsibleFor = employees.find(employee => employee.id === id).responsibleFor;
  let oldestAnimal = animals.find(animal => responsibleFor[0] === animal.id)
  .residents.reduce((acc, curr) => {
    if (acc.age < curr.age) return curr;
    return acc;
  });
  oldestAnimal = [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
  return oldestAnimal;
}

function increasePrices(percentage) {
  percentage = percentage / 100;
  const pricesKeys = Object.keys(prices);
  pricesKeys.forEach(key => {
    prices[key] = parseFloat((prices[key] + (prices[key] * percentage) + 0.001).toFixed(2));
  });
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
