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

const sarchAnimalPerLocation = (location) => {
  return animals.filter(animal => animal.location === location)
    .map(animal => animal.name);
};

const filterAnimalsByLocation = () => {
  const locations = ['NE', 'NW', 'SE', 'SW'];
  const animalPerLocation = {};
  locations.forEach((location) => {
    animalPerLocation[location] = sarchAnimalPerLocation(location);
  });
  return animalPerLocation;
};

const getAnimalsPerSpecies = (residents, options) => {
  const speciesNames = residents.map(species => species.name);
  if (options.sorted === true) {
    return speciesNames.sort();
  }
  return speciesNames;
}

const filterAnimalsByLocationWithName = (animalLocations, options) => {
  const animalPerLocation = {};
  
  Object.keys(animalLocations).forEach((location) => {
    animalPerLocation[location] = animalLocations[location].map((species) => {
      const animalPerSpecie = {};
      animals.forEach((animal) => {
        if(animal.name === species) {
          animalPerSpecie[species] = getAnimalsPerSpecies(animal.residents, options);
        }
      });
      return animalPerSpecie;
    });
  });
  console.log(animalPerLocation);
  return animalPerLocation
};

function animalMap(options) {
  const animalPerLocation = filterAnimalsByLocation();
  //console.log(animalPerLocation);
  if (!options) {
    return animalPerLocation;
  }
  if (options.includeNames === true) {
    const animalsByLocationWithName =filterAnimalsByLocationWithName(animalPerLocation, options);
    /* if (options.sorted) {
      sortsAnimalNames(animalsByLocationWithName);
    } */
    return animalsByLocationWithName;

  }

  //console.log(animalLocations);
  /* const searchResultByLocation = filterAnimalsByLocation();
  console.log(searchResultByLocation);
  const animalLocations = {}; */
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
