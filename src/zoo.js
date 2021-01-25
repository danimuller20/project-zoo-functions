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

const filt = (animals, ids) => {
  let b;
  for (let i = 0; i < ids.length; i += 1) {
    if (ids[i] === animals.id) {
      b = animals;
    }
  }
  return b;
};

const animals = idsA => data.animals.filter(item => filt(item, idsA));
function animalsByIds(...ids) {
  if (!ids[0]) {
    return [];
  }
  return animals([...ids]);
}

function animalsOlderThan(animal, age) {
  const selectedAnimal = data.animals.filter(item => item.name === animal);
  const isOlder = selectedAnimal[0].residents.every(resident => resident.age >= age);
  return isOlder;
}

const filtEmp = empName => data.employees.filter((emp) => {
  const emplo = emp.firstName === empName || emp.lastName === empName;
  return emplo;
})[0] || {};

function employeeByName(employeeName) {
  return filtEmp(employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  personalInfo.managers = associatedWith.managers;
  personalInfo.responsibleFor = associatedWith.responsibleFor;
  return personalInfo;
}

function isManager(id) {
  return data.employees.map(item => item.managers.some(emp => emp === id))[0];
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  const newEmp = {};
  newEmp.id = id;
  newEmp.firstName = firstName;
  newEmp.lastName = lastName;
  newEmp.managers = managers || [];
  newEmp.responsibleFor = responsibleFor || [];
  data.employees.push(newEmp);
  return data;
}

function animalCount(species) {
  const mapperCount = data
    .animals
    .map(item => ({ [item.name]: item.residents.length }))
    .reduce((a, b) => ({ ...b, ...a }), {});
  return mapperCount[species] || mapperCount;
}

/* eslint no-restricted-syntax: ["error",
"FunctionExpression",
"WithStatement",
"BinaryExpression[operator='in']"] */
function entryCalculator(entrants = 0) {
  const listEntrants = ['Adult', 'Child', 'Senior'];
  let total = 0;
  for (const i of listEntrants) {
    total += (entrants[i] && data.prices[i] * entrants[i]) || 0;
  }
  return total;
}


const withSexOptions = (itemm, options) => {
  if (typeof options.sorted !== 'undefined') {
    return {
      [itemm.name]: itemm.residents.filter(item => item.sex === options.sex)
        .map(res => res.name).sort(),
    };
  }
  return {
    [itemm.name]: itemm.residents
      .filter(item => item.sex === 'female')
      .map(res => res.name),
  };
};

const withIncludeNameWithSorted = (item, options) => {
  if (options.sorted === true) {
    return {
      [item.name]: item.residents
      .map(res => res.name).sort(),
    };
  }
  return 'undfined';
};
const withIncludeTrue = (item, options) => {
  if (typeof options.sex !== 'undefined') {
    return withSexOptions(item, options);
  }
  if (typeof options.sorted !== 'undefined') {
    return withIncludeNameWithSorted(item, options);
  }
  return {
    [item.name]: item.residents
      .map(res => res.name),
  };
};
const filterAN = (i, options) => data.animals
    .filter(item => item.location === i)
    .map((item) => {
      if (typeof options !== 'undefined') {
        if (options.includeNames === true) {
          return withIncludeTrue(item, options);
        }
      }
      return item.name;
    },
  );

function animalMap(options) {
  const locatations = ['NE', 'NW', 'SE', 'SW'];
  const animalByLocation = {};
  for (const i of locatations) {
    animalByLocation[i] = filterAN(i, options);
  }
  return animalByLocation;
}

const weekdays = {
  Tuesday: 'Open from 8am until 6pm',
  Wednesday: 'Open from 8am until 6pm',
  Thursday: 'Open from 10am until 8pm',
  Friday: 'Open from 10am until 8pm',
  Saturday: 'Open from 8am until 10pm',
  Sunday: 'Open from 8am until 8pm',
  Monday: 'CLOSED',
};

function schedule(dayName = weekdays) {
  return (weekdays[dayName] && { [dayName]: weekdays[dayName] }) || dayName;
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
