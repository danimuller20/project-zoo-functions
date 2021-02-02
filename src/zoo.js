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

const { animals, employees, prices } = require('./data');
const data = require('./data');

function animalsByIds(...ids) {
  // seu código aqui
  if (!ids) {
    return [];
  }
  return animals.filter(animal => ids.includes(animal.id));
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const species = animals.find(creature => creature.name === animal);
  const residents = species.residents;
  const olderAnimals = residents.filter(currentAnimal => currentAnimal.age > age);
  return olderAnimals.length === residents.length;
}

function employeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) {
    return {};
  }
  const test = employees.filter(employee => employeeName.includes(employee.firstName)
  || employeeName.includes(employee.lastName));
  return test[0];
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return Object.assign({}, personalInfo, associatedWith);
}

function isManager(id) {
  // seu código aqui
  for (let i = 0; i < employees.length; i += 1) {
    if (employees[i].managers.includes(id)) {
      return true;
    }
  }
  return false;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function animalCount(species) {
  // seu código aqui
  if (!species) {
    return animals.reduce((acc, cur) => {
      acc[cur.name] = cur.residents.length;
      return acc;
    }, {});
  }
  const searchAnimals = animals.find(animal => animal.name === species);
  const amount = searchAnimals.residents.length;
  return amount;
}

function entryCalculator(entrants) {
  // seu código aqui
  if (!entrants) {
    return 0;
  }
  if (entrants === {}) {
    return 0;
  }
  const tickets = prices;
  const cost = Object.entries(entrants).reduce((acc, [age, amount]) =>
  acc + (tickets[age] * amount), 0);
  return cost;
}

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  // seu código aqui
  let workDay;
  if (dayName) workDay = { [dayName]: data.hours[dayName] };
  else workDay = data.hours;
  return Object.entries(workDay)
    .reduce((agenda, day) => Object.assign(agenda, { [day[0]]: (day[1].open !== 0) ?
      `Open from ${day[1].open}am until ${day[1].close - 12}pm` : 'CLOSED' }), {});
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
  const employee = data.employees.find(curr => curr.id === id);
  const firstSpeciesName = employee.responsibleFor[0];
  const allFromFirst = animals.find(animal =>
    firstSpeciesName.includes(animal.id)).residents;
  const oldestAnimalObj = allFromFirst.sort((a, b) =>
    b.age - a.age)[0];
  const { name, sex, age } = oldestAnimalObj;

  return [name, sex, age];
}

function increasePrices(percentage) {
  // seu código aqui
  const currentPrices = data.prices;
  const increase = percentage / 100;
  Object.entries(currentPrices).forEach(([ticketType, price]) => {
    const updatedPrice = price * (increase + 1);
    data.prices[ticketType] = Math.round(updatedPrice * 100) / 100;
  });
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
