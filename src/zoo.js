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

function animalsByIds(...params) {
  return params.map(id => animals.find(item => item.id === id));
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
  return { ...personalInfo, ...associatedWith };
} // concluido

function isManager(id) {
  let result = false;
  employees.forEach((employee) => {
    const idIsManager = employee.managers.some(managerId => managerId === id);
    if (idIsManager) {
      result = true;
    }
  });
  return result;
} // concluido

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
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const reducer = (accumulator, currentValue) => {
    let result;
    Object.keys(prices).forEach((price) => {
      if (price === currentValue) {
        result = prices[price] * entrants[currentValue];
      }
    });
    return accumulator + result;
  };
  return Object.keys(entrants).reduce(reducer, 0);
}

const filtersSpeciesOfAnimals = (location) => {
  const speciesOfAnimals = animals.filter(animal => animal.location === location);
  return speciesOfAnimals;
};

const sarchAnimalSpecies = (location) => {
  const animalsSpecies = animals.filter(animal => animal.location === location)
    .map(animal => animal.name);
  return animalsSpecies;
};

const filterAnimalsBySex = (array, sex) => array.filter(animal => animal.sex === sex)
                                                .map(item => item.name);

const getAnimalsBySpecies = (animalsPerLocation, { sex, sorted }) => {
  const animalsObj = {};
  Object.keys(animalsPerLocation).forEach((location) => {
    const speciesNames = animalsPerLocation[location].map((species) => {
      let animalsNames;
      if (sex) {
        animalsNames = filterAnimalsBySex(species.residents, sex);
      } else {
        animalsNames = species.residents.filter(animal => animal.name)
                                        .map(item => item.name);
      }
      if (sorted) {
        return { [species.name]: animalsNames.sort() };
      }
      return { [species.name]: animalsNames };
    });
    animalsObj[location] = speciesNames;
  });
  return animalsObj;
};

function animalMap(options) {
  const locations = ['NE', 'NW', 'SE', 'SW'];
  const animalPerLocation = {};
  if (!options) {
    locations.forEach((location) => {
      animalPerLocation[location] = sarchAnimalSpecies(location);
    });
    return animalPerLocation;
  }
  if (options.includeNames === true) {
    locations.forEach((location) => {
      animalPerLocation[location] = filtersSpeciesOfAnimals(location);
    });
    return getAnimalsBySpecies(animalPerLocation, options);
  }
  locations.forEach((location) => {
    animalPerLocation[location] = sarchAnimalSpecies(location);
  });
  return animalPerLocation;
}

const createBusinessHoursMessage = (day, operation) => {
  if (day === 'Monday') {
    return 'CLOSED';
  }
  return `Open from ${operation.open}am until ${operation.close - 12}pm`;
};

function schedule(dayName) {
  const businessHours = {};

  if (!dayName) {
    Object.keys(hours).forEach((day) => {
      businessHours[day] = createBusinessHoursMessage(day, hours[day]);
    });
    return businessHours;
  }
  businessHours[dayName] = createBusinessHoursMessage(dayName, hours[dayName]);
  return businessHours;
} // concluido

function oldestFromFirstSpecies(id) {
  let species;
  employees.forEach((employee) => {
    if (employee.id === id) {
      species = employee.responsibleFor[0];
    }
  });
  const animalFound = animals.find(animal => animal.id === species);
  const { residents } = animalFound;
  let olderAnimal = residents[0];
  residents.forEach((animal) => {
    if (animal.age > olderAnimal.age) {
      olderAnimal = animal;
    }
  });
  return Object.values(olderAnimal);
} // concluido

function increasePrices(percentage) {
  Object.keys(prices).forEach((item) => {
    const result = Math.ceil(prices[item] * (percentage + 100)) / 100;
    prices[item] = result;
  });
} // concluido

const mapSpecies = speciesId => animals.find(animal => animal.id === speciesId).name;

function employeeCoverage(idOrName) {
  const queryAll = {};
  const querySingle = {};
  employees.forEach((employee) => {
    const { id, firstName, lastName, responsibleFor } = employee;
    const speciesArray = responsibleFor.map(mapSpecies);
    if (idOrName === id || idOrName === firstName || idOrName === lastName) {
      querySingle[`${firstName} ${lastName}`] = speciesArray;
    } else {
      queryAll[`${firstName} ${lastName}`] = speciesArray;
    }
  });
  return !idOrName ? queryAll : querySingle;
} // concluido

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
