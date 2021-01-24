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

function animalsByIds(...ids) {
  // seu código aqui
  return ids.reduce((species, currentValue) => {
    species.push(data.animals.find(animal => animal.id === currentValue));
    return species;
  }, []);
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  let result;
  data.animals.forEach((specie) => {
    if (specie.name === animal) {
      result = specie.residents.every(resident => resident.age >= age);
    }
  });
  return result;
}

function employeeByName(employeeName) {
  // seu código aqui
  let result;
  if (employeeName === undefined) {
    result = {};
  } else {
    result = data.employees.find(
      employee => employee.firstName === employeeName || employee.lastName === employeeName);
  }
  return result;
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const employee = {
    id: personalInfo.id,
    firstName: personalInfo.firstName,
    lastName: personalInfo.lastName,
    managers: associatedWith.managers,
    responsibleFor: associatedWith.responsibleFor,
  };
  return employee;
}

function isManager(id) {
  // seu código aqui
  let resultTemp;
  let resultManager = false;
  data.employees.forEach((employee) => {
    resultTemp = employee.managers.some(manager => manager === id);
    if (resultTemp === true) {
      resultManager = true;
    }
  });
  return resultManager;
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function animalCount(species) {
  // seu código aqui
  let result;
  if (species === undefined) {
    result = data.animals.reduce((objSpecies, currentSpecie) => {
      objSpecies[currentSpecie.name] = currentSpecie.residents.length;
      return objSpecies;
    }, {});
  } else {
    data.animals.forEach((specie) => {
      if (species === specie.name) {
        result = specie.residents.length;
      }
    });
  }
  return result;
}

function entryCalculator(entrants) {
  // seu código
  let result;
  const objPrices = data.prices;
  if (entrants === undefined || entrants === {}) {
    result = 0;
  } else {
    const { Child = 0, Adult = 0, Senior = 0 } = entrants;
    result = (Child * objPrices.Child) + (Adult * objPrices.Adult) + (Senior * objPrices.Senior);
  }
  return result;
}

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  // seu código aqui
  const objHours = data.hours;
  const keys = Object.keys(objHours);
  let result = keys.reduce((objResult, currentValue) => {
    if (objHours[currentValue].open === 0 && objHours[currentValue].close === 0) {
      objResult[currentValue] = 'CLOSED';
    } else {
      objResult[currentValue] = `Open from ${objHours[currentValue].open}am until ${objHours[currentValue].close - 12}pm`;
    }
    return objResult;
  }, {});
  if (dayName !== undefined) {
    keys.forEach((key) => {
      if (key === dayName) {
        result = { [key]: result[key] };
      }
    });
  }
  return result;
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
  const employee = data.employees.find(value => value.id === id);
  const specie = data.animals.find(value => value.id === employee.responsibleFor[0]);
  const animalResult = specie.residents.reduce((oldAnimal, currentValue) => {
    if (currentValue.age >= oldAnimal.age) {
      return currentValue;
    }
  });
  return Object.values(animalResult);
}

function increasePrices(percentage) {
  // seu código aqui
  Object.keys(data.prices).forEach((key) => {
    data.prices[key] = Number((data.prices[key] + (data.prices[key] * (percentage/100)) + 0.001).toFixed(2));
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
