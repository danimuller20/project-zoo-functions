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

  return employees.find(employee =>
    employee.firstName === employeeName || employee.lastName === employeeName);
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
    if (hours[day].open === 0) {
      newObj[day] = 'CLOSED';
    }
  });
  return newObj;
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
}

function employeeCoverage(idOrName) {
  const employeeResponsible = () => {
    const newArray = [];
    employees.forEach(employee => {
      employee.responsibleFor.forEach(id => {
        const animalItem = animals.find(animal => animal.id === id);
        if (!newArray.includes(animalItem)) {
          newArray.push(animalItem);
        }
      })
    })
    return newArray;
  }

  const result = {};
  const animalResponsibleFor = employee => employeeResponsible()
    .filter(animal => employee.responsibleFor.includes(animal.id))
    .map(animal => animal.name);

  if (idOrName === undefined) {
    employees.forEach((employee) => {
      result[`${employee.firstName} ${employee.lastName}`] = animalResponsibleFor(employee);
    });
    return result;
  }

  const employeeName = employees
    .find(employee => employee.id === idOrName
    || employee.firstName === idOrName || employee.lastName === idOrName);
  result[`${employeeName.firstName} ${employeeName.lastName}`] = animalResponsibleFor(employeeName);
  return result;
}
// console.log(employeeCoverage());

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
