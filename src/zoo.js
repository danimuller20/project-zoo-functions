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
  switch (ids.length) {
    case 0: {
      return [];
    }
    case 1: {
      const animalFind = [data.animals.find(animal => animal.id === ids[0])];
      return animalFind;
    }
    default: {
      return data.animals.filter(animal => ids.find(id => animal.id === id));
    }
  }
}

function animalsOlderThan(animal, age) {
  const animalSpecies = data.animals.find(species => species.name === animal);
  return animalSpecies.residents.every(minimalAge => minimalAge.age > age);
}

function employeeByName(employeeName) {
  if (!employeeName) return {};

  const firstName = data.employees.find(name => name.firstName === employeeName);
  const lastName = data.employees.find(name => name.lastName === employeeName);

  return firstName || lastName;
}

function createEmployee(personalInfo, associatedWith) {
  return Object.assign(personalInfo, associatedWith);
}

function isManager(id) {
  return data.employees.some(employee => employee.managers.find(managerId => managerId === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = { id, firstName, lastName, managers, responsibleFor };
  data.employees = data.employees.concat(newEmployee);
}

function animalCount(species) {
  if (!species) {
    return data.animals.reduce((prev, cur) => {
      prev[cur.name] = cur.residents.length;
      return prev;
    }, {});
  }
  let qtd = 0;
  data.animals.forEach((animal) => {
    if (animal.name === species) {
      qtd = animal.residents.length;
    }
  });
  return qtd;
}

function entryCalculator(entrants) {
  if (!entrants) return 0;

  let valor = 0;
  Object.keys(entrants).forEach((entrant) => {
    Object.keys(data.prices).forEach((category) => {
      if (category === entrant) {
        valor += (data.prices[category] * entrants[entrant]);
      }
    });
  });
  return valor;
}

function animalMap(options) {

}

function setTimeFormat(hour) {
  return (hour < 12) ? hour : hour - 12;
}

function schedule(dayName) {
  const result = {};

  Object.keys(data.hours).forEach((weekday) => {
    result[weekday] = `Open from ${data.hours[weekday].open}am until ${setTimeFormat(data.hours[weekday].close)}pm`;

    if (weekday === 'Monday') {
      result[weekday] = 'CLOSED';
    }
  });

  if (!dayName) return result;

  return { [dayName]: result[dayName] };
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  Object.keys(data.prices).forEach((category) => {
    const actualPrice = data.prices[category];
    const increasedPrice = actualPrice + ((actualPrice * percentage) / 100);
    data.prices[category] = parseFloat((increasedPrice + 0.005).toFixed(2));
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
