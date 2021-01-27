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
  return data.animals.filter((animal, index) => animal.id === ids[index]);
}

function animalsOlderThan(animal, age) {
  return data.animals.find(obj => obj.name === animal).residents.every(rsd => rsd.age >= age);
}

function employeeByName(employeeName) {
  if (employeeName === undefined) { return {}; }
  return data.employees.find(employee =>
    employee.firstName === employeeName || employee.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return Object.assign(personalInfo, associatedWith);
}

function isManager(id) {
  const Managers = [];
  data.employees.map(employee => Managers.push(...employee.managers));
  return Managers.some(value => value === id);
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers: [],
    responsibleFor: [],
  };
  if (managers !== undefined) { newEmployee.managers = managers; }
  if (responsibleFor !== undefined) { newEmployee.responsibleFor = responsibleFor; }
  data.employees.push(newEmployee);
}

function animalCount(species) {
  if (!species) {
    const countList = {};
    data.animals.forEach((animal) => { countList[animal.name] = animal.residents.length; });
    return countList;
  }
  return data.animals.find(animal => animal.name === species).residents.length;
}

function entryCalculator(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  let valueToPay = 0;
  Object.keys(entrants).forEach((actualKey) => {
    valueToPay += data.prices[actualKey] * entrants[actualKey];
  });
  return valueToPay;
}

function requireLocation() {
  return ['NW', 'NE', 'SW', 'SE'];
}

function animalsByLocation(locations) {
  const objOfAnimals = { };
  locations.forEach((location) => {
    const animalsFiltered = data.animals
      .filter(animal => animal.location === location)
      .map(animal => animal.name);
    objOfAnimals[location] = animalsFiltered;
  });
  return objOfAnimals;
}

function animalsByLocationWithname(locations, sorted, sex) {
  const objOfAnimals = { };
  locations.forEach((location) => {
    const animalsFiltered = data.animals
      .filter(animal => animal.location === location)
      .map((animal) => {
        let nameKey;
        let keyValue;
        if (sex) {
          nameKey = animal.name;
          keyValue = animal.residents.filter(animalPerSex => animalPerSex.sex === sex)
            .map(resident => resident.name);
        } else {
          nameKey = animal.name;
          keyValue = animal.residents.map(resident => resident.name);
        }
        if (sorted === true) {
          return { [nameKey]: keyValue.sort() };
        }
        return { [nameKey]: keyValue };
      });
    objOfAnimals[location] = animalsFiltered;
  });
  return objOfAnimals;
}

function animalMap(options) {
  const locations = requireLocation();
  let sorted = false;
  let sex = false;
  if (options && options.sorted) {
    sorted = options.sorted;
  }
  if (options && options.sex) {
    sex = options.sex;
  }
  if (options && options.includeNames === true) {
    return animalsByLocationWithname(locations, sorted, sex);
  }
  return animalsByLocation(locations);
}
function notADayName() {
  const objOfDays = { };
  Object.keys(data.hours).forEach((day) => {
    if (day === 'Monday') {
      objOfDays[day] = 'CLOSED';
    } else {
      objOfDays[day] = `Open from ${data.hours[day].open}am until ${data.hours[day].close - 12}pm`;
    }
  });
  return objOfDays;
}

function withDayName(day) {
  if (day === 'Monday') {
    return { [day]: 'CLOSED' };
  }
  return { [day]: `Open from ${data.hours[day].open}am until ${data.hours[day].close - 12}pm` };
}

function schedule(dayName) {
  if (dayName) {
    const day = dayName;
    return withDayName(day);
  }
  return notADayName();
}


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
