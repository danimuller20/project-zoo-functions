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

const { employees, animals, prices } = data;

function animalsByIds(...ids) {
  if (ids === undefined) {
    return [];
  }
  const verify = ids.map(elem => (data.animals.find(elem2 => elem2.id.includes(elem))));
  return verify;
}

function animalsOlderThan(animal, age) {
  const animalFind = data.animals.find(animalObject => animalObject.name === animal);
  const ageList = animalFind.residents.map(resident => resident.age);
  return ageList.every(ageIndex => ageIndex >= age);
}

function employeeByName(employeeName) {
  if (employeeName === undefined) return {};
  return employees.find(
    employee =>
      employee.firstName === employeeName || employee.lastName === employeeName,
  );
}

function createEmployee(personalInfo, associatedWith) {
  return Object.assign(personalInfo, associatedWith);
}

function isManager(id) {
  return data.employees.some(item => item.managers.some(item2 => item2 === id));
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  if (!species) {
    return animals.reduce((accObj, animal) => {
      accObj[animal.name] = animal.residents.length;
      return accObj;
    }, {});
  }
  return animals.find(animal => animal.name === species).residents.length;
}

function entryCalculator(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) { return 0; }
  const arrayEntrants = Object.entries(entrants);
  const result = [];
  arrayEntrants.forEach(item => result.push((item[1] * data.prices[item[0]])));
  return result.reduce((acc, curr) => acc + curr);
}

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  const container = {};
  if (dayName === 'Monday') {
    container[dayName] = 'CLOSED';
    return container;
  } else if (dayName) {
    container[dayName] = `Open from ${data.hours[dayName].open}am until ${data.hours[dayName].close - 12}pm`;
    return container;
  }
  const arrayHours = Object.entries(data.hours);
  arrayHours.forEach((item) => {
    if (item[0] === 'Monday') {
      container[item[0]] = 'CLOSED';
    } else {
      container[item[0]] = `Open from ${item[1].open}am until ${item[1].close - 12}pm`;
    }
  });
  return container;
}

function oldestFromFirstSpecies(id) {
  const firstResponsibleFor = employees.find(employee => employee.id === id).responsibleFor[0];
  const caredAnimals = animals.find(animal => animal.id === firstResponsibleFor).residents;
  const oldest = caredAnimals.sort((animal1, animal2) => animal2.age - animal1.age)[0];
  const { name, sex, age } = oldest;
  return [name, sex, age];
}

function increasePrices(percentage) {
  const pricesKeys = Object.keys(prices);
  pricesKeys.forEach((price) => {
    prices[price] = Math.round(prices[price] * (1 + (percentage / 100)) * 100) / 100;
  });
}

function employeeCoverage(idOrName) {
  const arrEmployee = employees.filter((employee) => {
    if (idOrName === '') {
      return true;
    }
    return Object.values(employee)
      .some(info => info === idOrName);
  });
  const arr = {};
  arrEmployee.map((employee, idx) => {
    const arrName = [];
    employee.responsibleFor
      .forEach((animalId, index) => {
        const animalName = animals.find(animal => animal.id === animalId);
        arrName[index] = animalName.name;
      });
    const { firstName, lastName } = arrEmployee[idx];
    arr[`${firstName} ${lastName}`] = arrName;
    return 'maravilhoso!!!';
  });
  return arr;
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
