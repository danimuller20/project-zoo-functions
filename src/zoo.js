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

const { animals, employees, hours, prices } = data;

function animalsByIds(...ids) {
  return animals.filter(animal => ids.some(id => id === animal.id));
}
// console.log(animalsByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));

function animalsOlderThan(name, age) {
  return animals
  .some(animal => animal.residents
    .every(resident => animal.name === name && resident.age > age));
}
// console.log(animalsOlderThan('otters', 7));
// console.log(animalsOlderThan('penguins', 10));

function employeeByName(employeeName) {
  if (!employeeName) return {};
  return employees
  .find(employee => employee.firstName === employeeName || employee.lastName === employeeName);
}
// console.log(employeeByName('Emery'));
// console.log(employeeByName('Wishart'));

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some(employee => employee.managers.includes(id));
}
// console.log(isManager('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
// console.log(isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83'));

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function animalCount(species) {
  const allAnimals = {};
  animals.forEach((animal) => { allAnimals[animal.name] = animal.residents.length; });
  if (!species) return allAnimals;
  return allAnimals[species];
}
// console.log(animalCount());
// console.log(animalCount('lions'));
// console.log(animalCount('snakes'));

function entryCalculator(entrants) {
  if (!entrants) return 0;
  let total = 0;
  Object.keys(prices).forEach((person) => {
    if (entrants[person]) {
      total += entrants[person] * prices[person];
    }
  });
  return total;
}
// console.log(entryCalculator());
// console.log(entryCalculator({}));

function animalMap(options) {
// A função recebe um objeto como parâmetro
// A função retorna um objeto
// Modelo do objeto:
// chave === string com a localização
// valor sem parâmetro === array de strings com as espécies
// valor com parâmetro includeNames === array de objetos
// valor com parâmetro sorted === array de objetos com as espécies e o nome delas ordenadas
// valor com parâmetro sex === array de objetos com as espécies e o nome delas filtradas por sexo
// valor com os parâmetros sorted e sex === array de objetos com as espécies e o nome delas ordenadas e filtradas por sexo
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
/*
  const locations = retrieveLocations();
  const { includeNames = false, sex, sorted = false } = options;
  if (includeNames) {
    return retrieveAnimalsByLocationWithName(locations);
  }
  return retrieveAnimalsByLocation(locations);
}

function retrieveLocations() {
  return ['NE', 'NW', 'SE', 'SW'];
}

function retrieveAnimalsByLocation(locations) {
  const animalsByLocation = {};
  locations.forEach((location) => {
    const filteredAnimals = animals
      .filter((animal) => animal.location === location)
      .map((animal) => animal.name);
    // filter retona um array de objetos, map retorna um novo array de strings
    animalsByLocation[location] = filteredAnimals;
  });
  return animalsByLocation;
}

function retrieveAnimalsByLocationWithName(locations, sorted, sex) {
  const animalsByLocation = {};
  locations.forEach((location) => {
    const filteredAnimals = animals
      .filter((animal) => animal.location === location)
      .map((animal) => {
        const nameKey = animal.name;
        const nameValue = animals.residents
          .map(resident => resident.name);
        return { [nameKey]: nameValue };
      });
    animalsByLocation[location] = filteredAnimals;
  });
  return animalsByLocation;
} */
}

function schedule(dayName) {
// Ao chamar a função sem parâmetros: retorna um objeto com o cronograma inteiro
// Ao chamar a função com 1 parâmetro: retorna um objeto com o cronograma apenas do dia

// Formato do objeto de retorno (cronograma):
// chave === dia da semana
// valor === legível para humanos
// cronograma legível para humanos === 'Open from X until Y'
// cronograma legível para humanos quando o zoo não abre === 'CLOSED'

// 1. Buscar onde estão as infos de funcionamento do zoo (objeto hours)
// 2. Passar por cada entrada do objeto e buscar as infos do dia
// 3. Pegar as informações do zoo
// 4. Montar o cronograma
// 5. Retorna o cronograma

  const days = Object.keys(hours);
  const legibleSchedule = {};

  days.forEach((day) => {
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
// console.log(schedule());
// console.log(schedule('Monday'));
// console.log(schedule('Tuesday'));

function oldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  Object.keys(prices).forEach((key) => {
    prices[key] *= (1 + (percentage / 100));
    prices[key] = Math.round(prices[key] * 100) / 100;
  });
}
// increasePrices(20);
console.log(prices);

function employeeCoverage(id, firstName, lastName) {
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
