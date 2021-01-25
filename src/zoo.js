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
  return ids.map(identifier => animals.find(animal => animal.id === identifier));
}

function animalsOlderThan(animalName, minAge) {
  const result = animals.find(animal => animal.name === animalName);
  return result.residents.every(resident => resident.age > minAge);
}

function employeeByName(employeeName) {
  return (employeeName)
  ? employees.find(employee => employee.firstName === employeeName
    || employee.lastName === employeeName)
  : {};
}

function createEmployee(personalInfo, associatedWith) {
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

function isManager(id) {
  return employees.some(employee => employee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  return (species) ? animals.find(animal => species === animal.name).residents.length
  : animals.reduce((acc, current) => {
    acc[current.name] = current.residents.length;
    return acc;
  }, { });
}

function entryCalculator(entrants) {
  const { Adult, Senior, Child } = prices;
  if (entrants === undefined) {
    return 0;
  }
  const { Adult: adultCount = 0, Senior: seniorCount = 0, Child: childCount = 0 } = entrants;
  return (adultCount * Adult) + (seniorCount * Senior) + (childCount * Child);
}

function changeList(animal, sex) {
  function checkSex(animalName) {
    return sex ? animalName.sex === sex : true;
  }
  return animal.residents.filter(checkSex)
  .reduce((accumulator, value) => {
    accumulator.push(value.name);
    return accumulator;
  }, []);
}

const withParameter = (options) => {
  const { sex, sorted } = options;
  const animalsLocation = animals.reduce((acc, valueOne) => {
    acc[valueOne.location] = animals
    .filter(animal => valueOne.location.includes(animal.location)).map((animal) => {
      const result = {};
      result[animal.name] = changeList(animal, sex);
      if (sorted) {
        result[animal.name].sort();
      }
      return result;
    });
    return acc;
  }, {});
  return animalsLocation;
};

const withoutParameter = () => {
  const animalList = location => animals.filter(animal => location.includes(animal.location))
  .map(animal => animal.name);
  return animals.reduce((acc, value) => {
    acc[value.location] = animalList(value.location);
    return acc;
  }, {});
};

function animalMap(options) {
  if (options) {
    if (options.includeNames) {
      return withParameter(options);
    }
  }
  return withoutParameter();
}

function schedule(dayName) {
  const result = {
    Tuesday: `Open from ${hours.Tuesday.open}am until 6pm`,
    Wednesday: `Open from ${hours.Wednesday.open}am until 6pm`,
    Thursday: `Open from ${hours.Thursday.open}am until 8pm`,
    Friday: `Open from ${hours.Friday.open}am until 8pm`,
    Saturday: `Open from ${hours.Saturday.open}am until 10pm`,
    Sunday: `Open from ${hours.Sunday.open}am until 8pm`,
    Monday: 'CLOSED',
  };
  if (dayName === undefined) {
    return result;
  }
  const sameDay = Object.entries(result).find(day => day.includes(dayName));
  const result2 = {};
  result2[sameDay[0]] = sameDay[1];
  return result2;
}

function oldestFromFirstSpecies(identifier) {
  const funcionario = employees.find(employee => employee.id.includes(identifier));
  const species = animals.find(animal => funcionario.responsibleFor[0].includes(animal.id));
  const oldest = species.residents.sort((a, b) => b.age - a.age)[0];
  return [oldest.name, oldest.sex, oldest.age];
}

function increasePrices(percentage) {
  percentage /= 100;
  const roundNumber = number => Math.round((number + Number.EPSILON) * 100) / 100;
  prices.Adult = roundNumber(prices.Adult + (prices.Adult * percentage));
  prices.Senior = roundNumber(prices.Senior + (prices.Senior * percentage));
  prices.Child = roundNumber(prices.Child + (prices.Child * percentage));
}

function employeeCoverage(idOrName) {
  const result = {};
  const animalResponsibleFor = employee => employee.responsibleFor
  .map(identifier => animals.find(animal => animal.id === identifier).name);

  if (idOrName === undefined) {
    employees.forEach((employee) => {
      result[`${employee.firstName} ${employee.lastName}`] = animalResponsibleFor(employee);
    });
    return result;
  }

  const employeeName = employees.find(employee => employee.id === idOrName
    || employee.firstName === idOrName || employee.lastName === idOrName);
  result[`${employeeName.firstName} ${employeeName.lastName}`] = animalResponsibleFor(employeeName);
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
