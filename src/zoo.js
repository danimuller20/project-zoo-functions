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

// Utilizando Object destructuring para mexer no data. Lembrar que é tudo array.
const { animals, employees, hours, prices } = data;

function animalsByIds(...ids) {
  const animalList = [];

  ids.forEach((item) => {
    const mySpecies = animals
      .find(species => species.id === item);
    animalList.push(mySpecies);
  });

  return animalList;
}

function animalsOlderThan(animal, age) {
  return animals
    .find(species => species.name === animal).residents
    .every(individual => individual.age >= age);
}

function employeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  return employees
    .find(employee => employee.firstName === employeeName
      || employee.lastName === employeeName
      || employee.id === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees
    .some(employee => employee.managers
    .includes(id));
}

function addEmployee(id = '', firstName = '', lastName = '', managers = [], responsibleFor = []) {
  employees.push({
    id, firstName, lastName, managers, responsibleFor,
  });
}

function animalCount(species) {
  if (species) {
    return animals.find(mySpecies => mySpecies.name === species).residents.length;
  }
  const answer = {};
  animals.forEach(animal => (answer[animal.name] = animal
    .residents
    .length));
  return answer;
}

function entryCalculator(...entrants) {
  if (entrants.length === 0) {
    return 0;
  }
  let income = 0;
  const myKeys = Object.keys(entrants[0]);
  const myValues = Object.values(entrants[0]);
  myKeys.forEach((key, index) => {
    income += prices[key] * myValues[index];
  });


  return income;
}

const animalsByLocation = (location) => {
  const myAnimals = {};

  location.forEach((direction) => {
    const animalsHere = animals
    .filter(animal => animal.location === direction)
    .map(animal => animal.name);

    myAnimals[direction] = animalsHere;
  });

  return myAnimals;
};

function animalsByLocationWithParameters(location, sorted, sex) {
  const myAnimals = {};

  location.forEach((direction) => {
    const myAnimalList = animals
    .filter(mySpecies => mySpecies.location === direction)
    .map((specie) => {
      const specieName = specie.name;

      const animalNames = specie.residents
      .filter((resident) => {
        const filtered = sex !== undefined;
        return filtered ? resident.sex === sex : true;
      })
      .map(resident => resident.name);

      if (sorted) animalNames.sort();
      return { [specieName]: animalNames };
    });

    myAnimals[direction] = myAnimalList;
  });
  return myAnimals;
}

function animalMap(options) {
  const location = ['NE', 'NW', 'SE', 'SW'];
  if (!options) {
    return animalsByLocation(location);
  }

  const { includeNames, sex, sorted } = options;

  if (!includeNames) {
    return animalsByLocation(location);
  }

  return animalsByLocationWithParameters(location, sorted, sex);
}

function schedule(dayName) {
  if (!dayName) {
    // return weeklySchedule;
    const fullSchedule = {};
    Object.keys(hours).forEach((key) => {
      if (key === 'Monday') {
        fullSchedule[key] = 'CLOSED';
      } else {
        fullSchedule[key] = `Open from ${hours[key].open}am until ${hours[key].close - 12}pm`;
      }
    });
    return fullSchedule;
  } else if (dayName === 'Monday') {
    return { [dayName]: 'CLOSED' };
  }
  return {
    [dayName]: `Open from ${hours[dayName].open}am until ${hours[dayName].close - 12}pm`,
  };
}

function oldestFromFirstSpecies(id) {
  const myAnimals = animals
  .find(animal => animal.id === employees
    .find(employee => employee.id === id).responsibleFor[0]).residents
    .sort((a, b) => b.age - a.age);

  const oldest = Object.values(myAnimals[0]);
  return oldest;
}

function increasePrices(percentage) {
  const people = Object.keys(prices);
  const cost = Object.values(prices);

  people.forEach((person, index) => {
    cost[index] = Math.round((cost[index] * (1 + (percentage / 100))) * 100) / 100;
  });

  people.forEach((person, index) => {
    prices[person] = cost[index];
  });

  return prices;
}

const returnResponsibleFor = (...responsibleFor) => {
  const takenCare = responsibleFor[0]
    .reduce((acc, curr) => acc
    .concat(animalsByIds(curr)[0].name), []);
  return takenCare;
};

function employeeCoverage(idOrName) {
  if (!idOrName) {
    const myEmployeeCoverage = {};
    employees.forEach((employee) => {
      const fullName = `${employee.firstName} ${employee.lastName}`;
      const employeeAnimals = returnResponsibleFor(employee.responsibleFor);

      myEmployeeCoverage[fullName] = employeeAnimals;
    });
    return myEmployeeCoverage;
  }

  const myEmployee = employeeByName(idOrName);
  const fullName = `${myEmployee.firstName} ${myEmployee.lastName}`;
  const takenCare = returnResponsibleFor(myEmployee.responsibleFor);
  const employeeCare = {};
  employeeCare[fullName] = takenCare;
  return employeeCare;
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
