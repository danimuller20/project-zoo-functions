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

const { animals, employees, prices, hours } = data; // destructure
function animalsByIds(...ids) {
  return animals.filter(value => ids.includes(value.id));
}

function animalsOlderThan(animal, age) {
  const animalFound = animals.find(value => value.name === animal);
  return animalFound.residents.every(ageOfAnimal => ageOfAnimal.age >= age);
}

function employeeByName(employeeName) {
  const employeeObject = employees.find(value =>
    value.firstName === employeeName || value.lastName === employeeName);
    if (!employeeObject) {
      return {};
    } return employeeObject;
  }
  
function createEmployee(personalInfo, associatedWith) {
  const newEmployee = Object.assign(personalInfo, associatedWith);
  return newEmployee;
}
  
function isManager(id) {
  return employees.some(employee => employee.managers.some(manager => (manager === id)));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  employees.push(newEmployee);
}
  
function animalCount(species) {
  const object = {};
  if (!species) {
    animals.forEach(animalSpe => (object[animalSpe.name] = animalSpe.residents.length));
    return object;
  }
  const arrayOfresidents = animals.filter(animal => animal.name === species);
  return arrayOfresidents[0].residents.length;
}
  
function entryCalculator(entrants) {
  let finalPrice = 0;
  if (entrants !== undefined && entrants !== {}) {
    const ticketInformation = Object.entries(entrants);
    ticketInformation.forEach((personPrice) => {
      finalPrice += prices[personPrice[0]] * personPrice[1];
    });
    return finalPrice;
  }
  return finalPrice;
}
  
  function animalMap(options) {
    // seu código aqui
  }
  
  function schedule(dayName) {
    const returnObject = {};
    const arraysKeys = Object.keys(hours);
    arraysKeys.forEach((dayOfWeek) => {
      const { open, close } = hours[dayOfWeek];
      if (dayOfWeek === 'Monday') {
        returnObject[dayOfWeek] = 'CLOSED';
      } else {
        returnObject[dayOfWeek] = `Open from ${open}am until ${close - 12}pm`;
      }
    });
    if (!dayName) {
      return returnObject;
    } return { [dayName]: returnObject[dayName] };
  }

  function oldestFromFirstSpecies(identifier) {
    const employeeRecord = employees.find(value => identifier === value.id);
    const animal = employeeRecord.responsibleFor[0];
    const animalsSameSpecies = animals
    .find(value => value.id === animal).residents
    .reduce((acc, value) => (acc.age < value.age ? value : acc));
    return Object.values(animalsSameSpecies);
  }
  // For ao inves do reduce -
  // let ageOfAnimal = 0;
  // let oldestAnimal = {}
  // for (let index = 0; index < animalsSameSpecies.length; index += 1) {
    //   if (animalsSameSpecies[index].age > ageOfAnimal) {
      //     ageOfAnimal = animalsSameSpecies[index].age;
      //     oldestAnimal = animalsSameSpecies[index];
      //   }
      // }
      // return Object.values(oldestAnimal);
      
function increasePrices(percentage) {
  const percentageValue = percentage / 100;
  const entrantAge = Object.keys(prices); // Retorna ["Adult", "Senior", "Child"]
  entrantAge.forEach((key) => {
    const increase = prices[key] * percentageValue;
    prices[key] += increase;
    prices[key] = Math.round(prices[key] * 100) / 100;
  });
  return prices;
}
      
// Usando o simples
// data.prices.Adult = Math.ceil(data.prices.Adult * (100 + percentage)).toFixed(2) / 100;
// data.prices.Senior = Math.ceil(data.prices.Senior * (100 + percentage)).toFixed(2) / 100;
// data.prices.Child = Math.ceil(data.prices.Child * (100 + percentage)).toFixed(2) / 100;
// return data.prices;
      
function employeeCoverage(idOrName) {
  const { firstName, lastName } = employees
  if (!idOrName) {
    const employeAnimalsList = {};
    const employeeRespectiveAnimals = employees
      .map(employee => employee.responsibleFor
      .map(animalId => animals
      .find(animal => animal.id === animalId).name));
    employees
      .forEach(({ firstName, lastName }, index) => {
        employeAnimalsList[`${firstName} ${lastName}`] = employeeRespectiveAnimals[index];
        });
    return employeAnimalsList;
  } else {
    const employeeInfo = employees.find (employee => employee.id === idOrName ||
     employee.firstName === idOrName ||
     employee.lastName === idOrName);
    const responsableForAnimalNames = employeeInfo.responsibleFor
     .map(animalId => animals.find(animal => animal.id === animalId).name);
    return { [`${employeeInfo.firstName} ${employeeInfo.lastName}`]: responsableForAnimalNames };
  }
}
console.log(employeeCoverage("Nigel"));
//   const data = require('./data');
// const { animals, employees } = data;
// const teste = employees
// .map(employee => employee.responsibleFor
// .map(animalId => animals
// .find(animal => animalId === animal.id).name));

// console.log(teste);
  
  // let key = (`${curr.firstName} ${curr.lastName}`);
  // let animalsName = curr.responsibleFor
  //   .map(animalId => animals
  //   .find(animal => animalId === animal.id).name);
  // acc[key] = animalsName;
  // console.log(acc);
  // // console.log(curr.responsibleFor);
  // // console.log(key);
  // }, {});

  // console.log(employeeCoverage('Nigel'));
  
  
  //   .find(employee => employee.id === idOrName ||
  //   employee.firstName === idOrName ||
  //   employee.lastName === idOrName);
  //   const employeeFullName = `${employeeInfo.firstName} ${employeeInfo.lastName}`;
    // mainObject.find(value => employeeFullName === value.keys);
    


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
