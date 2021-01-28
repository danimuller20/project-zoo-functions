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

const { hours } = require('./data');
const data = require('./data');

const { animals, employees, prices } = data;

function animalsByIds(...ids) {
  const animalsSelected = [];
  ids.forEach((id) => {
    animals.filter(animal => (animal.id === id ? animalsSelected.push(animal) : ''));
  });
  return animalsSelected;
}

function animalsOlderThan(animal, age) {
  const lookingForAnimal = animals.find(currentAnimal => animal === currentAnimal.name);
  return lookingForAnimal.residents.every(resident => resident.age >= age);
}

function employeeByName(employeeName) {
  if (employeeName === undefined) return {};

  return employees.find(({ firstName, lastName }) =>
    firstName === employeeName || lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;

  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return newEmployee;
}

function isManager(id) {
  return employees.some(employee => employee.managers.some(manager => manager === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function animalCount(species) {
  if (species !== undefined) {
    return animals.find(currentAnimal =>
      currentAnimal.name === species).residents.length;
  }

  const newObj = {};
  animals.forEach((animal) => {
    newObj[animal.name] = animal.residents.length;
  });
  return newObj;
}

function entryCalculator(entrants) {
  let total = 0;

  if (entrants === undefined) return total;

  const { Adult, Senior, Child } = prices;
  const { Adult: qtdAdult = 0, Senior: qtdSenior = 0, Child: qtdChild = 0 } = entrants;

  total += (Adult * qtdAdult) + (Senior * qtdSenior) + (Child * qtdChild);
  return total;
}

function animalMap(options) {
  // const contentByLocation = { NE: [], NW: [], SE: [], SW: [] };
  // const { NE, NW, SE, SW } = contentByLocation;
}

function schedule(dayName) {
  if (dayName === 'Monday') return { Monday: 'CLOSED' };
  const openingHours = hours[dayName];

  if (dayName !== undefined) {
    return { [dayName]: `Open from ${openingHours.open}am until ${openingHours.close - 12}pm` };
  }

  const newObj = {};
  Object.keys(hours).forEach((day) => {
    newObj[day] = `Open from ${hours[day].open}am until ${hours[day].close - 12}pm`;
    if (!hours[day].open) newObj[day] = 'CLOSED';
  });

  return newObj;
}

function oldestFromFirstSpecies(id) {
  const animalId = employees.find(({ id: employeeId }) => (employeeId === id)).responsibleFor[0];
  const specieResidents = animals.find(({ id: specieId }) => (specieId === animalId)).residents;
  const result = specieResidents.reduce((acc, current) => (acc.age < current.age ? current : acc));

  const { name, sex, age } = result;
  const newArray = [name, sex, age];
  return newArray;
}

function increasePrices(percentage) {
  prices.Adult = +((prices.Adult * ((percentage / 100) + 1.00001))).toFixed(2);
  prices.Senior = +((prices.Senior * ((percentage / 100) + 1.00001))).toFixed(2);
  prices.Child = +((prices.Child * ((percentage / 100) + 1.00001))).toFixed(2);
}

function employeeCoverage(idOrName) {
  if (idOrName) {
    const responsibilitiesList = employees.find(({ id, firstName, lastName }) =>
    (id === idOrName || firstName === idOrName || lastName === idOrName));

    const { firstName, lastName, responsibleFor } = responsibilitiesList;

    const newArray = [];
    responsibleFor.forEach(animalId => animals.find(({ id, name }) => {
      if (id === animalId) {
        newArray.push(name);
      }
    }));

    const newObj = {
      [`${firstName} ${lastName}`]: newArray,
    };

    return newObj;
  }

  const completeResponsabilityList = {};
  employees.forEach(({ firstName, lastName, responsibleFor }) => {
    const animalsList = responsibleFor.map(animalId =>
      animals.find(animal => animalId === animal.id).name);

    completeResponsabilityList[`${firstName} ${lastName}`] = animalsList;
  });
  return completeResponsabilityList;
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
