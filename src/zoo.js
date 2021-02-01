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

function retrieveLocations() {
  return ['NE', 'NW', 'SE', 'SW'];
}
function retrieveAnimalsByLocation(locations) {
  const animalsByLocation = {};
  locations.forEach((location) => {
    const filteredAnimals = animals
      .filter(animal => animal.location === location)
      .map(animal => animal.name);
    // filter retona um array de objetos, map retorna um novo array de strings
    animalsByLocation[location] = filteredAnimals;
  });
  return animalsByLocation;
}
function retrieveAnimalsByLocationWithName(locations, sorted, sex) {
  const animalsByLocation = {};
  locations.forEach((location) => {
    const filteredAnimals = animals
      .filter(animal => animal.location === location)
      .map((animal) => {
        const nameKey = animal.name;
        const nameValue = animal.residents
          .filter((resident) => {
            const filtered = sex !== undefined;
            return filtered ? resident.sex === sex : true;
          })
          .map(resident => resident.name);
        if (sorted) nameValue.sort();
        return { [nameKey]: nameValue };
      });
    animalsByLocation[location] = filteredAnimals;
  });
  return animalsByLocation;
}

function animalMap(options) {
// A função recebe um objeto como parâmetro
// A função retorna um objeto
// Modelo do objeto:
// chave === string com a localização
// valor sem parâmetro === array de strings com as espécies
// valor com parâmetro includeNames === array de objetos
// valor com parâmetro sorted === array de objetos com as espécies e o nome delas ordenadas
// valor com parâmetro sex === array de objetos com as espécies e o nome delas filtradas por sexo
// valor com os parâmetros sorted e sex ===
// array de objetos com as espécies e o nome delas ordenadas e filtradas por sexo
// valor sem includeNames === array de strings com as espécies
// 1. Recuperar as regiões que quero categorizar
// 2. Quando tenho as regiões, filtro os animais dessa região
// 3. Se não houver parâmetro de opções,
// retorna um array de strings com as espécies
// 4. Se a opção includeNames estiver habilitada,
// retona um array de objetos com as espécies e os nomes delas
// 5. Se a opção sorted estiver habilitada,
// retorna um array de objetos com as espécies e os nomes delas ordenados
// 6. Se a opção sex estiver habilitada,
// retorna um array de objetos com as espécies e os nomes delas filtrados por sexo
// 7. Se as opções sex e sorted estiverem habilitadas,
// retorna um array de objetos com as espécies e os nomes delas ordenados e filtrados por sexo
// 8. Se não houver a opção includeNames,
// retorna um array de strings com as espécies
  const locations = retrieveLocations();
  if (!options) {
    return retrieveAnimalsByLocation(locations);
  }
  const { includeNames, sex, sorted } = options;
  if (!includeNames) {
    return retrieveAnimalsByLocation(locations);
  }
  return retrieveAnimalsByLocationWithName(locations, sorted, sex);
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
  } const employeeInfo = employees.find(employee => employee.id === idOrName ||
      employee.firstName === idOrName ||
      employee.lastName === idOrName);
  const responsableForAnimalNames = employeeInfo.responsibleFor
    .map(animalId => animals.find(animal => animal.id === animalId).name);
  return { [`${employeeInfo.firstName} ${employeeInfo.lastName}`]: responsableForAnimalNames };
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
