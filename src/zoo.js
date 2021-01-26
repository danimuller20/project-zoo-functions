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

const { animals, employees, hours } = require('./data');
const data = require('./data');

function animalsByIds(...ids) {
  // seu código aqui
  return ids.map(id => animals.find(idAnimal => idAnimal.id === id));
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  return animals.some(({ name, residents }) =>
  name === animal && residents.every(valor => valor.age > age));
}

function employeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return data.employees
  .find(employee => employee.firstName === employeeName || employee.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return Object.assign({}, personalInfo, associatedWith);
}

function isManager(id) {
  // seu código aqui
  return employees.some(({ managers }) => (managers.find(value => (value === id))));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const addEmployees = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return employees.push(addEmployees);
}

function animalCount(species) {
  const result = {};
  if (species === undefined) {
    animals.forEach(animal => (result[animal.name] = animal.residents.length));
    return result;
  }
  return animals.find(animal => animal.name === species).residents.length;
}

function entryCalculator(entrants) {
  let result = 0;
  if (entrants === undefined) return result;
  Object.keys(entrants).forEach(type => (result += entrants[type] * data.prices[type]));
  return result;
}

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  const result = {};
  if (dayName === undefined) {
    Object.keys(hours).forEach((day) => {
      result[day] = `Open from ${hours[day].open}am until ${hours[day].close - 12}pm`;
      result.Monday = 'CLOSED';
    });
  } else if (dayName === 'Monday') {
    result[dayName] = 'CLOSED';
  } else {
    result[dayName] = `Open from ${hours[dayName].open}am until ${hours[dayName].close - 12}pm`;
  }
  return result;
}

function oldestFromFirstSpecies(id) {
  const employee = data.employees.find(employeer => employeer.id === id);
  const animal = animals.find(specie => specie.id === employee.responsibleFor[0])
  .residents.sort((age2, age1) => age1.age - age2.age);
  return [animal[0].name, animal[0].sex, animal[0].age];
}

function increasePrices(percentage) {
  Object.keys(data.prices)
  .forEach(entrant => (data.prices[entrant] =
    Math.round(((data.prices[entrant] * ((percentage / 100) + 1))
  .toFixed(3)) * 100) / 100));
}

function employeeCoverage(idOrName) {
  const result = {};
  const final = {};
  data.employees.forEach((employee) => {
    result[`${employee.firstName} ${employee.lastName}`] =
  animalsByIds(...employee.responsibleFor).map(animal => animal.name);
  });
  const employee = data.employees.find(person => person.id === idOrName ||
  person.firstName === idOrName || person.lastName === idOrName);
  if (employee === undefined) {
    return result;
  }
  final[`${employee.firstName} ${employee.lastName}`] =
  result[`${employee.firstName} ${employee.lastName}`];
  return final;
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
