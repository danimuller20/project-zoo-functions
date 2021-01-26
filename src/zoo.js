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

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  data.employees.push(createEmployee({ id, firstName, lastName }, { managers, responsibleFor }));
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

function regionAndSpecies() {
  const result = data.animals.reduce((objResult, currentValue) => {
    objResult[`${currentValue.location}`] = [];
    return objResult;
  }, {});
  data.animals.map((value) => result[`${value.location}`].push(value.name));
  return result;
}

function includeName() {
  const result = data.animals.reduce((objResult, currentValue) => {
    objResult[`${currentValue.location}`] = [];
    return objResult;
  }, {});
  data.animals.map((value) => {
    const objNames = { [`${value.name}`]: [] };
    value.residents.forEach((animal) => {
      objNames[`${value.name}`].push(`${animal.name}`);
    });
    result[`${value.location}`].push(objNames);
  });
  return result;
}

function sortNames() {
  const result = data.animals.reduce((objResult, currentValue) => {
    objResult[`${currentValue.location}`] = [];
    return objResult;
  }, {});
  data.animals.map((value) => {
    const objNames = { [`${value.name}`]: [] };
    value.residents.forEach((animal) => {
      objNames[`${value.name}`].push(`${animal.name}`);
    });
    objNames[`${value.name}`].sort();
    result[`${value.location}`].push(objNames);
  });
  return result;
}

function sexNames(sex) {
  const result = data.animals.reduce((objResult, currentValue) => {
    objResult[`${currentValue.location}`] = [];
    return objResult;
  }, {});
  data.animals.map((value) => {
    const objNames = { [`${value.name}`]: [] };
    value.residents.forEach((animal) => {
      if ( animal.sex === sex) {
        objNames[`${value.name}`].push(`${animal.name}`);
      }
    });
    result[`${value.location}`].push(objNames);
  });
  return result;
}

function sexAndSort(sex) {
  const result = data.animals.reduce((objResult, currentValue) => {
    objResult[`${currentValue.location}`] = [];
    return objResult;
  }, {});
  data.animals.map((value) => {
    const objNames = { [`${value.name}`]: [] };
    value.residents.forEach((animal) => {
      if ( animal.sex === sex) {
        objNames[`${value.name}`].push(`${animal.name}`);
      }
    });
    objNames[`${value.name}`].sort();
    result[`${value.location}`].push(objNames);
  });
  return result;
}

function animalMap(options) {
  // seu código aqui
  let result;
  if (options === undefined) {
    result = regionAndSpecies();
  } else if (options.includeNames && options.sorted && options.sex !== undefined) {
    result = sexAndSort(options.sex);
  } else if (options.includeNames && options.sorted) {
    result = sortNames();
  } else if (options.includeNames && options.sex !== undefined) {
    result = sexNames(options.sex);
  } else if (options.includeNames) {
    result = includeName();
  } else {
    result = regionAndSpecies();
  }
  return result;
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
    let result;
    if (currentValue.age >= oldAnimal.age) {
      result = currentValue;
    } else {
      result = oldAnimal;
    }
    return result;
  });
  return Object.values(animalResult);
}

function increasePrices(percentage) {
  // seu código aqui
  Object.keys(data.prices).forEach((key) => {
    const price = (data.prices[key] + (data.prices[key] * (percentage / 100)) + 0.001);
    data.prices[key] = Number(price.toFixed(2));
  });
}

function employeeCoverage(idOrName) {
  // seu código aqui
  let result = data.employees.reduce((objResult, currentEmployee) => {
    objResult[`${currentEmployee.firstName} ${currentEmployee.lastName}`] = [];
    currentEmployee.responsibleFor.forEach((idSpecie) => {
      data.animals.forEach((animal) => {
        if (animal.id === idSpecie) {
          objResult[`${currentEmployee.firstName} ${currentEmployee.lastName}`].push(animal.name);
        }
      });
    });
    return objResult;
  }, {});
  if (idOrName !== undefined) {
    const employee = data.employees.find(value => value.firstName === idOrName ||
      value.lastName === idOrName || value.id === idOrName);
    result = {
      [`${employee.firstName} ${employee.lastName}`]: result[`${employee.firstName} ${employee.lastName}`],
    };
  }
  return result;
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
