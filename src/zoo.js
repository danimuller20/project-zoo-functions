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
  return animals.filter(({ id }, index) => id === ids[index]);
}

function animalsOlderThan(animal, age) {
  return animals
    .find(({ name }) => name === animal)
    .residents.every(({ age: animalAge }) => animalAge >= age);
}

function employeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }

  return employees.find(
    ({ firstName, lastName }) => firstName === employeeName || lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some(({ managers }) => managers.find(managerId => managerId === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const personalInfo = { id, firstName, lastName };
  const associatedWith = { managers, responsibleFor };
  const newEmployee = createEmployee(personalInfo, associatedWith);
  employees.push(newEmployee);
}

function animalCount(species) {
  if (!species) {
    return animals.reduce((animalCountList, { name, residents }) => {
      animalCountList[name] = residents.length;
      return animalCountList;
    }, {});
  }
  return animals.find(({ name }) => name === species).residents.length;
}

function entryCalculator(entrants) {
  if (!entrants) {
    return 0;
  }
  return Object.keys(entrants).reduce((accumulator, currentKey) => {
    accumulator += entrants[currentKey] * prices[currentKey];
    return accumulator;
  }, 0);
}

function createAnimalObject(name, sex, sorted, residents) {
  let residentsResult = residents;

  if (sex) {
    residentsResult = residents.filter(({ sex: residentGender }) => residentGender === sex);
  }

  const residentsNames = residentsResult.map(({ name: residentName }) => residentName);

  if (sorted) {
    residentsNames.sort();
  }

  const animalObjects = { [name]: residentsNames };

  return animalObjects;
}

function listAnimalsBySpecies(animalLocation, includeNames, sex, sorted) {
  return animals.reduce((namesArray, { name, location, residents }) => (
  location === animalLocation ? namesArray
  .concat(includeNames ? createAnimalObject(name, sex, sorted, residents) : name)
  : namesArray), []);
}

function listAnimalsByLocation(includeNames, sex, sorted) {
  return animals.reduce((AnimalsAndLocationslist, { location }) => {
    AnimalsAndLocationslist[location] = listAnimalsBySpecies(location, includeNames, sex, sorted);
    return AnimalsAndLocationslist;
  }, {});
}

function animalMap(options) {
  if (options) {
    const { includeNames, sex, sorted } = options;
    return listAnimalsByLocation(includeNames, sex, sorted);
  }
  return listAnimalsByLocation();
}

function schedule(dayName) {
  const days = Object.keys(hours);
  const scheduleList = { ...hours };
  days.forEach((day) => {
    scheduleList[day] = `Open from ${scheduleList[day].open}am until ${scheduleList[day].close - 12}pm`;
    if (day === 'Monday') { scheduleList[day] = 'CLOSED'; }
  });
  if (dayName) { return { [dayName]: scheduleList[dayName] }; }
  return scheduleList;
}

function oldestFromFirstSpecies(id) {
  const firstSpecieId = employees.find(({ id: employeeId }) => employeeId === id).responsibleFor[0];
  const oldestAnimal = Object.values(
    animals.find(({ id: specieId }) => specieId === firstSpecieId).residents
  .reduce((oldest, resident) => (oldest.age < resident.age ? resident : oldest)));
  return oldestAnimal;
}

function increasePrices(percentage) {
  const percentageValue = percentage / 100;
  const entrantAge = Object.keys(prices);
  entrantAge.forEach((key) => {
    const increase = prices[key] * percentageValue;
    prices[key] += increase;
    prices[key] = Math.round(prices[key] * 100) / 100;
  });
  return prices;
}

function employeeCoverage(idOrName) {
  const coverageList = employees.reduce(
    (employeeCoverageList, { firstName, lastName, responsibleFor }) => {
      employeeCoverageList[`${firstName} ${lastName}`] = responsibleFor.map(
        (animalId) => animals.find(({ id }) => id === animalId).name
      );
      return employeeCoverageList;
    },{});

  if (idOrName) {
    const employee = employeeByName(idOrName) || employees.find(({ id }) => id === idOrName);
    const { firstName, lastName } = employee;
    const employeeFullName = `${firstName} ${lastName}`;
    return { [employeeFullName]: coverageList[employeeFullName] };
  }

  return coverageList;
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
