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
  const { animals } = data;
  const filteredAnimals = animals.filter(
    animal => ids.some(id => animal.id === id),
  );
  return filteredAnimals;
}

function animalsOlderThan(animal, age) {
  const { animals } = data;
  const findedAnimal = animals.find(currentAnimal => currentAnimal.name === animal);
  return findedAnimal.residents.every(resident => resident.age > age);
}

function employeeByName(employeeName) {
  const { employees } = data;
  const employee = employees.find(
    employeeItem => employeeItem.firstName === employeeName
      ||
      employeeItem.lastName === employeeName);
  if (!employee) return {};
  return employee;
}

function createEmployee(personalInfo, associatedWith) {
  const newEmployee = { ...personalInfo, ...associatedWith };
  return newEmployee;
}

function isManager(id) {
  const { employees } = data;
  return employees.some(
    employee => employee.managers.find(managerId => managerId === id),
  );
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const { employees } = data;
  const newEmployee = { id, firstName, lastName, managers, responsibleFor };
  employees.push(newEmployee);
}

function animalCount(species) {
  const { animals } = data;
  if (!species) {
    const animalsQuantity = {};
    animals.forEach((animal) => {
      animalsQuantity[animal.name] = animal.residents.length;
    });
    return animalsQuantity;
  }
  const animal = animals.find(animalItem => animalItem.name === species);
  const animalsQuantity = animal.residents.length;
  return animalsQuantity;
}

function entryCalculator(entrants) {
  if (!entrants) {
    return 0;
  }
  if (!Object.keys(entrants).length) {
    return 0;
  }
  const { prices } = data;
  const total = Object.entries(entrants).reduce(
    (prev, [entrantType, quantity]) => prev + (prices[entrantType] * quantity),
    0,
  );
  return total;
}
function categorizeAnimalsByLocation(animals) {
  const categorizedAnimals = {};
  animals.forEach((animal) => {
    const location = animal.location;
    if (categorizedAnimals[location]) {
      categorizedAnimals[location].push(animal.name);
    } else {
      categorizedAnimals[location] = [animal.name];
    }
  });
  return categorizedAnimals;
}

function addAnimalsName(categorizedAnimals, sex) {
  const { animals } = data;
  Object.keys(categorizedAnimals).forEach((locationName) => {
    categorizedAnimals[locationName] = categorizedAnimals[locationName].map(
      (animalName) => {
        const currentAnimal = animals.find(animal => animal.name === animalName);
        let residents = currentAnimal.residents;
        if (sex) {
          residents = residents.filter(resident => resident.sex === sex);
        }
        const residentsName = residents.map(resident => resident.name);
        const animalNames = {};
        animalNames[animalName] = residentsName;
        return animalNames;
      },
    );
  });
}

function sortAnimals(categorizedAnimals) {
  Object.keys(categorizedAnimals).forEach((locationName) => {
    categorizedAnimals[locationName].forEach(
      (object) => {
        const animalName = Object.keys(object)[0];
        object[animalName].sort();
      },
    );
  });
}

function animalMap(options) {
  const { animals } = data;
  const categorizedAnimals = categorizeAnimalsByLocation(animals);
  if (options && options.includeNames) {
    addAnimalsName(categorizedAnimals, options.sex);
  } else {
    return categorizedAnimals;
  }
  if (options && options.sorted) {
    sortAnimals(categorizedAnimals);
  }
  return categorizedAnimals;
}

function formatDay(dayHours) {
  const format12Hour = hour => (hour < 12 ? `${hour}am` : `${hour - 12}pm`);
  if (dayHours.open === 0 && dayHours.close === 0) {
    return 'CLOSED';
  }
  return `Open from ${format12Hour(dayHours.open)} until ${format12Hour(dayHours.close)}`;
}

function schedule(dayName) {
  const { hours } = data;
  const scheduleHours = {};
  if (dayName) {
    const dayHours = hours[dayName];
    scheduleHours[dayName] = formatDay(dayHours);
    return scheduleHours;
  }
  Object.keys(hours).forEach((day) => {
    scheduleHours[day] = formatDay(hours[day]);
  });
  return scheduleHours;
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
