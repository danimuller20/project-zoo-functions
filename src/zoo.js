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

const { animals, employees, prices, hours } = data;

function animalsByIds(...ids) {
  // seu código aqui
  return animals.filter(animal => ids.some(id => id === animal.id));
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  return animals.some(currentAnimal =>
    currentAnimal.residents
    .every(resident => resident.age >= age && currentAnimal.name === animal));
}

function employeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) return {};
  return employees
    .find(employee => employee.firstName === employeeName || employee.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  return employees
    .some(employee => employee.managers
    .some(manager => manager === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  return employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function animalCount(species) {
  // seu código aqui
  const animalsObject = {};
  animals.map((animal) => {
    animalsObject[animal.name] = animal.residents.length;
    return animalsObject;
  });
  if (!species) {
    return animalsObject;
  }
  return animals.filter(animal => animal.name === species)[0].residents.length;
}


function entryCalculator(entrants) {
  // seu código aqui
  // se nao for passado parametro 
  if (!entrants) return 0;
  let entrantTotal = 0;
  // para cada faixa etária em prices, 
  // verifica se a mesma exite dentro de prices
  // caso exista, entrantotal recebe o valor de
  // prices[faixaEtaria] vezes o parametro entrants na chave [faixaEtaria] 
  Object.keys(prices)
    .forEach((key) => {
      if (key in entrants) {
        entrantTotal += prices[key] * entrants[key];
      }
    });
  return entrantTotal;
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
    // seu código
    // seu código aqui
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
  // seu código aqui
  const legibleSchedule = {};
  Object.keys(hours).forEach((day) => {
    const { open, close } = hours[day];
    if (day === 'Monday') {
      legibleSchedule[day] = 'CLOSED';
    } else {
      legibleSchedule[day] = `Open from ${open}am until ${close - 12}pm`;
    }
  });
  if (!dayName) {
    return legibleSchedule;
  }
  return { [dayName]: legibleSchedule[dayName] };
}

console.log(schedule('Friday'));

function oldestFromFirstSpecies(id) {
  // seu código aqui
  const selectedEmployee = employees.filter(employee => employee.id === id);
  const animalId = selectedEmployee.map(element => element.responsibleFor[0]);
  const residents = animals.find(animal => animal.id === animalId[0]).residents;
  const olderAnimal = residents.reduce((acc, current) => {
    if (acc.age < current.age) {
      acc = current;
    }
    return acc;
  });
  return Object.values(olderAnimal);
}

function increasePrices(percentage) {
  // seu código aqui
  Object.keys(prices)
    .forEach((key) => {
      prices[key] = parseFloat(Math
    .fround(prices[key] * ((percentage / 100) + 1))
    .toFixed(2));
    });
}

function employeeCoverage(idOrName) {
  // seu codigo aqui
  const coverageList = {};
  if (!idOrName) {
    const employeeRespectiveAnimals = employees
      .map(employee => employee.responsibleFor
      .map(animalId => animals
      .find(animal => animal.id === animalId).name));
    employees
      .forEach(({ firstName, lastName }, index) => {
        coverageList[`${firstName} ${lastName}`] = employeeRespectiveAnimals[index];
      });
    return coverageList;
  }

  const { firstName, lastName, responsibleFor } = employees
    .find(employee =>
      employee.firstName === idOrName ||
      employee.lastName === idOrName ||
      employee.id === idOrName);

  return { [`${firstName} ${lastName}`]: responsibleFor
    .map(animalId => animals
    .find(animal => animal.id === animalId).name) };
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
