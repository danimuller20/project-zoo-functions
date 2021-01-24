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
  let  result;
  const objHours = data.hours;
  const keys = Object.keys(objHours);
  const schedule = keys.reduce((objResult, currentValue) => {
    if (objHours[currentValue].open === 0 && objHours[currentValue].close === 0) {
      objResult[currentValue] = 'CLOSED';
    } else {
      objResult[currentValue] = `Open from ${objHours[currentValue].open}am until ${objHours[currentValue].close - 12}pm`;
    }
    return objResult;
  }, {});
  if (dayName === undefined) {
    result = schedule;
  } else {
    keys.forEach((key) => {
      if (key === dayName) {
        result = { [key]: schedule[key] };
      }
    })
  }
  return result;
}
console.log(schedule());

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
