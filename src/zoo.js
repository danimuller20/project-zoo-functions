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

const { animals, employees } = require('./data');
const data = require('./data');

function animalsByIds(...ids) {
  const zooArray = [];
  if (!ids) {
    return [];
  }
  if (ids.length >= 1) {
    // for (let index = 0; index < ids.length; index++) {
    //   const element = ids[index];
    //   achou.push(data.animals.find((animal) => animal.id === element));
    // }
    ids.forEach((codigo) => {
      zooArray.push(animals.find(animal => animal.id === codigo));
    });
  }
  return zooArray;
}
// console.log(animalsByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));

function animalsOlderThan(animal, age) {
  let returnSearch = false;
  animals.find((especie) => {
    if (especie.name === animal) {
      returnSearch = especie.residents.some(apelido => apelido.age < age);
    }
    return returnSearch;
  });
  return !returnSearch;
}
// console.log(animalsOlderThan('penguins', 7));
// console.log(animals[0].residents);

function employeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  const objFuncionari = data.employees.find(functionari =>
    (functionari.firstName === employeeName || functionari.lastName === employeeName));
  return objFuncionari;
}
// console.log(employeeByName());
// console.log(employeeByName('Nelson'));

function createEmployee(personalInfo, associatedWith) {
  const newObj = { ...personalInfo, ...associatedWith };
  return newObj;
}

function isManager(id) {
  let boo = false;
  // aqui se o id for igual ao manager de employ return o objeto
  const objEmploy = employees.find(employ => employ.managers.includes(id));
  if (!objEmploy) {
    boo = false;
  } else {
    boo = true;
  }
  return boo;
}
// console.log(isManager('b0dc644a-5335-489b-8a2c-4e086c7819a2'));


function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  const newObj = {};
  newObj.id = id;
  newObj.firstName = firstName;
  newObj.lastName = lastName;
  newObj.managers = managers;
  if (!newObj.managers) {
    newObj.managers = [];
  }
  newObj.responsibleFor = responsibleFor;
  if (!newObj.responsibleFor) {
    newObj.responsibleFor = [];
  }
  employees.push(newObj);
  return employees;
}
// addEmployee('39800c14-4b76-454a-858d-2f8d168146a7','John','Doe',[],[]);

function animalCount(species) {
  const obj = {};
  let countSpecies = 0;
  if (!species) {
    animals.forEach((animal) => {
      obj[animal.name] = animal.residents.length;
    });
    return obj;
  }
  animals.find((animal) => {
    if (animal.name === species) {
      countSpecies = animal.residents.length;
    }
    return countSpecies;
  });
  return countSpecies;
}
// console.log(animalCount('lions'));

function calculatorPrices(param1, param2, sumControl, price) {
  param1.forEach((valueEntrants) => {
    param2.forEach((valuePrice) => {
      if (valuePrice[0] === valueEntrants[0]) {
        sumControl = valuePrice[1] * valueEntrants[1];
        price += sumControl;
      }
    });
  });
  return price;
}

function entryCalculator(entrants) {
  let valuesEntrants = '';
  let valuesPrices = '';
  const priceControl = 0;
  let priceEntrants = 0;
  if (!entrants) {
    return priceEntrants;
  }
  if (Object.entries(entrants).length === 0) {
    return priceEntrants;
  }
  valuesEntrants = Object.entries(entrants);
  valuesPrices = Object.entries(data.prices);
  priceEntrants = calculatorPrices(valuesEntrants, valuesPrices, priceControl, priceEntrants);

  return priceEntrants;
}
// console.log(entryCalculator({ 'Adult': 2, 'Child': 3, 'Senior': 1 }));

function animalMap(options) {
  // seu código aqui
}
// console.log(animalMap());

function schedule(dayName) {
  const newObj = {};
  const hours = data.hours;
  const everyDays = Object.keys(hours);

  everyDays.forEach((day) => {
    const { open, close } = hours[day];

    if (day === 'Monday') {
      newObj[day] = 'CLOSED';
    } else {
      newObj[day] = `Open from ${open}am until ${close - 12}pm`;
    }
  });

  if (!dayName) {
    return newObj;
  }

  return { [dayName]: newObj[dayName] };
}
// console.log(schedule('Sunday'));

function oldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
  const { Adult, Senior, Child } = data.prices;
  const percent = percentage / 100;
  const NewPriceAdult = Adult + (Adult * percent);
  const NewPriceSenior = Senior + (Senior * percent);
  const NewPriceChild = Child + (Child * percent);
  data.prices.Adult = Math.round(NewPriceAdult * 100) / 100;
  data.prices.Senior = Math.round(NewPriceSenior * 100) / 100;
  data.prices.Child = Math.round(NewPriceChild * 100) / 100;

  return data.prices;
}
// console.log(increasePrices(50));

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
